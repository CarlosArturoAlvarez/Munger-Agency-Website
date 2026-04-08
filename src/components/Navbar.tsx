import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Why Us", path: "/what-makes-us-different" },
  { label: "Our Why", path: "/our-why" },
  { label: "Careers", path: "/careers" },
  { label: "Team & Partners", path: "/agents-referring" },
  { label: "Giving Back", path: "/charitablecontributions" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-foreground/10">
      <div className="container-narrow flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Munger Agency
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-sans font-medium transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:2147992052" className="text-foreground/70 hover:text-foreground transition-colors">
            <Phone size={18} />
          </a>
          <a href="https://calendly.com/mungeragency" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm">Schedule a Call</Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden glass-card border-0 border-t border-foreground/10 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block text-base font-sans font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="https://calendly.com/mungeragency" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="default" className="w-full mt-4">Schedule a Call</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
