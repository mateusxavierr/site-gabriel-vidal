import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"
    
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:pointer-events-none disabled:opacity-50 font-label",
          {
            "gv-btn-primary bg-brand-gold text-brand-navy shadow-glow hover:scale-105 duration-300": variant === "primary",
            "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 duration-300": variant === "secondary",
            "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20": variant === "glass",
            "border border-slate-200 bg-transparent hover:bg-slate-100 text-slate-900": variant === "outline",
            "hover:bg-slate-100 hover:text-slate-900 text-slate-600": variant === "ghost",
            "h-10 px-4 py-2": size === "default",
            "h-9 px-3": size === "sm",
            "h-12 px-8 py-4": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref as any}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
