import * as React from "react";
import { cn } from "@/lib/utils";

export interface Button3DProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "sm" | "lg" | "icon";
}

const Button3D = React.forwardRef<HTMLButtonElement, Button3DProps>(
  ({ className, size = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 active:translate-y-[3px] active:shadow-none focus:outline-none cursor-pointer",

          // Sizes
          {
            "h-12 px-7 text-sm": size === "default",
            "h-10 px-5 text-xs": size === "sm",
            "h-14 px-9 text-base": size === "lg",
            "h-11 w-11": size === "icon",
          },

          className,
        )}
        {...props}
      >
        {/* Bottom Shadow Layer */}
        <span
          className="
            absolute inset-0 rounded-full
            bg-[#5b21b6]
            translate-y-[6px]
            transition-all duration-200
            group-active:translate-y-0
          "
        />

        {/* Glow */}
        <span
          className="
            absolute inset-0 rounded-full
            bg-primary/30 blur-xl
            opacity-70
          "
        />

        {/* Main Button */}
        <span
          className="
            relative z-10 flex items-center justify-center gap-2
            rounded-full
            bg-primary
            text-primary-foreground
            px-6 h-full w-full
            border border-white/10
            shadow-[0_10px_30px_rgba(117,44,242,0.35)]
            transition-all duration-200
            group-hover:-translate-y-1
            group-active:translate-y-0
          "
        >
          {children}
        </span>
      </button>
    );
  },
);

Button3D.displayName = "Button3D";

export { Button3D };
