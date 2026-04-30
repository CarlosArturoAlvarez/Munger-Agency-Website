import CarrierTicker from "@/components/CarrierTicker";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { User, ExternalLink, Calendar } from "lucide-react";

const initiatives = [
  {
    name: "Prostate Cancer",
    img: "/charitable/Prostate Cancer.avif",
    desc: "This is near & dear to our family hearts. My sons lost their father due to Prostate Cancer. We are strong advocates for reminding fathers, uncles, and sons to get checked. If caught early, it is treatable. Life is precious — don't waste it!",
    bullets: ["Know the symptoms", "Get checked", "Be alive for your family"],
    action: { label: "Prostate Cancer Support", href: "https://www.pcf.org/patient-support/understanding-prostate-cancer/" },
  },
  {
    name: "New Friends New Life",
    img: "/charitable/New Friends New Life.avif",
    desc: "New Friends New Life helps trafficked victims and has comprehensive programming for nearly 400 women, teens, and children annually. NFNL engages in community education, has large support of men's groups, and is an anti-trafficking advocacy organization bringing awareness to this terrible issue.",
    bullets: ["100,000 children are trafficked in the USA every year", "Texas ranks #2 in the nation for human trafficking", "$99 million spent on sex trade in North Texas alone"],
    action: { label: "New Friends New Life Support", href: "https://www.newfriendsnewlife.org/" },
  },
  {
    name: "North Texas Food Bank",
    img: "/charitable/North Texas Food Bank.avif",
    desc: "Help those who need help in these tough times with the basics — food. The North Texas Food Bank works to close the hunger gap for children, seniors, and families across a 13-county service area.",
    bullets: [],
    action: { label: "North Texas Food Bank Support", href: "https://ntfb.org/" },
  },
  {
    name: "SPCA of Texas",
    img: "/charitable/SPCA of Texas.avif",
    desc: "Help those fur friends that always give love and companionship. The SPCA of Texas rescues, rehabilitates, and rehomes animals in need across North Texas.",
    bullets: ["ADOPT don't Shop"],
    action: { label: "SPCA Texas Support", href: "https://spca.org/" },
  },
];

const partners = [
  { name: "Jay K Stevenson", desc: "Estate planning attorney", link: "https://gpmz-law.com/?_gl=1*1syct8x*_ga*MTc2NDg5NzYxMS4xNzc1NzY2MjIw*_ga_757NKTDB79*czE3NzU3NjYyMjAkbzEkZzAkdDE3NzU3NjYyMjQkajU2JGwwJGgw", img: "/partners/Jay K Stevenson.avif" },
  { name: "Cadence Bank Wealth Leadership Team", desc: "Wealth management, Dallas", link: "https://cadencebank.com/insights-and-articles/business/podcast-episode-10", img: "/partners/Cadence Bank Wealth.avif" },
  { name: "LeadHERship Global", desc: "Women's leadership and empowerment", link: "https://leadhershipglobal.com/", img: "/partners/LeadHERship.avif" },
  { name: "C-Suite Network", desc: "The most powerful network of C-Suite leaders", link: "https://c-suitenetwork.com/", img: "/partners/csuite-logo.png" },
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
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://calendly.com/mungeragency/client-phone-call" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="default">Schedule a Client Call <Calendar size={16} /></Button>
              </a>
              <a href="https://calendly.com/mungeragency/call" target="_blank" rel="noopener noreferrer">
                <Button variant="hero-ghost" size="default">Schedule a Business Partnership Call <Calendar size={16} /></Button>
              </a>
            </div>
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

    {/* Giving Back */}
    <Section id="giving-back">
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-4">Giving Back</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Being of service and doing good in the world is one of our core values. Here are the causes and organizations we are proud to champion.
      </p>
      <div className="max-w-4xl mx-auto space-y-10">
        {initiatives.map((item, i) => (
          <div
            key={item.name}
            className={`glass-card rounded-2xl overflow-hidden flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""} gap-0`}
          >
            <div className="md:w-56 shrink-0 flex items-center justify-center bg-foreground/5 p-8">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white/10 shadow-lg">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover object-center" />
              </div>
            </div>
            <div className="flex-1 p-7 flex flex-col justify-center">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{item.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
              {item.bullets.length > 0 && (
                <ul className="mb-5 space-y-1">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-auto">
                <a href={item.action.href} target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="sm" className="gap-1">
                    {item.action.label} <ExternalLink size={11} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  </PageLayout>
);

export default TeamPage;
