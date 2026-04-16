import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const initiatives = [
  {
    name: "Prostate Cancer",
    img: "/charitable/Prostate Cancer.avif",
    desc: "This is near & dear to our family hearts. My sons lost their father due to Prostate Cancer. We are strong advocates for reminding fathers, uncles, and sons to get checked. If caught early, it is treatable. Life is precious — don't waste it!",
    bullets: [
      "Know the symptoms",
      "Get checked",
      "Be alive for your family",
    ],
    action: { label: "Prostate Cancer Support", href: "https://www.pcf.org/patient-support/understanding-prostate-cancer/" },
  },
  {
    name: "New Friends New Life",
    img: "/charitable/New Friends New Life.avif",
    desc: "New Friends New Life helps trafficked victims and has comprehensive programming for nearly 400 women, teens, and children annually. NFNL engages in community education, has large support of men's groups, and is an anti-trafficking advocacy organization bringing awareness to this terrible issue.",
    bullets: [
      "100,000 children are trafficked in the USA every year",
      "Texas ranks #2 in the nation for human trafficking",
      "$99 million spent on sex trade in North Texas alone",
    ],
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
    bullets: [
      "ADOPT don't Shop",
    ],
    action: { label: "SPCA Texas Support", href: "https://spca.org/" },
  },
];

const CharitablePage = () => (
  <PageLayout>
    <section className="lion-watermark py-16 sm:py-20 text-center">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Giving{" "}
          <span className="text-foreground">Back</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Being of service and doing good in the world is one of our core values.
          Here are the causes and organizations we are proud to champion.
        </p>
      </div>
    </section>

    <Section>
      <div className="max-w-4xl mx-auto space-y-10">
        {initiatives.map((item, i) => (
          <div
            key={item.name}
            className={`glass-card rounded-2xl overflow-hidden flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""} gap-0`}
          >
            {/* Circle image panel */}
            <div className="md:w-56 shrink-0 flex items-center justify-center bg-foreground/5 p-8">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white/10 shadow-lg">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-7 flex flex-col justify-center">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">{item.name}</h2>
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

export default CharitablePage;
