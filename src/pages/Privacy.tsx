import { useSeo } from "@/hooks/use-seo";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { MessageSquareText } from "lucide-react";

const EFFECTIVE_DATE = "September 16, 2026";

const sections = [
  {
    id: "who-we-are",
    title: "1. Introduction & Who We Are",
    body: (
      <>
        <p>
          Munger Agency ("Munger Agency," "we," "us," or "our") is an insurance agency based in Dallas, Texas,
          operating the website located at{" "}
          <a href="https://www.mungeragency.com" className="text-primary hover:underline">
            www.mungeragency.com
          </a>{" "}
          (the "Site"). This Privacy Policy explains what personal information we collect through the Site, how we
          use and share it, and the choices and rights available to you.
        </p>
        <p>
          By using the Site or submitting any form on the Site, you agree to the collection and use of your
          information as described in this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "data-collected",
    title: "2. What Personal Data We Collect",
    body: (
      <>
        <p>When you interact with the Site, including through contact forms, quote requests, or recruitment inquiries, we may collect:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>IP address and general device/browser information</li>
          <li>Any additional information you voluntarily provide in a form, such as insurance needs or career interests</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Data",
    body: (
      <>
        <p>We use the personal data we collect to:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Respond to your inquiries and follow up on requests for information</li>
          <li>Provide insurance quotes and discuss coverage options</li>
          <li>Contact you by phone, email, or text message regarding products and services</li>
          <li>Evaluate and follow up on agent recruitment inquiries</li>
          <li>Improve our Site, marketing, and customer service</li>
          <li>Comply with legal and regulatory obligations</li>
        </ul>
      </>
    ),
  },
  {
    id: "sms-consent",
    title: "4. SMS / Text Message Consent",
    highlight: true,
    body: (
      <>
        <p>
          By submitting any form on this Site, you expressly consent to receive automated and manual text
          messages (SMS) from Munger Agency at the phone number you provide, including messages related to
          insurance quotes, follow-up communications, appointment scheduling, and agent recruitment outreach.
          These messages may be sent using an automated dialing or scheduling system.
        </p>
        <p>
          Consent to receive text messages is not a condition of purchasing any goods or services.
        </p>
        <p className="font-semibold text-foreground">
          Reply STOP to unsubscribe at any time. Message and data rates may apply.
        </p>
        <p>
          Message frequency may vary. Reply HELP for assistance, or contact us using the information in Section 9
          below.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "5. Third-Party Sharing",
    body: (
      <>
        <p>
          We do not sell your personal information. We may share your data with trusted third parties solely for
          legitimate business purposes, including:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Customer relationship management (CRM) platforms used to manage leads and communications</li>
          <li>AI-powered dialer and scheduling systems used to contact and follow up with leads via calls and SMS</li>
          <li>Insurance carriers and underwriters for the purpose of obtaining quotes or processing applications</li>
          <li>Service providers who support our Site hosting, analytics, or business operations</li>
        </ul>
        <p>
          These third parties are only permitted to use your information as necessary to provide services on our
          behalf and are not authorized to use it for their own independent marketing purposes.
        </p>
        <p className="font-semibold text-foreground">
          No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.
          All the above categories exclude text messaging originator opt-in data and consent; this information
          will not be shared with any third parties.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    body: (
      <p>
        We retain personal data for as long as necessary to fulfill the purposes described in this Privacy
        Policy, including maintaining business records, complying with legal and regulatory obligations,
        resolving disputes, and enforcing our agreements. When data is no longer needed for these purposes, we
        take reasonable steps to securely delete or anonymize it.
      </p>
    ),
  },
  {
    id: "user-rights",
    title: "7. Your Rights",
    body: (
      <>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Request access to the personal data we hold about you</li>
          <li>Request correction of inaccurate or incomplete data</li>
          <li>Request deletion of your personal data</li>
          <li>Opt out of receiving text messages by replying STOP, or opt out of marketing communications at any time</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us using the information provided in Section 9 below.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "8. Cookies & Analytics",
    body: (
      <p>
        Our Site may use cookies and similar tracking technologies, as well as third-party analytics tools, to
        understand how visitors use the Site, improve functionality, and measure the effectiveness of our
        marketing. You can control or disable cookies through your browser settings; however, doing so may affect
        certain features of the Site.
      </p>
    ),
  },
  {
    id: "contact",
    title: "9. Contact Us",
    body: (
      <>
        <p>
          If you have questions about this Privacy Policy or would like to make a privacy-related request
          (including access, correction, deletion, or opt-out requests), please contact us at:
        </p>
        <ul className="list-none pl-0 space-y-1 mt-2">
          <li>
            <span className="text-muted-foreground">Email: </span>
            <a href="mailto:Kmunger@mungeragency.com" className="text-primary hover:underline">
              Kmunger@mungeragency.com
            </a>
          </li>
          <li>
            <span className="text-muted-foreground">Phone: </span>
            <a href="tel:2147992052" className="text-primary hover:underline">
              214.799.2052
            </a>
          </li>
          <li>
            <span className="text-muted-foreground">Mail: </span>
            <span className="text-foreground">5600 W Lovers Lane, 116-505, Dallas, TX 75209</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "effective-date",
    title: "10. Effective Date",
    body: <p>This Privacy Policy is effective as of {EFFECTIVE_DATE}. We may update this policy from time to time; any changes will be posted on this page with a revised effective date.</p>,
  },
];

const PrivacyPage = () => {
  useSeo(
    "Privacy Policy — Munger Agency",
    "How Munger Agency collects, uses, and protects your personal information, including our SMS/text messaging consent practices."
  );
  return (
  <PageLayout>
    <section className="lion-watermark py-16 sm:py-20 text-center">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground">Effective Date: {EFFECTIVE_DATE}</p>
      </div>
    </section>

    <Section>
      <div className="max-w-4xl mx-auto space-y-8">
        {sections.map((s) =>
          s.highlight ? (
            <GlassCard key={s.id} className="border border-primary/40" hover={false}>
              <div className="flex items-center gap-2 mb-3">
                <MessageSquareText size={20} className="text-primary shrink-0" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">{s.title}</h2>
              </div>
              <div className="text-foreground/90 leading-relaxed space-y-3">{s.body}</div>
            </GlassCard>
          ) : (
            <div key={s.id}>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">{s.title}</h2>
              <div className="text-foreground/90 leading-relaxed space-y-3">{s.body}</div>
            </div>
          )
        )}
      </div>
    </Section>
  </PageLayout>
  );
};

export default PrivacyPage;
