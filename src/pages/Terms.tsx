import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";

const EFFECTIVE_DATE = "September 16, 2026";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: (
      <p>
        By accessing or using the website located at{" "}
        <a href="https://www.mungeragency.com" className="text-primary hover:underline">
          www.mungeragency.com
        </a>{" "}
        (the "Site"), operated by Munger Agency ("Munger Agency," "we," "us," or "our"), you agree to be bound by
        these Terms &amp; Conditions ("Terms"). If you do not agree to these Terms, please do not use the Site.
      </p>
    ),
  },
  {
    id: "purpose",
    title: "2. Purpose of the Website",
    body: (
      <p>
        The Site is provided for informational and marketing purposes only. Content on the Site describes
        insurance products and services generally and does not constitute a binding insurance contract, offer of
        coverage, or professional advice. Any actual insurance coverage is governed solely by the terms of the
        applicable policy issued by the relevant insurance carrier.
      </p>
    ),
  },
  {
    id: "no-guarantee",
    title: "3. No Guarantee of Coverage",
    body: (
      <p>
        Visiting the Site, requesting a quote, or submitting any form does not guarantee insurance approval,
        eligibility, coverage, or pricing. All applications are subject to underwriting review and approval by
        the applicable insurance carrier, and quoted rates are estimates only until a policy is formally issued.
      </p>
    ),
  },
  {
    id: "user-conduct",
    title: "4. User Conduct",
    body: (
      <>
        <p>When using the Site, you agree not to:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Submit false, misleading, or fraudulent information through any form</li>
          <li>Use the Site for any unlawful purpose or in violation of any applicable law or regulation</li>
          <li>Attempt to gain unauthorized access to the Site, its systems, or related accounts</li>
          <li>Interfere with or disrupt the operation of the Site or its underlying infrastructure</li>
          <li>Use automated means (bots, scrapers, etc.) to access or collect data from the Site without permission</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "5. Intellectual Property",
    body: (
      <p>
        All content on the Site, including text, graphics, logos, images, and software, is the property of
        Munger Agency or its licensors and is protected by applicable intellectual property laws. You may not
        reproduce, distribute, modify, or create derivative works from any content on the Site without our prior
        written consent.
      </p>
    ),
  },
  {
    id: "sms",
    title: "6. SMS Communications",
    highlight: true,
    body: (
      <>
        <p>
          By submitting a form on the Site or otherwise opting in, you agree to receive automated and manual text
          messages from Munger Agency related to insurance quotes, follow-up communications, appointment
          scheduling, and agent recruitment outreach.
        </p>
        <p className="font-semibold text-foreground">
          You may opt out at any time by replying STOP to any text message. Message and data rates may apply.
        </p>
        <p>
          For more detail on how we collect, use, and share your information in connection with SMS and other
          communications, please see our{" "}
          <Link to="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "7. Third-Party Links",
    body: (
      <p>
        The Site may contain links to third-party websites, including carrier or partner sites, that are not
        owned or controlled by Munger Agency. We are not responsible for the content, privacy practices, or terms
        of use of any third-party websites. Accessing linked sites is at your own risk.
      </p>
    ),
  },
  {
    id: "liability",
    title: "8. Limitation of Liability",
    body: (
      <p>
        To the fullest extent permitted by law, Munger Agency and its officers, employees, and agents shall not
        be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or
        related to your use of, or inability to use, the Site, even if we have been advised of the possibility of
        such damages. The Site is provided "as is" and "as available" without warranties of any kind, express or
        implied.
      </p>
    ),
  },
  {
    id: "indemnification",
    title: "9. Indemnification",
    body: (
      <p>
        You agree to indemnify, defend, and hold harmless Munger Agency and its officers, employees, and agents
        from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys'
        fees, arising out of or in any way connected with your use of the Site or your violation of these Terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "10. Governing Law",
    body: (
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without
        regard to its conflict of law principles. Any disputes arising under these Terms shall be subject to the
        exclusive jurisdiction of the state and federal courts located in Dallas County, Texas.
      </p>
    ),
  },
  {
    id: "changes",
    title: "11. Changes to These Terms",
    body: (
      <p>
        We may update these Terms from time to time. Any changes will be posted on this page with a revised
        effective date. Your continued use of the Site after any changes constitutes your acceptance of the
        updated Terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "12. Contact Information",
    body: (
      <>
        <p>If you have questions about these Terms, please contact us at:</p>
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
];

const TermsPage = () => (
  <PageLayout>
    <section className="lion-watermark py-16 sm:py-20 text-center">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Terms &amp; Conditions
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

export default TermsPage;
