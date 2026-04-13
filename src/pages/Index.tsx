import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import {
  Shield, Globe, MapPin, Award, Users, User, Briefcase,
  Heart, Home, Umbrella, GraduationCap, DollarSign,
  Landmark, PiggyBank, FileText, Building, Car,
  Calendar, ClipboardList, Video, ArrowRight, Quote, Play
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
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
  {
    icon: User,
    title: "Individuals",
    desc: "Term, whole, universal life, and critical illness coverage tailored to your stage of life.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    icon: Briefcase,
    title: "Businesses & Retirees",
    desc: "Annuities, IULs, and retirement gap reviews to secure your financial future.",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
  },
];

const products = [
  { icon: Heart, name: "Whole Life", desc: "Lifelong coverage with guaranteed cash value growth", img: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&q=80" },
  { icon: Umbrella, name: "Universal Life", desc: "Flexible premiums and adjustable death benefits", img: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=600&q=80" },
  { icon: Shield, name: "Term Insurance", desc: "Affordable protection for a set period", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80" },
  { icon: GraduationCap, name: "Education Insurance", desc: "Fund your children's future education", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80" },
  { icon: Home, name: "Mortgage Protection", desc: "Keep your family in their home", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80" },
  { icon: DollarSign, name: "Disability & Critical Illness", desc: "Income protection when you need it most", img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80" },
  { icon: PiggyBank, name: "Retirement & Annuities", desc: "Guaranteed income streams for retirement", img: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80" },
  { icon: Landmark, name: "Debt Free Life / Infinite Banking", desc: "Build wealth while staying protected", img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80" },
  { icon: FileText, name: "Trust & Will Services", desc: "Protect your estate and your wishes", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80" },
  { icon: Users, name: "Final Expenses", desc: "Dignity and peace of mind for loved ones", img: "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?w=600&q=80" },
  { icon: Building, name: "Property & Casualty", desc: "Home, auto, and business coverage", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80" },
];

const steps = [
  {
    icon: Calendar,
    title: "Schedule a Call",
    desc: "Book a free 15-minute introductory call at your convenience.",
    link: "https://calendly.com/mungeragency/call",
    img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
  },
  {
    icon: ClipboardList,
    title: "Complete Your Questionnaire",
    desc: "Help us understand your unique needs and goals.",
    link: "https://form.jotform.com/mungeragency/client-questionnaire",
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
  },
  {
    icon: Video,
    title: "Schedule a Zoom Meeting",
    desc: "Meet face-to-face for a personalized coverage review.",
    link: "https://calendly.com/mungeragency/60min",
    img: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80",
  },
];

const videos = [
  { id: "gqyRmmAWNgo", label: "Real Life Stories | Kovacic Family: Everything Will Be Okay" },
  { id: "pu53-UHUGoM", label: "Quility Life Lessons Scholarship 2022: Meet MaKayla" },
  { id: "TTIWbr0arPc", label: "The Importance of Investing in Life Insurance" },
  { id: "GUpErnN77Y0", label: "Why to Buy Life Insurance in Your 20's" },
];

const HomePage = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  return (
  <PageLayout>
    {/* Hero */}
    <section className="relative lion-watermark min-h-[80vh] flex items-center">
      <div className="container-narrow px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
          Protecting Your Life{" "}
          <span className="text-foreground">and Legacy</span>
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
      <div className="container-narrow px-4 sm:px-6 lg:px-8 py-4">
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
          <div key={card.title} className="relative overflow-hidden rounded-xl min-h-[280px] flex flex-col justify-end group">
            <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
            <div className="relative z-10 p-6">
              <card.icon size={28} className="text-white mb-3" />
              <h3 className="font-serif text-xl font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* How We Help */}
    <Section className="bg-navy-deep/30">
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-4">How We Help</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Munger Agency assists you in Protecting your Life and Legacy — so you and your family can relax and enjoy life.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: Shield,
            title: "We Work for You",
            desc: "We shop 30+ top-rated carriers on your behalf to find personalized coverage that fits your life and your budget — no pressure, just the right fit.",
            img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
          },
          {
            icon: Users,
            title: "A Team Around You",
            desc: "Through our network of vetted affiliate partners, we connect you with exceptional personal, professional, and retirement services — all under one roof.",
            img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
          },
          {
            icon: Heart,
            title: "Peace of Mind, Today & Tomorrow",
            desc: "We help you plan for your future and the business of death — so when the time comes, your loved ones are protected and free to grieve, not scramble.",
            img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="relative overflow-hidden rounded-xl min-h-[320px] flex flex-col justify-end group"
          >
            {/* Background image */}
            <img
              src={card.img}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
            {/* Content */}
            <div className="relative z-10 p-6">
              <card.icon size={28} className="text-white mb-3" />
              <h3 className="font-serif text-xl font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Products */}
    <Section>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-4">Our Products</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Comprehensive coverage options from 30+ top-rated insurance carriers.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((p) => (
          <div key={p.name} className="relative overflow-hidden rounded-xl min-h-[180px] flex flex-col justify-end group">
            <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/10" />
            <div className="relative z-10 p-5">
              <p.icon size={20} className="text-white mb-2" />
              <h3 className="font-sans font-semibold text-white mb-1">{p.name}</h3>
              <p className="text-xs text-white/75 leading-relaxed mb-2">{p.desc}</p>
              <a href="https://calendly.com/mungeragency" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                Learn More <ArrowRight size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Testimonials */}
    <Section>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
      <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
        Real stories from real families we've had the privilege of protecting.
      </p>

      {/* Featured video player */}
      <div className="aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden mb-6 shadow-2xl">
        <iframe
          key={activeVideo}
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videos[activeVideo].id}?autoplay=0&rel=0`}
          title={videos[activeVideo].label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Thumbnail selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {videos.map((v, i) => (
          <button
            key={v.id}
            onClick={() => setActiveVideo(i)}
            className={`relative rounded-lg overflow-hidden group focus:outline-none transition-all duration-200 ${
              activeVideo === i ? "ring-2 ring-primary scale-[1.02]" : "opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
              alt={v.label}
              className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/10 transition-colors">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeVideo === i ? "bg-primary" : "bg-white/80"}`}>
                <Play size={14} className={activeVideo === i ? "text-white" : "text-black"} fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1.5">
              <span className="text-xs font-sans text-white leading-tight line-clamp-2 block">{v.label}</span>
            </div>
          </button>
        ))}
      </div>
    </Section>

    {/* Kathleen Teaser */}
    <Section className="bg-navy-deep/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden aspect-[4/5]">
          <img src="/kat.jpg" alt="Kathleen Munger" className="w-full h-full object-cover object-top" />
        </div>
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
};

export default HomePage;
