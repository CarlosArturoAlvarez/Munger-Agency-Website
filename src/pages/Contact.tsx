import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Calendar, ClipboardList, Video, Mail, Phone, MapPin, Send } from "lucide-react";

const contactCards = [
  {
    icon: Calendar,
    title: "Schedule a Call",
    desc: "Book a free 15-minute introductory call.",
    link: "https://calendly.com/mungeragency/call",
  },
  {
    icon: ClipboardList,
    title: "Complete a Questionnaire",
    desc: "Help us understand your needs before we meet.",
    link: "https://form.jotform.com/mungeragency/client-questionnaire",
  },
  {
    icon: Video,
    title: "Schedule a Zoom",
    desc: "Meet face-to-face for a personalized review.",
    link: "https://calendly.com/mungeragency/60min",
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Missing Fields", description: "Please fill in all fields.", variant: "destructive" });
      return;
    }
    setLoading(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: "Message Sent", description: "Thank you! We'll get back to you shortly." });
    setForm({ name: "", email: "", message: "" });
    setLoading(false);
  };

  return (
    <PageLayout>
      <section className="lion-watermark py-16 sm:py-20 text-center">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let's Talk —{" "}
            <span className="text-foreground">We're Here For You</span>
          </h1>
        </div>
      </section>

      {/* Contact Cards */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card) => (
            <a key={card.title} href={card.link} target="_blank" rel="noopener noreferrer" className="block">
              <GlassCard className="text-center h-full">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <card.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </GlassCard>
            </a>
          ))}
        </div>
      </Section>

      {/* Contact Info + Form */}
      <Section className="bg-navy-deep/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-8">Get in Touch</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-sans font-semibold text-foreground/60 mb-0.5">Email</p>
                  <a href="mailto:Kmunger@mungeragency.com" className="text-sm text-foreground hover:text-primary transition-colors">
                    Kmunger@mungeragency.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-sans font-semibold text-foreground/60 mb-0.5">Phone</p>
                  <a href="tel:2147992052" className="text-sm text-foreground hover:text-primary transition-colors">
                    214.799.2052
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-sans font-semibold text-foreground/60 mb-0.5">Address</p>
                  <p className="text-sm text-foreground">5600 W Lovers Lane, 116-505, Dallas, TX 75209</p>
                </div>
              </li>
            </ul>
          </div>

          <GlassCard>
            <h3 className="font-serif text-xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-sans font-semibold text-foreground/80 mb-1.5">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-sans font-semibold text-foreground/80 mb-1.5">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-sans font-semibold text-foreground/80 mb-1.5">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                <Send size={16} /> {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </GlassCard>
        </div>
      </Section>

      {/* Closing Banner */}
      <Section>
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden glass-card !p-0">
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="md:w-80 shrink-0">
              <img
                src="/kat-and-her-sons.avif"
                alt="Kathleen Munger Fisk with her sons"
                className="w-full h-full object-cover object-center"
                style={{ minHeight: "280px" }}
              />
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 py-10">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-snug mb-4">
                CONTACT Munger Agency and let us take the burden of worry off your shoulders in protecting your life and legacy <span className="text-primary">TODAY!</span>
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                We look forward to talking soon and hope you and your family have a wonderful day!
              </p>
              <div>
                <a href="https://calendly.com/mungeragency/call" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg">Schedule a Call</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default ContactPage;
