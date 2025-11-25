import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "sonner";

interface UnsubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UnsubscribeModal = ({ isOpen, onClose }: UnsubscribeModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const STORAGE_KEY = "unsubscribe_emails";
  
  // Web3Forms access key - same as contact form
  const WEB3FORMS_ACCESS_KEY = "b76b18e4-2196-4645-92d6-968ded1caaaf";
  
  const getStoredUnsubscribes = (): string[] => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };
  
  const addUnsubscribe = (addr: string) => {
    try {
      const list = getStoredUnsubscribes();
      if (!list.includes(addr)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...list, addr]));
      }
    } catch {}
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email address is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send unsubscribe request to Web3Forms for server-side storage
      const formData = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "Unsubscribe Request - Newsletter",
        from_name: "Robin Rajan Landing Page - Unsubscribe",
        email: email,
        message: `Unsubscribe request from: ${email}\n\nTimestamp: ${new Date().toISOString()}\n\nThis user has requested to be removed from the mailing list.`,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Also store locally for immediate feedback
        addUnsubscribe(email);
        
        toast.success("Successfully unsubscribed! We're sorry to see you go.");
        setEmail("");
        onClose();
      } else {
        setError("Failed to process unsubscribe request. Please try again.");
      }
    } catch (error) {
      console.error("Unsubscribe error:", error);
      setError("Failed to unsubscribe. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setEmail("");
      setError("");
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Unsubscribe</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Enter your email address to unsubscribe from our mailing list.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="unsubscribe-email" className="block text-sm font-medium">
              Email Address
            </label>
            <Input
              id="unsubscribe-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="yourname@company.com"
              className="bg-background border-border"
              disabled={isSubmitting}
              required
            />
            {error && (
              <p className="text-sm text-destructive font-medium">{error}</p>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              className="gradient-cta glow-hover font-semibold flex-1"
              disabled={isSubmitting}
            >
              <Mail className="mr-2 h-4 w-4" />
              {isSubmitting ? "Processing..." : "Unsubscribe"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
              className="border-primary/50 hover:bg-primary/10"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
