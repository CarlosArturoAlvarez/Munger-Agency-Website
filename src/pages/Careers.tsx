import { useState } from "react";
import emailjs from "@emailjs/browser";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  CheckCircle, Wifi, DollarSign, TrendingUp, Award,
  Flag, Calendar
} from "lucide-react";

// ─── EmailJS config ───────────────────────────────────────────────────────────
// Replace these three values after setting up your EmailJS account:
//   1. Go to https://www.emailjs.com and sign up (free)
//   2. Add an Email Service (Gmail) → copy the Service ID
//   3. Create an Email Template      → copy the Template ID
//   4. Account → API Keys            → copy the Public Key
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
// ─────────────────────────────────────────────────────────────────────────────

const checklist = [
  "You're motivated and self-directed",
  "You're coachable and open to mentorship",
  "You want to work remotely on your own schedule",
  "You have an entrepreneurial mindset",
  "You want to help families protect their life and legacy",
  "You have your Life & Health Insurance license — or you're willing to get one through our discounted course",
  "You're willing to put in the work to build your own agency with our training and support",
  "You're ready to create a lasting legacy for yourself and your family",
];

const benefits = [
  { icon: Wifi, title: "100% Remote", desc: "Work from anywhere in the US" },
  { icon: DollarSign, title: "Uncapped Income", desc: "You get paid what you're worth" },
  { icon: Award, title: "Mentorship & Training", desc: "Trained by the best in the industry" },
  { icon: TrendingUp, title: "Build Your Agency", desc: "Own your book of business and earn residual income" },
];

const licenseTypes = ["Life", "Health", "P&C", "Not yet licensed"];
const experienceOptions = ["0", "1–2", "3–5", "5+"];
const sourceOptions = ["Indeed", "ZipRecruiter", "LinkedIn", "Google", "Referral", "Other"];

const CareersPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    statesLicensed: "",
    npn: "",
    licenseTypes: [] as string[],
    experience: "",
    military: "",
    contractor: false,
    source: "",
  });

  const update = (field: string, value: string | boolean | string[]) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const toggleLicense = (type: string) => {
    const current = form.licenseTypes;
    update(
      "licenseTypes",
      current.includes(type) ? current.filter((t) => t !== type) : [...current, type]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone || !form.contractor) {
      toast({ title: "Missing Fields", description: "Please complete all required fields.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          full_name:       form.fullName,
          email:           form.email,
          phone:           form.phone,
          states_licensed: form.statesLicensed || "N/A",
          npn:             form.npn || "N/A",
          license_types:   form.licenseTypes.length ? form.licenseTypes.join(", ") : "None selected",
          experience:      form.experience || "N/A",
          military:        form.military || "N/A",
          source:          form.source || "N/A",
          submitted_at:    new Date().toLocaleString("en-US", { timeZone: "America/Chicago" }),
        },
        EMAILJS_PUBLIC_KEY
      );
      toast({ title: "Application Sent! 🎉", description: "Thank you! Kathleen will be in touch with you soon." });
      setForm({ fullName: "", email: "", phone: "", statesLicensed: "", npn: "", licenseTypes: [], experience: "", military: "", contractor: false, source: "" });
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please try again or email mungeragency@yahoo.com directly.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="lion-watermark py-16 sm:py-20 text-center">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Build Your Agency.{" "}
            <span className="text-foreground">Build Your Legacy.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            We're growing — and we're looking for motivated individuals who want to help families
            while building something of their own.
          </p>
        </div>
      </section>

      {/* Who We're Looking For */}
      <Section>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-12">Who We're Looking For</h2>
        <GlassCard className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/90 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </Section>

      {/* Benefits */}
      <Section className="bg-navy-deep/30">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-12">Why Join Munger Agency</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => (
            <GlassCard key={b.title} className="text-center">
              <b.icon size={28} className="text-foreground mx-auto mb-4" />
              <h3 className="font-sans font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="text-xs text-muted-foreground">{b.desc}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Military */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Flag size={28} className="text-primary shrink-0" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Military Personnel Welcome</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-foreground/90 leading-relaxed">
                We are proud to welcome Military personnel — currently serving US-based, retiring, and military spouses — to the Munger Agency family.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                The insurance industry offers a flexible, rewarding career that aligns perfectly with the discipline, leadership, and service mindset of our military community. Watch Kathleen's interview with a veteran below to hear firsthand why this career path is a natural fit.
              </p>
              <a href="https://calendly.com/mungeragency/clientcall" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="default">Let's Chat <Calendar size={16} /></Button>
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl bg-black aspect-video">
              <video className="w-full h-full object-cover" controls playsInline>
                <source src="/veteran-interview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </Section>

      {/* Application Form */}
      <Section className="bg-navy-deep/30">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-12">Apply to Join the Munger Agency Team</h2>
        <GlassCard className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-sans font-semibold text-foreground/80 mb-1.5">Full Name *</label>
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your full name"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sans font-semibold text-foreground/80 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-sans font-semibold text-foreground/80 mb-1.5">Phone Number *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="(555) 555-5555"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sans font-semibold text-foreground/80 mb-1.5">State(s) Licensed In</label>
                <input
                  type="text"
                  value={form.statesLicensed}
                  onChange={(e) => update("statesLicensed", e.target.value)}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g., TX, CA"
                />
              </div>
              <div>
                <label className="block text-xs font-sans font-semibold text-foreground/80 mb-1.5">NPN Number (optional)</label>
                <input
                  type="text"
                  value={form.npn}
                  onChange={(e) => update("npn", e.target.value)}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Enter if you have one"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-sans font-semibold text-foreground/80 mb-2">License Type</label>
              <div className="flex flex-wrap gap-3">
                {licenseTypes.map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.licenseTypes.includes(type)}
                      onChange={() => toggleLicense(type)}
                      className="rounded border-foreground/20 bg-foreground/5 text-primary focus:ring-primary/50"
                    />
                    <span className="text-sm text-foreground/80">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sans font-semibold text-foreground/80 mb-1.5">Years of Experience</label>
                <select
                  value={form.experience}
                  onChange={(e) => update("experience", e.target.value)}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Select...</option>
                  {experienceOptions.map((o) => (
                    <option key={o} value={o}>{o} years</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-sans font-semibold text-foreground/80 mb-1.5">Military veteran or active duty?</label>
                <select
                  value={form.military}
                  onChange={(e) => update("military", e.target.value)}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Select...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-sans font-semibold text-foreground/80 mb-1.5">How did you hear about us?</label>
              <select
                value={form.source}
                onChange={(e) => update("source", e.target.value)}
                className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select...</option>
                {sourceOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.contractor}
                onChange={(e) => update("contractor", e.target.checked)}
                className="mt-0.5 rounded border-foreground/20 bg-foreground/5 text-primary focus:ring-primary/50"
                required
              />
              <span className="text-sm text-foreground/80">
                I understand this is a 1099 independent contractor position *
              </span>
            </label>
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
              {loading ? "Submitting..." : "Submit My Application"}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Or if you'd prefer to speak first —{" "}
              <a
                href="https://calendly.com/mungeragency/call"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Schedule an Interview
              </a>
            </p>
          </form>
        </GlassCard>
      </Section>
    </PageLayout>
  );
};

export default CareersPage;
