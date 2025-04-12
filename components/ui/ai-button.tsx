import type React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { cva, type VariantProps } from "class-variance-authority"

const aiButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        glow: "ai-button-glow bg-primary text-primary-foreground hover:bg-primary/90",
        gradient: "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface AIButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof aiButtonVariants> {
  asChild?: boolean
  pulse?: boolean
}

export function AIButton({ className, variant, size, pulse = false, asChild = false, ...props }: AIButtonProps) {
  return <Button className={cn(aiButtonVariants({ variant, size }), pulse && "ai-pulse", className)} {...props} />
}
