import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Cookie, X, Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface CookieConsentProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

export const CookieConsent = ({ onPrivacyClick, onTermsClick }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isGDPR, setIsGDPR] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (consent) {
      setIsVisible(false);
      return;
    }

    // Detect user's location (GDPR regions or not)
    detectLocation();
    const showDelay = setTimeout(() => setIsVisible(true), 60000); // show after 60s
    return () => clearTimeout(showDelay);
  }, []);

  const detectLocation = async () => {
    try {
      // Try to detect location using a free geolocation API
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      
      // GDPR country codes (EU + UK)
      const gdprCountries = [
        "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR",
        "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL",
        "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB", "UK"
      ];
      
      setIsGDPR(gdprCountries.includes(data.country_code));
    } catch (error) {
      console.error("Geolocation detection failed:", error);
      // Fallback: assume non-GDPR to show simpler banner
      setIsGDPR(false);
    }
  };

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const handleManagePreferences = () => {
    setShowPreferences(true);
  };

  const handleSavePreferences = () => {
    // For now, save only necessary cookies
    handleAcceptNecessary();
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 animate-fade-in-up">
        <Card className="max-w-4xl mx-auto bg-card border-border shadow-2xl" style={{ maxHeight: "280px" }}>
          <div className="p-4 flex flex-col" style={{ maxHeight: "280px" }}>
            {/* Header and content section - scrollable */}
            <ScrollArea className="flex-1 pr-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                  <Cookie className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">Cookie Notice</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    Read our{" "}
                    <button
                      onClick={onPrivacyClick}
                      className="text-primary hover:underline font-medium"
                    >
                      Privacy Policy
                    </button>
                    {" "}and{" "}
                    <button
                      onClick={onTermsClick}
                      className="text-primary hover:underline font-medium"
                    >
                      Terms of Service
                    </button>
                    {" "}for more information.
                  </p>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 rounded-md hover:bg-accent/10 transition-colors shrink-0"
                  aria-label="Dismiss"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </ScrollArea>

            {/* Buttons section - always visible, fixed at bottom */}
            <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
              {isGDPR ? (
                // GDPR regions: Show all 4 buttons
                <>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      onClick={handleAcceptAll}
                      className="gradient-cta glow-hover font-semibold flex-1"
                      aria-label="Accept all cookies"
                    >
                      Accept All
                    </Button>
                    <Button
                      onClick={handleAcceptNecessary}
                      variant="outline"
                      className="border-accent/50 text-accent hover:bg-accent/10 flex-1"
                      aria-label="Accept necessary cookies only"
                    >
                      Accept Necessary
                    </Button>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      onClick={handleReject}
                      variant="outline"
                      className="border-destructive/50 text-destructive hover:bg-destructive/10 flex-1"
                      aria-label="Reject all non-essential cookies"
                    >
                      Reject
                    </Button>
                    <button
                      onClick={handleManagePreferences}
                      className="text-accent hover:underline text-sm font-medium py-2 flex items-center justify-center gap-1 flex-1"
                      aria-label="Manage cookie preferences"
                    >
                      <Settings className="h-4 w-4" />
                      Manage Preferences
                    </button>
                  </div>
                </>
              ) : (
                // Non-GDPR regions: Show only Accept All and Reject
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    onClick={handleAcceptAll}
                    className="gradient-cta glow-hover font-semibold flex-1"
                    aria-label="Accept all cookies"
                  >
                    Accept All
                  </Button>
                  <Button
                    onClick={handleReject}
                    variant="outline"
                    className="border-destructive/50 text-destructive hover:bg-destructive/10 flex-1"
                    aria-label="Reject all non-essential cookies"
                  >
                    Reject
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>

      {/* Preferences Modal */}
      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="sm:max-w-2xl max-h-[85vh] bg-card border-border">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              <DialogTitle className="text-2xl font-bold">Cookie Preferences</DialogTitle>
            </div>
          </DialogHeader>

          <ScrollArea className="max-h-[50vh] pr-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                <div>
                  <h4 className="font-semibold mb-1">Necessary Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Required for the website to function properly. These cannot be disabled.
                  </p>
                </div>
                <div className="text-sm font-medium text-primary">Always Active</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg opacity-60">
                <div>
                  <h4 className="font-semibold mb-1">Analytics Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how visitors interact with our website by collecting anonymous data.
                  </p>
                </div>
                <div className="text-sm font-medium text-muted-foreground">Disabled</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg opacity-60">
                <div>
                  <h4 className="font-semibold mb-1">Marketing Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Used to deliver personalized advertisements and track campaign performance.
                  </p>
                </div>
                <div className="text-sm font-medium text-muted-foreground">Disabled</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg opacity-60">
                <div>
                  <h4 className="font-semibold mb-1">Functional Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Enable enhanced functionality like chat widgets and personalized content.
                  </p>
                </div>
                <div className="text-sm font-medium text-muted-foreground">Disabled</div>
              </div>
            </div>
          </ScrollArea>

          <DialogFooter className="border-t border-border pt-4">
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <Button
                variant="outline"
                onClick={() => setShowPreferences(false)}
                className="border-primary/50 hover:bg-primary/10 flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSavePreferences}
                className="gradient-cta glow-hover font-semibold flex-1"
              >
                Save Preferences
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
