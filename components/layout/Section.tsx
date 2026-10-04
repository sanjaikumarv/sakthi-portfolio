import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({
  id,
  badge,
  title,
  subtitle,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28 relative scroll-mt-20", className)}
    >
      <div
        className={cn(
          "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
          containerClassName
        )}
      >
        <div className="mb-14 md:mb-18 text-center max-w-3xl mx-auto">
          {badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              {badge}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mt-6 opacity-80" />
        </div>

        {children}
      </div>
    </section>
  );
}
