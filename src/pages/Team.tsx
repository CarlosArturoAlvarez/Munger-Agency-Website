import CarrierTicker from "@/components/CarrierTicker";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { User, ExternalLink, Calendar } from "lucide-react";

const partners = [
  { name: "Jay K Stevenson", desc: "Estate planning attorney", link: "https://gpmz-law.com/?_gl=1*1syct8x*_ga*MTc2NDg5NzYxMS4xNzc1NzY2MjIw*_ga_757NKTDB79*czE3NzU3NjYyMjAkbzEkZzAkdDE3NzU3NjYyMjQkajU2JGwwJGgw", img: "/partners/Jay K Stevenson.avif" },
  { name: "Cadence Bank Wealth Leadership Team", desc: "Wealth management, Dallas", link: "https://cadencebank.com/insights-and-articles/business/podcast-episode-10", img: "/partners/Cadence Bank Wealth.avif" },
  { name: "Fair Credit Repair Consultants", desc: "Credit repair and financial planning", link: "#", img: "/partners/Fair Credit Repair.avif" },
  { name: "LeadHERship Global", desc: "Women's leadership and empowerment", link: "https://leadhershipglobal.com/", img: "/partners/LeadHERship.avif" },
  { name: "Lisa West — Sotheby's Real Estate", desc: "Luxury real estate, DFW", link: "https://www.sothebysrealty.com/eng/associate/180-a-5176-4037824/lisa-west", img: "/partners/Lisa West.avif" },
  { name: "Geni Manning Group", desc: "DFW Real Estate", link: "https://www.genimanning.com/", img: "/partners/Geni Manning Group.avif" },
];

const TeamPage = () => (
  <PageLayout>
    <section className="lion-watermark py-16 sm:py-20 text-center">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Our Team &amp;{" "}
          <span className="text-foreground">Trusted Partners</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          You can count on us — and the network of professionals we trust most.
        </p>
      </div>
    </section>

    {/* Carrier Partners */}
    <Section>
      <h2 className="font-serif text-3xl font-bold text-center mb-2">A Few of Our Trusted Insurance Carrier Partners</h2>
      <p className="text-center text-muted-foreground mb-8">We work with 30+ A-rated carriers to find the best coverage for you.</p>
      <CarrierTicker />
    </Section>

    {/* Kathleen Featured */}
    <Section>
      <GlassCard className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img src="/kat.jpg" alt="Kathleen Munger Fisk" className="w-full h-full object-cover object-center" />
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {partners.map((p) => (
          <GlassCard key={p.name} className="!p-0 overflow-hidden">
            <div className="flex h-40">
              <div className="w-40 shrink-0 bg-foreground/5 overflow-hidden">
                {p.img
                  ? <img src={p.img} alt={p.name} className="w-full h-full object-cover object-center" />
                  : <div className="w-full h-full flex items-center justify-center"><User size={32} className="text-muted-foreground/30" /></div>}
              </div>
              <div className="flex flex-col justify-center px-5 py-4">
                <h3 className="font-sans font-semibold text-foreground mb-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{p.desc}</p>
                {p.link !== "#" ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="hero" size="sm" className="gap-1">Visit Website <ExternalLink size={12} /></Button>
                  </a>
                ) : (
                  <Button variant="hero" size="sm" disabled className="gap-1 opacity-40">Coming Soon</Button>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  </PageLayout>
);

export default TeamPage;
