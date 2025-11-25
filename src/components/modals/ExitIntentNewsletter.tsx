import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles } from "lucide-react";
import { toast } from "sonner";

export const ExitIntentNewsletter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check URL for unsubscribe intent
    const params = new URLSearchParams(window.location.search);
    const isUnsubscribeIntent = params.get("unsubscribe") === "true" || params.get("action") === "unsubscribe";
    
    if (isUnsubscribeIntent) {
      sessionStorage.setItem("suppressNewsletterPopup", "true");
      return;
    }

    // Check if newsletter popup should be suppressed
    const shouldSuppress = sessionStorage.getItem("suppressNewsletterPopup");
    if (shouldSuppress) return;

    // Check how many times the popup has been shown (max 2 per session)
    const showCount = parseInt(sessionStorage.getItem("exitIntentShowCount") || "0");
    if (showCount >= 2) return;

    // Don't trigger on mobile devices
    if (window.innerWidth < 768) return;

    const ATTACH_DELAY_MS = Math.floor(60000 + Math.random() * 60000); // 60–120s
    let showTimeout: NodeJS.Timeout;
    let attachTimeout: NodeJS.Timeout;
    let listenerAttached = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 50 && window.innerWidth >= 768) {
        clearTimeout(showTimeout);
        showTimeout = setTimeout(() => {
          const currentCount = parseInt(sessionStorage.getItem("exitIntentShowCount") || "0");
          if (currentCount < 2) {
            setIsOpen(true);
            sessionStorage.setItem("exitIntentShowCount", String(currentCount + 1));
          }
        }, 300);
      }
    };

    attachTimeout = setTimeout(() => {
      document.addEventListener("mousemove", handleMouseMove);
      listenerAttached = true;
    }, ATTACH_DELAY_MS);

    return () => {
      if (listenerAttached) {
        document.removeEventListener("mousemove", handleMouseMove);
      }
      clearTimeout(showTimeout);
      clearTimeout(attachTimeout);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual newsletter subscription endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.success("🎉 Successfully subscribed! Check your inbox for updates.");
      setEmail("");
      setIsOpen(false);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNoThanks = () => {
    setIsOpen(false);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setEmail("");
    }
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <div className="flex items-center justify-center mb-2">
            <div className="p-3 bg-primary/10 rounded-full">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center">
            Wait! Don't Miss Out
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground text-center">
            Get exclusive automation tips, workflow templates, and tech insights delivered to your inbox weekly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="yourname@company.com"
              className="bg-background border-border text-base h-12"
              disabled={isSubmitting}
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <Button
              type="submit"
              className="gradient-cta text-base px-8 py-6 glow-hover font-semibold w-full"
              disabled={isSubmitting}
            >
              <Mail className="mr-2 h-5 w-5" />
              {isSubmitting ? "Subscribing..." : "Subscribe Now"}
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={handleNoThanks}
              className="hover:bg-accent/10 hover:text-accent-foreground"
              disabled={isSubmitting}
            >
              No, thanks
            </Button>
          </div>
        </form>

        <p className="text-xs text-center text-muted-foreground mt-2">
          Join 500+ professionals who trust our automation insights. Unsubscribe anytime.
        </p>
      </DialogContent>
    </Dialog>
  );
};
