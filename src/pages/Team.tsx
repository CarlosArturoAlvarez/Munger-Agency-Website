import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { User, ExternalLink, Calendar } from "lucide-react";

const partners = [
  { name: "Jay K Stevenson", desc: "Estate planning attorney", link: "#" },
  { name: "Cadence Bank Wealth Leadership Team", desc: "Wealth management, Dallas", link: "#" },
  { name: "Fair Credit Repair Consultants", desc: "Credit repair and financial planning", link: "#" },
  { name: "LeadHERship Global", desc: "Women's leadership and empowerment", link: "#" },
  { name: "Lisa West — Sotheby's Real Estate", desc: "Luxury real estate, DFW", link: "#" },
  { name: "Geni Manning Group", desc: "DFW Real Estate", link: "#" },
];

const TeamPage = () => (
  <PageLayout>
    <section className="lion-watermark py-24 sm:py-32 text-center">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Our Team &amp;{" "}
          <span className="text-gradient-green">Trusted Partners</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          You can count on us — and the network of professionals we trust most.
        </p>
      </div>
    </section>

    {/* Kathleen Featured */}
    <Section>
      <GlassCard className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="aspect-square rounded-lg bg-foreground/5 flex items-center justify-center">
            <User size={64} className="text-muted-foreground/30" />
          </div>
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl font-bold mb-1">Kathleen Munger Fisk</h2>
            <p className="text-sm text-primary font-sans font-semibold mb-4">Founder &amp; Life &amp; Legacy Specialist</p>
            <p className="text-sm text-foreground/90 leading-relaxed mb-4">
              Licensed insurance professional serving clients nationwide from Dallas, TX.
              With over 20 years of experience and a deeply personal mission, Kathleen brings
              unmatched empathy and expertise to every relationship.
            </p>
            <a href="https://calendly.com/mungeragency" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="default">Schedule a Call <Calendar size={16} /></Button>
            </a>
          </div>
        </div>
      </GlassCard>
    </Section>

    {/* Partners */}
    <Section className="bg-navy-deep/30">
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-12">Our Trusted Partners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {partners.map((p) => (
          <GlassCard key={p.name}>
            <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-4">
              <User size={22} className="text-muted-foreground/50" />
            </div>
            <h3 className="font-sans font-semibold text-foreground mb-1">{p.name}</h3>
            <p className="text-xs text-muted-foreground mb-3">{p.desc}</p>
            {p.link !== "#" && (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                Visit <ExternalLink size={12} />
              </a>
            )}
          </GlassCard>
        ))}
      </div>
    </Section>

    {/* Carrier Partners */}
    <Section>
      <h2 className="font-serif text-3xl font-bold text-center mb-4">A Few of Our Trusted Insurance Carrier Partners</h2>
      <p className="text-center text-muted-foreground mb-12">We work with 30+ A-rated carriers to find the best coverage for you.</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <GlassCard key={i} className="aspect-[3/2] flex items-center justify-center p-4" hover={false}>
            <span className="text-xs text-muted-foreground/50 font-sans">Carrier {i + 1}</span>
          </GlassCard>
        ))}
      </div>
    </Section>
  </PageLayout>
);

export default TeamPage;
