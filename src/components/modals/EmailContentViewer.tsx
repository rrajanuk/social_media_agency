import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mail } from "lucide-react";

interface EmailContent {
  id: string;
  subject: string;
  content: string;
}

export const EmailContentViewer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [emailContent, setEmailContent] = useState<EmailContent | null>(null);

  useEffect(() => {
    // Check URL parameters on mount
    const params = new URLSearchParams(window.location.search);
    const isEmailView = params.get("email") === "view";
    const contentId = params.get("contentId");

    if (isEmailView && contentId) {
      // Load email content based on contentId
      loadEmailContent(contentId);
      setIsOpen(true);
    }
  }, []);

  const loadEmailContent = async (contentId: string) => {
    try {
      // Simulate API call - replace with actual email content endpoint
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Placeholder content - replace with actual data from your backend
      const content: EmailContent = {
        id: contentId,
        subject: "Weekly Automation Insights",
        content: `
          <div style="font-family: inherit;">
            <h1 style="color: hsl(217, 91%, 60%); margin-bottom: 1rem;">Welcome to Our Newsletter</h1>
            
            <p style="margin-bottom: 1rem; line-height: 1.6;">
              Hi there! 👋
            </p>
            
            <p style="margin-bottom: 1rem; line-height: 1.6;">
              Thank you for subscribing to our newsletter. Here are this week's top automation insights:
            </p>
            
            <h2 style="color: hsl(217, 91%, 60%); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.5rem;">
              🚀 Featured Workflow
            </h2>
            
            <p style="margin-bottom: 1rem; line-height: 1.6;">
              Discover how to automate your travel booking process with n8n and Pipedrive integration. 
              This workflow has saved our clients an average of 18 hours per week.
            </p>
            
            <h3 style="color: hsl(189, 94%, 43%); margin-top: 1.25rem; margin-bottom: 0.75rem; font-size: 1.25rem;">
              Key Benefits:
            </h3>
            
            <ul style="margin-bottom: 1rem; line-height: 1.8; padding-left: 1.5rem;">
              <li>Automated booking confirmation emails</li>
              <li>Real-time CRM updates</li>
              <li>Error handling and notifications</li>
              <li>Custom field mapping</li>
            </ul>
            
            <h2 style="color: hsl(217, 91%, 60%); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.5rem;">
              💡 Pro Tip of the Week
            </h2>
            
            <p style="margin-bottom: 1rem; line-height: 1.6; background: hsl(217, 33%, 17%); padding: 1rem; border-radius: 0.5rem; border-left: 4px solid hsl(217, 91%, 60%);">
              Always use error handling nodes in your n8n workflows to prevent silent failures. 
              Set up notifications to stay informed when something goes wrong.
            </p>
            
            <h2 style="color: hsl(217, 91%, 60%); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.5rem;">
              📚 Latest Resources
            </h2>
            
            <p style="margin-bottom: 1rem; line-height: 1.6;">
              Check out our new guides:
            </p>
            
            <ul style="margin-bottom: 1rem; line-height: 1.8; padding-left: 1.5rem;">
              <li><a href="#" style="color: hsl(217, 91%, 60%); text-decoration: underline;">HubSpot Custom Code Examples</a></li>
              <li><a href="#" style="color: hsl(217, 91%, 60%); text-decoration: underline;">API Integration Best Practices</a></li>
              <li><a href="#" style="color: hsl(217, 91%, 60%); text-decoration: underline;">Airtable Automation Templates</a></li>
            </ul>
            
            <hr style="margin: 2rem 0; border: none; border-top: 1px solid hsl(217, 33%, 25%);" />
            
            <p style="margin-bottom: 0.5rem; line-height: 1.6;">
              Have questions? Hit reply to this email, and I'll get back to you within 24 hours.
            </p>
            
            <p style="margin-bottom: 1rem; line-height: 1.6;">
              Best regards,<br />
              <strong>Robin Rajan</strong><br />
              <span style="color: hsl(215, 20%, 65%);">Tech-Savvy Virtual Assistant</span>
            </p>
          </div>
        `,
      };

      setEmailContent(content);
    } catch (error) {
      console.error("Failed to load email content:", error);
      setEmailContent({
        id: contentId,
        subject: "Error Loading Content",
        content: "<p>Failed to load email content. Please try again later.</p>",
      });
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // Remove query parameters from URL without page reload
      const url = new URL(window.location.href);
      url.searchParams.delete("email");
      url.searchParams.delete("contentId");
      window.history.replaceState({}, "", url.toString());
    }
    setIsOpen(open);
  };

  if (!emailContent) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[85vh] bg-card border-border">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-bold">
              {emailContent.subject}
            </DialogTitle>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: emailContent.content }}
            style={{
              color: "hsl(210, 40%, 98%)",
            }}
          />
        </ScrollArea>

        <div className="pt-4 border-t border-border text-center text-sm text-muted-foreground">
          Email ID: {emailContent.id}
        </div>
      </DialogContent>
    </Dialog>
  );
};
