import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import {
  Shield, Globe, MapPin, Award, Users, User, Briefcase,
  Heart, Home, Umbrella, GraduationCap, DollarSign,
  Landmark, PiggyBank, FileText, Building, Car,
  Calendar, ClipboardList, Video, ArrowRight, Quote
} from "lucide-react";

const trustItems = [
  { icon: Shield, label: "30+ A-Rated Carriers" },
  { icon: Globe, label: "Nationwide Coverage" },
  { icon: MapPin, label: "HQ: Dallas, TX" },
  { icon: Award, label: "20+ Years Experience" },
];

const helpCards = [
  {
    icon: Users,
    title: "Families",
    desc: "Life insurance, mortgage protection, and legacy planning to safeguard the people who matter most.",
  },
  {
    icon: User,
    title: "Individuals",
    desc: "Term, whole, universal life, and critical illness coverage tailored to your stage of life.",
  },
  {
    icon: Briefcase,
    title: "Businesses & Retirees",
    desc: "Annuities, IULs, and retirement gap reviews to secure your financial future.",
  },
];

const products = [
  { icon: Heart, name: "Whole Life", desc: "Lifelong coverage with guaranteed cash value growth" },
  { icon: Umbrella, name: "Universal Life", desc: "Flexible premiums and adjustable death benefits" },
  { icon: Shield, name: "Term Insurance", desc: "Affordable protection for a set period" },
  { icon: GraduationCap, name: "Education Insurance", desc: "Fund your children's future education" },
  { icon: Home, name: "Mortgage Protection", desc: "Keep your family in their home" },
  { icon: DollarSign, name: "Disability & Critical Illness", desc: "Income protection when you need it most" },
  { icon: PiggyBank, name: "Retirement & Annuities", desc: "Guaranteed income streams for retirement" },
  { icon: Landmark, name: "Debt Free Life / Infinite Banking", desc: "Build wealth while staying protected" },
  { icon: FileText, name: "Trust & Will Services", desc: "Protect your estate and your wishes" },
  { icon: Users, name: "Final Expenses", desc: "Dignity and peace of mind for loved ones" },
  { icon: Building, name: "Property & Casualty", desc: "Home, auto, and business coverage" },
];

const steps = [
  {
    icon: Calendar,
    title: "Schedule a Call",
    desc: "Book a free 15-minute introductory call at your convenience.",
    link: "https://calendly.com/mungeragency/call",
  },
  {
    icon: ClipboardList,
    title: "Complete Your Questionnaire",
    desc: "Help us understand your unique needs and goals.",
    link: "https://form.jotform.com/mungeragency/client-questionnaire",
  },
  {
    icon: Video,
    title: "Schedule a Zoom Meeting",
    desc: "Meet face-to-face for a personalized coverage review.",
    link: "https://calendly.com/mungeragency/60min",
  },
];

const HomePage = () => (
  <PageLayout>
    {/* Hero */}
    <section className="relative lion-watermark min-h-[80vh] flex items-center">
      <div className="container-narrow px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
          Protecting Your Life{" "}
          <span className="text-gradient-green">and Legacy</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10">
          Your trusted independent insurance &amp; retirement specialist — working with 30+ A-rated carriers
          to find personalized coverage that fits your life and your budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://calendly.com/mungeragency" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">Schedule a Free Call</Button>
          </a>
          <a href="https://form.jotform.com/mungeragency/client-questionnaire" target="_blank" rel="noopener noreferrer">
            <Button variant="hero-ghost" size="xl">Get a Quote</Button>
          </a>
        </div>
      </div>
    </section>

    {/* Trust Bar */}
    <div className="border-y border-foreground/10 bg-navy-deep/50">
      <div className="container-narrow px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-3 text-foreground/80">
              <item.icon size={20} className="text-primary shrink-0" />
              <span className="text-sm font-sans font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Who We Help */}
    <Section>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-4">Who We Help</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Whether you're building a family, planning retirement, or running a business — we've got you covered.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {helpCards.map((card) => (
          <GlassCard key={card.title}>
            <card.icon size={28} className="text-foreground mb-4" />
            <h3 className="font-serif text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
          </GlassCard>
        ))}
      </div>
    </Section>

    {/* Products */}
    <Section className="bg-navy-deep/30">
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-4">Our Products</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Comprehensive coverage options from 30+ top-rated insurance carriers.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((p) => (
          <GlassCard key={p.name} className="flex items-start gap-4 p-5">
            <p.icon size={22} className="text-foreground shrink-0 mt-0.5" />
            <div>
              <h3 className="font-sans font-semibold text-foreground mb-1">{p.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              <a
                href="https://calendly.com/mungeragency"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary mt-2 hover:underline"
              >
                Learn More <ArrowRight size={12} />
              </a>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>

    {/* Testimonials */}
    <Section>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="flex items-center justify-center aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Kovacic Family Testimonial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </GlassCard>
        <div className="space-y-6">
          {[
            {
              quote: "Kathleen made the entire process so easy. She genuinely cares about our family's well-being and found us the perfect coverage.",
              author: "The Kovacic Family",
            },
            {
              quote: "Working with Munger Agency felt like talking to a trusted friend. Professional, knowledgeable, and always available.",
              author: "Michael T., Dallas",
            },
          ].map((t) => (
            <GlassCard key={t.author}>
              <Quote size={20} className="text-primary mb-3" />
              <p className="text-sm text-foreground/90 leading-relaxed italic mb-4">"{t.quote}"</p>
              <span className="text-xs font-sans font-semibold text-muted-foreground">— {t.author}</span>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>

    {/* Kathleen Teaser */}
    <Section className="bg-navy-deep/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <GlassCard className="aspect-[4/5] flex items-center justify-center text-muted-foreground">
          <User size={64} className="opacity-30" />
        </GlassCard>
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Meet Kathleen</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When Kathleen's boys' dad passed away, she told them he left them Life Insurance —
            but really, it was Love Insurance. That moment changed everything and became
            the driving force behind Munger Agency.
          </p>
          <a href="/our-why">
            <Button variant="hero-ghost" size="lg">Read Our Story <ArrowRight size={16} /></Button>
          </a>
        </div>
      </div>
    </Section>

    {/* How It Works */}
    <Section>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-4">How It Works</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
        Getting protected is simple — just three easy steps.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <a key={step.title} href={step.link} target="_blank" rel="noopener noreferrer" className="block">
            <GlassCard className="text-center h-full">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon size={22} className="text-primary" />
              </div>
              <span className="text-xs font-sans font-semibold text-primary mb-2 block">Step {i + 1}</span>
              <h3 className="font-serif text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </GlassCard>
          </a>
        ))}
      </div>
    </Section>
  </PageLayout>
);

export default HomePage;
