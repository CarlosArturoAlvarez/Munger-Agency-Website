import { useState } from "react";
import { Lock, CheckCircle, BookOpen, FileText, Phone, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";

const ACCESS_CODE = "MungerAgent$$";

const steps = [
  {
    step: "01",
    title: "Get Your Insurance License",
    desc: "If you need to get Licensed please follow the Pre-License steps below — here is your path to get Licensed:",
    bullets: [
      { text: "Purchase your discounted Pre-Licensing Life and Health Insurance Course", href: "https://getyourinsurancelicense.com/munger-agency?am_id=munger8228" },
      { text: "Schedule your Licensing Exam", href: null },
      { text: "Take your Exam (it's like taking the ACT in high school — 1 question, 4 possible answers. 70 or above is passing)", href: null },
      { text: "Most states require you to get your fingerprints — get that completed", href: null },
      { text: "Go to NIPR and pay for your state license", href: null },
      { text: "You will need to do a Federal Required Anti-Money Laundering course", href: null },
      { text: "Purchase your E&O Insurance from Napa-Benefits", href: "https://www.napa-benefits.org/insurance/errors-and-omissions-eando-insurance" },
    ],
    note: "CONGRATULATIONS on obtaining your License — now you are ready to get going on our training!!",
    link: null,
  },
  {
    step: "02",
    title: "Connect With Kathleen",
    desc: "Once you have your license, schedule your onboarding call with Kathleen. She'll walk you through carrier appointments, contracting, and your first steps in the field.",
    bullets: [
      { text: "Review your product focus and target market", href: null },
      { text: "Get contracted with your first carriers", href: null },
      { text: "Set up your CRM and quoting tools", href: null },
      { text: "Shadow your first client meeting", href: null },
    ],
    note: null,
    link: { label: "Schedule Onboarding Call", href: "https://calendly.com/mungeragency/interviewcall" },
  },
  {
    step: "03",
    title: "Carrier Appointments",
    desc: "Munger Agency works with 30+ A-rated carriers via Symmetry Financial. You'll be appointed with the carriers that match your product focus.",
    bullets: [
      { text: "Foresters, SBLI, Transamerica, Mutual of Omaha, AIG, and more", href: null },
      { text: "Contracting paperwork submitted through our Contracting platform SureLC", href: null },
      { text: "E&O insurance required before appointments", href: null },
    ],
    note: null,
    link: null,
  },
];

const resources = [
  { icon: BookOpen, title: "Pre-Licensing & Study", desc: "Recommended pre-licensing course to get your insurance license", href: "https://getyourinsurancelicense.com/munger-agency?am_id=munger8228" },
  { icon: FileText, title: "State Exam Info", desc: "Find exam dates, locations, and requirements for your state", href: "https://www.pearsonvue.com/" },
  { icon: Phone, title: "Talk to Kathleen", desc: "Have questions? Book a quick call before you even get started", href: "https://calendly.com/mungeragency/interviewcall" },
  { icon: Star, title: "E&O Insurance", desc: "Required before carrier appointments — get covered quickly", href: "https://www.napa-benefits.org/insurance/errors-and-omissions-eando-insurance" },
];

// ─── Password Gate ────────────────────────────────────────────────────────────
const PasswordGate = ({ onUnlock }: { onUnlock: () => void }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === ACCESS_CODE) {
      sessionStorage.setItem("agent_portal_access", "true");
      onUnlock();
    } else {
      setError(true);
      setCode("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-gradient px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Lock size={28} className="text-primary" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-foreground mb-2">Agent Portal</h1>
          <p className="text-sm text-muted-foreground">Enter your access code to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-xs font-sans font-semibold text-foreground/80 mb-1.5">Access Code</label>
            <input
              type="password"
              value={code}
              onChange={(e) => { setCode(e.target.value); setError(false); }}
              className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Enter your code"
              autoFocus
            />
            {error && <p className="mt-1.5 text-xs text-red-400">Incorrect code. Please try again.</p>}
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full">
            Enter Portal
          </Button>
        </form>
        <p className="text-center text-xs text-muted-foreground mt-4">
          Don't have a code? <a href="/contact" className="text-primary hover:underline">Contact us</a>
        </p>
      </div>
    </div>
  );
};

// ─── Portal Content ───────────────────────────────────────────────────────────
const PortalContent = () => (
  <PageLayout>
    <section className="lion-watermark py-16 sm:py-20 text-center">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
          <Lock size={12} /> Agent Portal — Private
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Welcome to the{" "}
          <span className="text-foreground">Munger Agency Team</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Everything you need to get licensed, contracted, and writing business.
          Follow these steps and reach out to Kathleen at any point along the way.
        </p>
      </div>
    </section>

    {/* Steps */}
    <Section>
      <h2 className="font-serif text-3xl font-bold text-center mb-4">Your Path to Getting Started</h2>
      <p className="text-center text-muted-foreground mb-8">
        If you are already Licensed please skip to <span className="text-primary font-semibold">Connect with Kathleen.</span>
      </p>
      <div className="max-w-3xl mx-auto mb-10">
        <img src="/timeline.png" alt="Agent onboarding timeline" className="w-full rounded-xl shadow-lg" />
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        {steps.map((s) => (
          <GlassCard key={s.step} className="flex gap-6 items-start">
            <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-serif font-bold text-primary text-sm">{s.step}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
              <ul className="space-y-1.5 mb-4">
                {s.bullets.map((b) => (
                  <li key={b.text} className="flex items-start gap-2 text-sm text-foreground/80">
                    <ChevronRight size={14} className="text-primary shrink-0 mt-0.5" />
                    {b.href
                      ? <a href={b.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{b.text}</a>
                      : b.text}
                  </li>
                ))}
              </ul>
              {s.note && (
                <p className="text-sm font-semibold text-primary mb-4">{s.note}</p>
              )}
              {s.link && (
                <a href={s.link.href} target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="sm">{s.link.label}</Button>
                </a>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>

    {/* Resources */}
    <Section className="bg-navy-deep/30">
      <h2 className="font-serif text-3xl font-bold text-center mb-12">Helpful Resources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {resources.map((r) => (
          <a key={r.title} href={r.href} target="_blank" rel="noopener noreferrer" className="block">
            <GlassCard className="h-full hover:border-primary/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <r.icon size={18} className="text-primary" />
              </div>
              <h3 className="font-sans font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
            </GlassCard>
          </a>
        ))}
      </div>
    </Section>

    {/* Welcome message */}
    <Section>
      <GlassCard className="max-w-2xl mx-auto text-center">
        <CheckCircle size={32} className="text-primary mx-auto mb-4" />
        <h2 className="font-serif text-2xl font-bold mb-3">You're in the right place.</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          This portal will grow as you do. More training materials, carrier resources, and tools
          will be added here over time. When in doubt — call Kathleen.
        </p>
        <a href="https://calendly.com/mungeragency/interviewcall" target="_blank" rel="noopener noreferrer">
          <Button variant="hero" size="lg">Schedule a Call with Kathleen</Button>
        </a>
      </GlassCard>
    </Section>
  </PageLayout>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
const AgentPortal = () => {
  const [unlocked, setUnlocked] = useState(
    sessionStorage.getItem("agent_portal_access") === "true"
  );

  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  return <PortalContent />;
};

export default AgentPortal;
