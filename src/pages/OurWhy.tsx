import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OurWhyPage = () => (
  <PageLayout>
    {/* Hero */}
    <section className="lion-watermark py-24 sm:py-32 text-center">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          This Is Why We Do{" "}
          <span className="text-gradient-green">What We Do</span>
        </h1>
      </div>
    </section>

    {/* Story */}
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <GlassCard className="aspect-[3/4] flex items-center justify-center sticky top-24">
          <User size={80} className="text-muted-foreground/30" />
        </GlassCard>
        <div className="space-y-6">
          <p className="text-foreground/90 leading-relaxed">
            Kathleen Munger Fisk's journey into insurance wasn't a career choice — it was a calling born from personal loss.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            When her boys' dad passed away unexpectedly, Kathleen was faced with the unimaginable:
            raising her children alone while navigating the financial aftermath of losing a loved one.
          </p>

          <GlassCard className="border-l-2 border-primary my-8">
            <p className="font-serif text-xl sm:text-2xl font-semibold text-foreground italic leading-relaxed">
              "When Kathleen's boys' dad died, she told them that he left them Life Insurance —
              but actually, it was Love Insurance."
            </p>
          </GlassCard>

          <p className="text-foreground/90 leading-relaxed">
            That moment — watching her sons find comfort in knowing their father had planned for them,
            had loved them enough to protect them even after he was gone — changed everything.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            Kathleen realized that life insurance isn't just a policy. It's an act of love. It's the last
            gift you give to the people who matter most. And from that realization, Munger Agency was born.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            Today, Kathleen and her team serve families and individuals nationwide, bringing the same
            personal care and dedication to every single client. Because at Munger Agency, this isn't
            just business — it's personal. It always has been.
          </p>
        </div>
      </div>
    </Section>

    {/* Bio */}
    <Section className="bg-navy-deep/30">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <GlassCard className="aspect-square flex items-center justify-center">
          <User size={64} className="text-muted-foreground/30" />
        </GlassCard>
        <div className="lg:col-span-2">
          <h2 className="font-serif text-3xl font-bold mb-2">Kathleen Munger Fisk</h2>
          <p className="text-sm text-primary font-sans font-semibold mb-6">Your Life &amp; Legacy Specialist</p>
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p>
              Kathleen is a licensed insurance professional based in Dallas, Texas, serving clients
              across the United States. With over 20 years of experience in financial services and
              a deeply personal connection to the work she does, Kathleen brings unmatched empathy,
              expertise, and dedication to every client relationship.
            </p>
            <p>
              As the founder and owner of Munger Agency, Kathleen works with 30+ A-rated carriers
              to deliver customized insurance and retirement solutions. She specializes in life insurance,
              annuities, mortgage protection, and legacy planning — always with the client's best interest
              at the center of every recommendation.
            </p>
            <p>
              When she's not helping families protect their futures, Kathleen is a proud mother,
              community leader, and advocate for financial literacy. She believes that every person
              deserves access to quality insurance guidance — and she's made it her life's mission
              to provide it.
            </p>
          </div>
        </div>
      </div>
    </Section>

    {/* CTA */}
    <Section>
      <div className="text-center space-y-4">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold">Let's Protect What Matters</h2>
        <p className="text-muted-foreground">Start a conversation with Kathleen today.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a href="https://calendly.com/mungeragency" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">Schedule a Call with Kathleen</Button>
          </a>
          <Link to="/careers">
            <Button variant="hero-ghost" size="xl">Join Our Team <ArrowRight size={16} /></Button>
          </Link>
        </div>
      </div>
    </Section>
  </PageLayout>
);

export default OurWhyPage;
