import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className, hover = true }: GlassCardProps) => (
  <div className={cn("glass-card p-6 sm:p-8", !hover && "hover:transform-none hover:shadow-none", className)}>
    {children}
  </div>
);

export default GlassCard;
