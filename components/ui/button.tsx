import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				ctaSolid:
					"rounded-full px-7 py-3 text-sm font-semibold tracking-[0.25em] uppercase bg-white text-slate-900 shadow-[0_15px_40px_-20px_rgba(15,23,42,0.8)] hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.9)] hover:-translate-y-0.5 transition-all duration-300 ease-out",
				ctaOutline:
					"rounded-full px-7 py-3 text-sm font-semibold tracking-[0.25em] uppercase border border-white/30 text-white hover:text-teal-200 hover:border-teal-200/60 bg-white/0 hover:bg-white/5 backdrop-blur-xl transition-all duration-300 ease-out",
				heroPrimary:
					"rounded-full px-6 sm:px-7 py-3 text-base font-semibold tracking-tight bg-white text-slate-900 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.85)] hover:bg-white/90 hover:shadow-[0_28px_60px_-30px_rgba(15,23,42,0.85)] transition-all duration-300 ease-out",
				heroSecondary:
					"rounded-full px-6 sm:px-7 py-3 text-base font-semibold tracking-tight border border-white/35 text-white hover:text-teal-200 hover:border-teal-200/60 bg-white/5 hover:bg-white/10 shadow-[0_10px_30px_-25px_rgba(13,148,136,0.6)] hover:shadow-[0_18px_40px_-30px_rgba(13,148,136,0.75)] backdrop-blur-xl transition-all duration-300 ease-out",
				default:
					"bg-primary text-primary-foreground shadow hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				outline:
					"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
				gradient:
					"bg-gradient-to-br hover:bg-gradient-to-b from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 shadow-md transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105 backdrop-filter backdrop-blur-lg",
				secondaryGradient:
					"bg-gradient-to-br hover:bg-gradient-to-b from-purple-500 to-indigo-700 text-white hover:from-purple-600 hover:to-indigo-800 shadow-md transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105 backdrop-filter backdrop-blur-lg",

				redGradient:
					"bg-gradient-to-br hover:bg-gradient-to-b from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 backdrop-filter backdrop-blur-lg",
			},
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-10 rounded-md px-8",
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
