import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Zap, 
  Database, 
  Brain, 
  Plane, 
  Workflow, 
  Users, 
  Sparkles,
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  UserX
} from "lucide-react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import alexHeadshot from "@/assets/robin_profile_pic.png";
import { toast } from "sonner";
import {
  UnsubscribeModal,
  ExitIntentNewsletter,
  CookieConsent,
  EmailContentViewer,
  PrivacyPolicyModal,
  TermsOfServiceModal,
} from "@/components/modals";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Modal states
  const [isUnsubscribeOpen, setIsUnsubscribeOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  
  // Get your free access key from https://web3forms.com
  const WEB3FORMS_ACCESS_KEY = "b76b18e4-2196-4645-92d6-968ded1caaaf";

  // Check for unsubscribe URL parameter and auto-open modal
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isUnsubscribeIntent = params.get("unsubscribe") === "true" || params.get("action") === "unsubscribe";
    
    if (isUnsubscribeIntent) {
      setIsUnsubscribeOpen(true);
      // Clean URL without reload
      const url = new URL(window.location.href);
      url.searchParams.delete("unsubscribe");
      url.searchParams.delete("action");
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  const testimonials = [
    {
      quote: "Robin saved our team 18 hours per week by building a seamless n8n + Pipedrive sync. Game changer for our travel booking operations.",
      name: "Sarah Mitchell",
      role: "Operations Director",
      company: "Global Travel Co",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      quote: "The AI-powered lead scoring system Robin built in HubSpot doubled our conversion rate. Technical excellence meets business impact.",
      name: "Michael Chen",
      role: "Head of Sales",
      company: "TechFlow Agency",
      avatar: "https://i.pravatar.cc/150?img=33"
    },
    {
      quote: "200+ monthly bookings automated with <0.5% error rate. Robin understands both technology and business operations perfectly.",
      name: "Emma Rodriguez",
      role: "CEO",
      company: "Wanderlust Ventures",
      avatar: "https://i.pravatar.cc/150?img=5"
    }
  ];

  const techStack = [
    "n8n", "HubSpot", "Attio", "Pipedrive", "Make", "Zapier", "G-Suite", 
    "Notion", "Google Workspace", "GitHub", "VS Code", "Postman", "Airtable"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "New Contact Form Submission from Website",
        from_name: "Robin Rajan Landing Page",
        email: email,
        message: message,
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
        toast.success("Message sent successfully! I'll get back to you within 24 hours.");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send message. Please try again or email me directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative gradient-hero min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
        {/* Floating tech icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] text-primary/20 float">
            <Zap size={48} />
          </div>
          <div className="absolute top-40 right-[15%] text-accent/20 float-delay">
            <Database size={40} />
          </div>
          <div className="absolute bottom-32 left-[20%] text-highlight/20 float">
            <Brain size={44} />
          </div>
          <div className="absolute top-1/2 right-[10%] text-primary/20 float-delay">
            <Workflow size={52} />
          </div>
        </div>

        <div className="container max-w-5xl mx-auto text-center relative z-10">
          <Badge className="mb-6 px-4 py-2 text-sm bg-primary/10 border-primary/30 hover:bg-primary/20">
            <span className="gradient-text font-semibold">
              Fluent in English • 5+ Years Async Agency Experience
            </span>
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Your <span className="gradient-text">Tech-Powered</span> Virtual Assistant
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-fade-in-up">
            Automate, Book, Scale.
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up">
            Travel Booking ops, CRM syncs, AI workflows, no-code automations — I bridge technology and your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button 
              size="lg" 
              className="gradient-cta text-lg px-8 py-6 glow-hover font-semibold"
              onClick={() => window.open('https://calendar.app.google/ve3mxQs5yDsxen8a8', '_blank')}
            >
              <Calendar className="mr-2" />
              Book a Free 15-Min Discovery Call
            </Button>
            
            <div className="flex gap-4 items-center">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
                <ArrowRight className="ml-2" />
              </Button>
              
              <a
                href="https://t.me/rrajanuk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-[56px] w-[56px] cursor-pointer hover:scale-110 transition-transform"
                aria-label="Contact via Telegram"
              >
                <FaTelegram className="w-12 h-12 text-white hover:text-white/90" />
              </a>
              
              <a
                href="https://wa.me/917999838411"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-[56px] w-[56px] cursor-pointer hover:scale-110 transition-transform"
                aria-label="Contact via WhatsApp"
              >
                <FaWhatsapp className="w-12 h-12 text-white hover:text-white/90" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            How I <span className="gradient-text">Supercharge</span> Your Operations
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg max-w-2xl mx-auto">
            From Travel logistics to AI workflows, I turn manual processes into automated systems.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-tech glow-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Plane className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Travel Booking & Ops</h3>
                  <p className="text-muted-foreground">
                    End-to-end flight, hotel, itinerary mastery. Flawless bookings, zero manual errors, hours reclaimed daily – all seamless behind the scenes.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-tech glow-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Workflow className="text-accent" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Automation Workflows</h3>
                  <p className="text-muted-foreground">
                    n8n, Make, Zapier – trigger-based ops, data sync, reporting. Build once, run forever with 99.9% reliability.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-tech glow-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-highlight/10 rounded-lg">
                  <Database className="text-highlight" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">CRM Mastery</h3>
                  <p className="text-muted-foreground">
                    HubSpot, Attio, Pipedrive – pipelines, automations, custom fields, API syncs. Your CRM, supercharged.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-tech glow-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Brain className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI & Tech Advisory</h3>
                  <p className="text-muted-foreground">
                    Leverage Claude, GPT, trend reports, tool recommendations. Stay ahead with strategic AI implementation.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-16 bg-secondary/30 overflow-hidden">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center text-muted-foreground">
            Technologies I Work With Daily
          </h3>
        </div>
        <div className="relative">
          <div className="flex gap-8 marquee">
            {[...techStack, ...techStack].map((tech, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-6 py-3 bg-card border border-border rounded-lg font-semibold text-lg"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Real <span className="gradient-text">Results</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Proven impact across travel, sales, and operations.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-tech glow-hover text-center">
              <div className="space-y-4">
                <div className="text-5xl font-bold gradient-text">18hrs</div>
                <h3 className="text-xl font-semibold">Saved Per Week</h3>
                <p className="text-muted-foreground">
                  Travel agency workflow automation using n8n + Pipedrive sync eliminated manual data entry.
                </p>
              </div>
            </Card>

            <Card className="card-tech glow-hover text-center">
              <div className="space-y-4">
                <div className="text-5xl font-bold gradient-text">2x</div>
                <h3 className="text-xl font-semibold">Conversion Rate</h3>
                <p className="text-muted-foreground">
                  AI-powered lead scoring in HubSpot via custom code + n8n doubled qualified opportunities.
                </p>
              </div>
            </Card>

            <Card className="card-tech glow-hover text-center">
              <div className="space-y-4">
                <div className="text-5xl font-bold gradient-text">&lt;0.5%</div>
                <h3 className="text-xl font-semibold">Error Rate</h3>
                <p className="text-muted-foreground">
                  Automated 200+ monthly bookings with bulletproof validation and error handling.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            What <span className="gradient-text">Clients Say</span>
          </h2>

          <div className="relative">
            <Card className="card-tech p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full border-2 border-primary"
                />
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg md:text-xl mb-4 italic">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div>
                    <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                    <p className="text-muted-foreground">
                      {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentTestimonial 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 px-4 bg-background">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Hi, I'm <span className="gradient-text">Robin Rajan</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Ex-agency ops lead turned automation nerd. I speak fluent English, code, and API. 
                Worked async with 20+ teams across US, EU, and AU.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I don't just execute tasks—I architect systems that scale your business while you sleep. 
                Whether it's connecting APIs, building workflows, or implementing AI, I make technology work for you.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">n8n Expert</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">REST APIs</Badge>
                <Badge variant="secondary">CRM Admin</Badge>
                <Badge variant="secondary">AI Prompt Engineering</Badge>
                <Badge variant="secondary">No-Code</Badge>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={alexHeadshot} 
                alt="Robin Rajan" 
                className="rounded-2xl shadow-2xl glow-blue w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-highlight/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Automate</span> Your Growth
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to save time, reduce errors, and scale your operations? Drop me a message.
          </p>

          <Card className="card-tech p-8 md:p-12 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field for spam protection - hidden from users */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
              />

              <div className="text-left">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@company.com"
                  className="bg-background border-border"
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className="text-left">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell me about your project
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What workflows need automation? Which tools are you using?"
                  className="bg-background border-border min-h-[120px]"
                  disabled={isSubmitting}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto gradient-cta text-lg px-12 py-6 glow-hover font-semibold"
                disabled={isSubmitting}
              >
                <Mail className="mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => window.open('https://docs.google.com/document/d/1uNy84ywIpzWqvX0dy0UVuQ3E8nBCAts2WLYZ9Lq3iyg/edit?usp=sharing', '_blank')}
            >
              <ExternalLink className="mr-2" />
              Open Finance Workflow Automation Playbook
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-secondary/30 border-t border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold gradient-text mb-2">Robin Rajan</h3>
              <p className="text-muted-foreground">Tech-Savvy Virtual Assistant</p>
            </div>

            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary/10 hover:text-primary"
                onClick={() => window.open('https://linkedin.com/in/robinkrajan', '_blank')}
              >
                <Linkedin size={24} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary/10 hover:text-primary"
                onClick={() => window.open('https://github.com/rrajanuk', '_blank')}
              >
                <Github size={24} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary/10 hover:text-primary"
                onClick={() => window.open('mailto:connect@robinrajan.me')}
              >
                <Mail size={24} />
              </Button>
            </div>

            <div className="flex gap-6 text-sm text-muted-foreground items-center">
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="hover:text-primary transition-colors hover:underline"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setIsTermsOpen(true)}
                className="hover:text-primary transition-colors hover:underline"
              >
                Terms of Service
              </button>
              <button
                onClick={() => setIsUnsubscribeOpen(true)}
                className="hover:text-primary transition-colors hover:underline flex items-center gap-1"
              >
                <UserX size={16} />
                Unsubscribe
              </button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>© 2025 Robin Rajan. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <UnsubscribeModal
        isOpen={isUnsubscribeOpen}
        onClose={() => setIsUnsubscribeOpen(false)}
      />
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
      <TermsOfServiceModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
      <ExitIntentNewsletter />
      <EmailContentViewer />
      <CookieConsent
        onPrivacyClick={() => setIsPrivacyOpen(true)}
        onTermsClick={() => setIsTermsOpen(true)}
      />
    </div>
  );
};

export default Index;
