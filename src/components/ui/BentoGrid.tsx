"use client";

import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  // bug fix
  const isClient = typeof window !== "undefined";

  if (!isClient) return null;
  return (
    <div
      // className={`${className}`}
      className={cn(
        "grid md:auto-rows-[9rem] grid-cols-1  md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};
