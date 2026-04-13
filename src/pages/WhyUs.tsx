import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import {
  Heart, TrendingUp, MessageSquare, Eye,
  Users, Shield, Sparkles, Zap, Quote
} from "lucide-react";

const values = [
  { icon: Heart, name: "Relationships Matter, People Come First" },
  { icon: TrendingUp, name: "Relentless Pursuit of Personal Growth" },
  { icon: MessageSquare, name: "Open, Honest, and Productive Communication" },
  { icon: Eye, name: "We Do the Right Thing Even When No One Is Looking" },
  { icon: Users, name: "We Work as a True Team" },
  { icon: Shield, name: "We Act Like Owners Because We Own It" },
  { icon: Sparkles, name: "Being of Service and Doing Good in the World" },
  { icon: Zap, name: "We Have Fun and We Get Stuff Done" },
];

const WhyUsPage = () => (
  <PageLayout>
    {/* Hero */}
    <section className="lion-watermark py-16 sm:py-20 text-center">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Why Families Choose{" "}
          <span className="text-foreground">Munger Agency</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          We're not tied to one company's products — we're tied to <em>you</em>. As your
          independent advocate, we fight to find the best coverage for your life, your family,
          and your legacy. Tomorrow is never certain. Let's protect what matters most, today.
        </p>
      </div>
    </section>

    {/* What Sets Us Apart */}
    <Section className="bg-navy-deep/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            icon: Shield,
            title: "Comprehensive Services",
            body: "With access to 30+ A-rated carriers and a network of thoroughly vetted referral partners, Munger Agency brings unmatched depth to every client relationship. Our collective expertise makes us your #1 advocate — and that's just the beginning of what sets us apart from the competition.",
            img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
          },
          {
            icon: Heart,
            title: "Client-First Service",
            body: "Life planning isn't one-size-fits-all. Whether you're building a legacy, protecting a business, or preparing for retirement, we strategize around your needs, your budget, and your goals — adjusting with you as life happens. We are here for you, your family, and your business. Always.",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80",
          },
        ].map((card) => (
          <div key={card.title} className="relative overflow-hidden rounded-xl min-h-[320px] flex flex-col justify-end group">
            <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/10" />
            <div className="relative z-10 p-8">
              <card.icon size={28} className="text-white mb-3" />
              <h3 className="font-serif text-2xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{card.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Core Values */}
    <Section>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-12">Our Core Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {values.map((v) => (
          <GlassCard key={v.name} className="flex items-center gap-3 p-4">
            <v.icon size={20} className="text-primary shrink-0" />
            <h3 className="font-sans font-medium text-sm text-foreground leading-snug">{v.name}</h3>
          </GlassCard>
        ))}
      </div>
    </Section>

    {/* Endorsement */}
    <Section className="bg-navy-deep/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="rounded-xl overflow-hidden aspect-video bg-black">
          <video
            className="w-full h-full object-cover"
            controls
            playsInline
          >
            <source src="/kathleen-testimonial.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
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
