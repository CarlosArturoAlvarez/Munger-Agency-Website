import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-gradient border-t border-foreground/10">
    <div className="container-narrow section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="inline-flex flex-col items-center">
            <div className="flex items-center gap-2">
              <img src="/munger-lion-white.png" alt="Munger Agency lion" className="h-10 w-auto object-contain" style={{ mixBlendMode: "screen" }} />
              <span className="font-serif text-2xl font-bold text-white">Munger Agency</span>
            </div>
            <div className="w-full h-px bg-white/60 my-2" />
            <p className="font-serif text-sm text-white text-center leading-relaxed">
              Protecting Your Life and Legacy
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sans text-sm font-semibold text-foreground mb-4 tracking-wide">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", path: "/" },
              { label: "Why Us", path: "/what-makes-us-different" },
              { label: "Our Why", path: "/our-why" },
              { label: "Careers", path: "/careers" },
              { label: "Team & Partners", path: "/agents-referring" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans text-sm font-semibold text-foreground mb-4 tracking-wide">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <a href="mailto:Kmunger@mungeragency.com" className="hover:text-foreground transition-colors">
                Kmunger@mungeragency.com
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <Phone size={16} className="mt-0.5 shrink-0" />
              <a href="tel:2147992052" className="hover:text-foreground transition-colors">
                214.799.2052
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>5600 W Lovers Lane, 116-505, Dallas, TX 75209</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-sans text-sm font-semibold text-foreground mb-4 tracking-wide">Follow Us</h4>
          <div className="flex gap-3">
            <a
              href="https://linkedin.com/company/munger-agency"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-2.5 hover:text-primary"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com/MungerAgency"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-2.5 hover:text-primary"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-foreground/10 text-center text-xs text-muted-foreground">
        &copy;2025 Munger Agency. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
