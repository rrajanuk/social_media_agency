import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText } from "lucide-react";

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsOfServiceModal = ({ isOpen, onClose }: TermsOfServiceModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[85vh] bg-card border-border">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/10 rounded-lg">
              <FileText className="h-6 w-6 text-accent" />
            </div>
            <DialogTitle className="text-3xl font-bold">Terms of Service</DialogTitle>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6 text-foreground">
            <div>
              <p className="text-muted-foreground mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="leading-relaxed mb-4">
                Welcome to Robin Rajan Virtual Assistant Services. By accessing or using our website 
                and services, you agree to be bound by these Terms of Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">1. Acceptance of Terms</h2>
              <p className="leading-relaxed text-muted-foreground mb-3">
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">2. Services Description</h2>
              <p className="leading-relaxed text-muted-foreground mb-3">
                Robin Rajan provides virtual assistant services specializing in:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Travel booking and operations management</li>
                <li>CRM administration and automation (HubSpot, Pipedrive, Attio)</li>
                <li>Workflow automation using no-code tools (n8n, Make, Zapier)</li>
                <li>AI integration and advisory services</li>
                <li>API integrations and custom development</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">3. Use License</h2>
              <p className="leading-relaxed text-muted-foreground mb-3">
                Permission is granted to temporarily access the materials on this website for 
                personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or public display</li>
                <li>Attempt to decompile or reverse engineer any software on the website</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">4. Service Engagement</h2>
              <h3 className="text-xl font-semibold mb-3">Discovery Calls</h3>
              <p className="leading-relaxed text-muted-foreground mb-3">
                Free 15-minute discovery calls are provided to discuss your project requirements. 
                These calls are informational and do not constitute a commitment to provide services.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-4">Service Agreements</h3>
              <p className="leading-relaxed text-muted-foreground mb-3">
                Formal service engagements require a separate written agreement outlining:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Scope of work and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Payment terms and fees</li>
                <li>Confidentiality provisions</li>
                <li>Intellectual property rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">5. Payment Terms</h2>
              <p className="leading-relaxed text-muted-foreground mb-3">
                Payment terms will be specified in individual service agreements. General terms include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Invoices are payable within 14 days unless otherwise specified</li>
                <li>Late payments may incur additional fees</li>
                <li>Services may be suspended for non-payment</li>
                <li>All fees are exclusive of applicable taxes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">6. Confidentiality</h2>
              <p className="leading-relaxed text-muted-foreground mb-3">
                We treat all client information with strict confidentiality. We will not disclose 
                any proprietary or confidential information shared during service delivery without 
                explicit written permission, except as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">7. Intellectual Property</h2>
              <p className="leading-relaxed text-muted-foreground mb-3">
                Unless otherwise specified in writing:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You retain ownership of all materials provided to us</li>
                <li>We retain ownership of our methodologies, templates, and tools</li>
                <li>Deliverables created specifically for you become your property upon full payment</li>
                <li>We may showcase work in our portfolio with your permission</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">8. Limitation of Liability</h2>
              <p className="leading-relaxed text-muted-foreground mb-3">
                Robin Rajan Virtual Assistant Services shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Any indirect, incidental, or consequential damages</li>
                <li>Loss of profits, revenue, or data</li>
                <li>Service interruptions beyond our control</li>
                <li>Third-party service failures or errors</li>
              </ul>
              <p className="leading-relaxed text-muted-foreground mt-3">
                Our total liability shall not exceed the fees paid for the specific service in question.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">9. Third-Party Tools and Services</h2>
              <p className="leading-relaxed text-muted-foreground mb-3">
                Our services may involve the use of third-party tools and platforms. You acknowledge that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You are responsible for maintaining active subscriptions to required tools</li>
                <li>Third-party terms of service apply to their respective platforms</li>
                <li>We are not liable for third-party service failures or changes</li>
                <li>Tool recommendations are made in good faith but not guaranteed</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">10. Warranties and Guarantees</h2>
              <p className="leading-relaxed text-muted-foreground mb-3">
                We strive to provide high-quality services but make no warranties regarding:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Specific business results or ROI</li>
                <li>Compatibility with all systems and platforms</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
              <p className="leading-relaxed text-muted-foreground mt-3">
                We will make reasonable efforts to correct any errors in our work at no additional charge.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">11. Termination</h2>
              <p className="leading-relaxed text-muted-foreground mb-3">
                Either party may terminate service agreements with written notice as specified in 
                the individual agreement. Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>All outstanding fees become immediately due</li>
                <li>Work completed to date will be delivered</li>
                <li>Confidentiality obligations continue indefinitely</li>
                <li>Each party will return or destroy confidential materials</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">12. Modifications to Terms</h2>
              <p className="leading-relaxed text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting to the website. Continued use of our services after changes 
                constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">13. Governing Law</h2>
              <p className="leading-relaxed text-muted-foreground">
                These Terms shall be governed by and construed in accordance with applicable laws, 
                without regard to conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">14. Contact Information</h2>
              <p className="leading-relaxed text-muted-foreground mb-3">
                For questions about these Terms of Service, please contact:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>Email: <a href="mailto:connect@robinrajan.me" className="text-primary hover:underline">connect@robinrajan.me</a></li>
                <li>Website: <a href="https://robinrajan.me" className="text-primary hover:underline">robinrajan.me</a></li>
              </ul>
            </div>

            <div className="p-4 bg-primary/10 border-l-4 border-primary rounded-lg">
              <p className="text-sm leading-relaxed">
                <strong>Effective Date:</strong> These Terms of Service are effective as of the date 
                you first access this website or use our services, whichever is earlier.
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
