import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-navy-gradient">
    <Navbar />
    <main className="pt-16 sm:pt-20">
      {children}
    </main>
    <Footer />
  </div>
);

export default PageLayout;
