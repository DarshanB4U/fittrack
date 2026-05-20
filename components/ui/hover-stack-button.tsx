import * as React from "react";
import { cn } from "@/lib/utils";

interface HoverStackButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const HoverStackButton = React.forwardRef<
  HTMLButtonElement,
  HoverStackButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <div className="relative inline-block p-3">
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex rounded-full overflow-visible cursor-pointer",
          className,
        )}
        {...props}
      >
        {/* Red Layer */}
        <span
          className="
            absolute inset-0 rounded-full
            bg-[#ff5a36]
            opacity-0
            border
            border-solid border-black
            transition-all duration-300
            group-hover:translate-x-3.5
            group-hover:translate-y-3.5
            group-hover:opacity-100
          "
        />

        {/* Yellow Layer */}
        <span
          className="
           border
            border-solid border-black
            absolute inset-0 rounded-full
            bg-[#e7ff1f]
            opacity-0
            transition-all duration-300 delay-75
            group-hover:translate-x-1.25
            group-hover:translate-y-1.25
            group-hover:opacity-100
          "
        />

        {/* Main Button */}
        <span
          className="
    relative z-10 flex items-center justify-center
    rounded-full
    bg-[#d986df]
    text-black
    px-8 py-4
    whitespace-nowrap
    transition-all duration-300
    group-hover:-translate-x-1
    group-hover:-translate-y-1
  "
        >
          {children}
        </span>
      </button>
    </div>
  );
});

HoverStackButton.displayName = "HoverStackButton";
