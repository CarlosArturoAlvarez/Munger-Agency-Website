import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import {
  Heart, TrendingUp, MessageSquare, Eye,
  Users, Shield, Sparkles, Zap, Quote
} from "lucide-react";

const values = [
  { icon: Heart, name: "Relationships Matter, People Come First", desc: "Every client is treated like family — because to us, you are." },
  { icon: TrendingUp, name: "Relentless Pursuit of Personal Growth", desc: "We never stop learning so we can serve you better." },
  { icon: MessageSquare, name: "Open, Honest, and Productive Communication", desc: "Transparency is the foundation of every relationship we build." },
  { icon: Eye, name: "We Do the Right Thing Even When No One Is Looking", desc: "Integrity isn't optional — it's who we are." },
  { icon: Users, name: "We Work as a True Team", desc: "Collaboration and positivity drive everything we do." },
  { icon: Shield, name: "We Act Like Owners Because We Own It", desc: "Accountability isn't just a buzzword — it's our standard." },
  { icon: Sparkles, name: "Being of Service and Doing Good in the World", desc: "Our mission extends beyond insurance into the communities we serve." },
  { icon: Zap, name: "We Have Fun and We Get Stuff Done", desc: "Passion and purpose make every day worth showing up for." },
];

const WhyUsPage = () => (
  <PageLayout>
    {/* Hero */}
    <section className="lion-watermark py-24 sm:py-32 text-center">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Why Families Choose{" "}
          <span className="text-gradient-green">Munger Agency</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          At Munger Agency, every client comes first — every time. As an independent agency,
          we work with 30+ A-rated carriers to find the best fit for your unique needs and budget.
          We're not tied to one company's products. We're tied to you.
        </p>
      </div>
    </section>

    {/* Core Values */}
    <Section>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-12">Our Core Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {values.map((v) => (
          <GlassCard key={v.name}>
            <v.icon size={24} className="text-foreground mb-4" />
            <h3 className="font-sans font-semibold text-sm text-foreground mb-2">{v.name}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
          </GlassCard>
        ))}
      </div>
    </Section>

    {/* Endorsement */}
    <Section className="bg-navy-deep/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <GlassCard className="aspect-video flex items-center justify-center overflow-hidden">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Cody Askins SWAT Training Shoutout"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </GlassCard>
        <GlassCard>
          <Quote size={24} className="text-primary mb-4" />
          <p className="text-foreground/90 leading-relaxed italic mb-4">
            "Cody Askins, 8% Nation — gave Munger Agency a personal shoutout at SWAT Training, Dallas 2023"
          </p>
          <p className="text-sm text-muted-foreground">
            Cody Askins is the founder of 8% Nation and Ultimate Agent TV — one of the most
            respected voices in the insurance industry. His endorsement reflects the quality
            and integrity of the Munger Agency team.
          </p>
        </GlassCard>
      </div>
    </Section>

    {/* CTA */}
    <Section>
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-8">Experience the Munger Agency difference for yourself.</p>
        <a href="https://calendly.com/mungeragency" target="_blank" rel="noopener noreferrer">
          <Button variant="hero" size="xl">Schedule Your Free Consultation</Button>
        </a>
      </div>
    </Section>
  </PageLayout>
);

export default WhyUsPage;
