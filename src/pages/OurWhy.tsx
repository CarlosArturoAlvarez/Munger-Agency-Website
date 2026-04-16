import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const OurWhyPage = () => (
  <PageLayout>
    {/* Hero */}
    <section className="lion-watermark py-16 sm:py-20 text-center">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Our Why
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          Every policy we write carries the weight of a personal story. This is ours.
        </p>
      </div>
    </section>

    {/* Story — boys & dad photo */}
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="sticky top-24">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/kat-boys-dad.jpg"
              alt="Kathleen's boys with their father"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3 italic">
            Kathleen's boys and their father — a Christmas memory, taken just a few short years before they lost him.
          </p>
        </div>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
            A Story That Changed Everything
          </h2>

          <p>
            The photo to the left is of Kathleen Munger Fisk's boys and their father — a beautiful, ordinary moment. Little did anyone know that just a few short years after it was taken, those boys would lose their father to Prostate Cancer.
          </p>

          <p>
            Kathleen had to look into the eyes of her 7 and 11-year-old sons and tell them their father was gone — at Christmas time. It is something no one should ever have to go through, let alone during the holidays.
          </p>

          {/* Pull quote */}
          <div className="border-l-4 border-primary pl-6 py-2 my-8">
            <p className="font-serif text-xl sm:text-2xl font-semibold text-foreground italic leading-relaxed">
              "When her boys' dad died, Kathleen told them he left them Life Insurance — but really, it was <span className="text-primary not-italic font-bold">Love Insurance.</span>"
            </p>
          </div>

          <p>
            That moment became the driving force behind everything Munger Agency stands for. Because we have all experienced the loss of loved ones, our entire team is deeply committed to making sure the families we serve are protected — so that those left behind can grieve, heal, and move forward with peace of mind rather than financial uncertainty.
          </p>

          <p>
            Knowing that a family will be taken care of when the unthinkable happens? That is truly <strong>priceless.</strong>
          </p>
        </div>
      </div>
    </Section>

    {/* Urgency */}
    <Section className="bg-navy-deep/30">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <Heart size={36} className="text-primary mx-auto" />
        <h2 className="font-serif text-3xl sm:text-4xl font-bold">
          Please Don't Wait Another Day
        </h2>
        <div className="space-y-4 text-foreground/85 leading-relaxed text-left">
          <p>
            We all know someone who has had to set up a GoFundMe to cover expenses after losing a loved one. We all say <em>"I'll get to that"</em> — and sometimes we never do. Time is fleeting, and tomorrow is never guaranteed.
          </p>
          <p>
            Preparation is the most powerful act of love you can give to those you care about. Don't let another day pass without coverage. Take care of this <strong className="text-foreground">today</strong> — because there truly is no time like the present.
          </p>
          <p>
            Our team at Munger Agency looks forward to having a real conversation with you about how we can protect your life and legacy — just as we've done for so many families before yours.
          </p>
        </div>
        <div className="pt-4">
          <a href="https://calendly.com/mungeragency" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">Get Protected Today</Button>
          </a>
        </div>
      </div>
    </Section>

    {/* Meet Kathleen Bio */}
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-1">Kathleen Munger Fisk</h2>
            <p className="text-sm text-primary font-sans font-semibold">Your Life &amp; Legacy Specialist</p>
          </div>

          <p>
            At Munger Agency, every client is unique — and Kathleen truly believes that. There is no "one-size-fits-all" approach here. She provides individual solutions tailored to each client's personal and family needs, always with their budget in mind. She is here to be your advocate, plain and simple.
          </p>

          <p>
            Kathleen brings a remarkably diverse background to this work: she has owned multiple companies, served as COO, CMO, and Administrator, worked with Trusts and Funeral Homes, and guided clients through some of life's most difficult moments — death, divorce, estate settlement, and more — over a 20+ year career.
          </p>

          <p>
            Her own personal journey through divorce, funeral planning, and serving as Executor and Trustee of numerous estates gives Kathleen and her team a depth of understanding that truly sets them apart. She knows what families face because she has faced it herself.
          </p>

          <p>
            Kathleen, her team, and colleagues are mentored and trained by some of the best in the industry. Their shared mission: help families achieve <strong className="text-foreground">peace of mind</strong> through the right insurance products and services.
          </p>

          <p>
            Based in Dallas, Kathleen serves clients nationwide. In her personal time, she enjoys her sons, family, travel, volunteering, and raising money for causes close to her heart — several of which are featured on our{" "}
            <Link to="/charitablecontributions" className="text-primary hover:underline">
              Giving Back page
            </Link>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="https://calendly.com/mungeragency" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg">Schedule a Call with Kathleen</Button>
            </a>
            <Link to="/careers">
              <Button variant="hero-ghost" size="lg">Join Our Team <ArrowRight size={16} /></Button>
            </Link>
          </div>
        </div>

        <div className="sticky top-24">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/kat-boys.jpg"
              alt="Kathleen with her boys"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3 italic">
            Kathleen with her sons — the heart behind everything Munger Agency does.
          </p>
        </div>
      </div>
    </Section>
  </PageLayout>
);

export default OurWhyPage;
