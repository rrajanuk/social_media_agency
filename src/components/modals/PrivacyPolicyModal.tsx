import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield } from "lucide-react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[85vh] bg-card border-border">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <DialogTitle className="text-3xl font-bold">Privacy Policy</DialogTitle>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6 text-foreground">
            <div>
              <p className="text-muted-foreground mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="leading-relaxed mb-4">
                At Robin Rajan Virtual Assistant Services, we take your privacy seriously. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">Information We Collect</h2>
              <p className="leading-relaxed mb-3">
                We collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Fill out contact forms on our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Communicate with us via email or other channels</li>
                <li>Schedule discovery calls through our booking system</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <p className="leading-relaxed text-muted-foreground mb-3">
                The types of personal information we may collect include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Name and email address</li>
                <li>Company name and job title</li>
                <li>Phone number (if provided)</li>
                <li>Project details and requirements</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">How We Use Your Information</h2>
              <p className="leading-relaxed text-muted-foreground mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates about our services and industry insights</li>
                <li>Improve our website and service offerings</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed text-muted-foreground mb-3">
                We use cookies and similar tracking technologies to track activity on our website 
                and hold certain information. Cookies are files with a small amount of data which 
                may include an anonymous unique identifier.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                You can instruct your browser to refuse all cookies or to indicate when a cookie 
                is being sent. However, if you do not accept cookies, you may not be able to use 
                some portions of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">Data Security</h2>
              <p className="leading-relaxed text-muted-foreground mb-3">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized or unlawful processing, accidental loss, 
                destruction, or damage.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                However, please note that no method of transmission over the Internet or method of 
                electronic storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">Third-Party Services</h2>
              <p className="leading-relaxed text-muted-foreground mb-3">
                We may employ third-party companies and individuals to facilitate our services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Web3Forms for contact form submissions</li>
                <li>Google Calendar for appointment scheduling</li>
                <li>Analytics services to understand website usage</li>
              </ul>
              <p className="leading-relaxed text-muted-foreground mt-3">
                These third parties have access to your personal information only to perform specific 
                tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">Your Data Rights</h2>
              <p className="leading-relaxed text-muted-foreground mb-3">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications at any time</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">Children's Privacy</h2>
              <p className="leading-relaxed text-muted-foreground">
                Our services are not directed to individuals under the age of 18. We do not knowingly 
                collect personal information from children. If you become aware that a child has provided 
                us with personal information, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">Changes to This Privacy Policy</h2>
              <p className="leading-relaxed text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">Contact Us</h2>
              <p className="leading-relaxed text-muted-foreground mb-3">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>Email: <a href="mailto:connect@robinrajan.me" className="text-primary hover:underline">connect@robinrajan.me</a></li>
                <li>Website: <a href="https://robinrajan.me" className="text-primary hover:underline">robinrajan.me</a></li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
