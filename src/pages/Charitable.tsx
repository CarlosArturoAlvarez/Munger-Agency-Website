import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Heart, ExternalLink } from "lucide-react";

const charities = [
  {
    name: "St. Jude Children's Research Hospital",
    desc: "Leading the way the world understands, treats, and defeats childhood cancer and other life-threatening diseases.",
  },
  {
    name: "Operation Kindness",
    desc: "North Texas' oldest and largest no-kill animal shelter, providing superior care and finding loving homes.",
  },
  {
    name: "Habitat for Humanity",
    desc: "Helping families build and improve places to call home, and providing tools and resources for housing stability.",
  },
  {
    name: "Toys for Tots",
    desc: "Collecting and distributing new, unwrapped toys during the holiday season as Christmas gifts for less fortunate children.",
  },
];

const CharitablePage = () => (
  <PageLayout>
    <section className="lion-watermark py-24 sm:py-32 text-center">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Charitable{" "}
          <span className="text-gradient-green">Contributions</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Being of service and doing good in the world is one of our core values.
          Here are some of the organizations we're proud to support.
        </p>
      </div>
    </section>

    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {charities.map((c) => (
          <GlassCard key={c.name}>
            <Heart size={22} className="text-foreground mb-4" />
            <h3 className="font-sans font-semibold text-foreground mb-2">{c.name}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  </PageLayout>
);

export default CharitablePage;
