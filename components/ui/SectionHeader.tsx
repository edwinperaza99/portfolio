"use client";
import React from "react";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { cn } from "@/lib/utils";

type SectionHeaderProps = React.HTMLAttributes<HTMLHeadingElement> & {
	text: string;
	/** Overrides for the encrypted/revealed styles if needed */
	encryptedClassName?: string;
	revealedClassName?: string;
	/** timing overrides (ms) forwarded to EncryptedText */
	flipDelayMs?: number;
	revealDelayMs?: number;
};

/**
 * Reusable section header that uses the EncryptedText animation and applies
 * the project's default header styles. This is intentionally a plain <h2>
 * (no motion) so the encrypted-text effect is the only animation.
 */
export default function SectionHeader({
	text,
	className,
	encryptedClassName,
	revealedClassName,
	flipDelayMs = 75,
	revealDelayMs = 75,
	...htmlProps
}: SectionHeaderProps) {
	// Defaults mirror the styles used in the About section previously.
	const defaultEncrypted =
		"text-4xl text-gray-500 uppercase font-bold tracking-tight";
	const defaultRevealed =
		"text-4xl md:text-5xl uppercase font-bold text-white tracking-tight";

	return (
		<h2 {...htmlProps} className={cn("px-4 py-4", className)}>
			<EncryptedText
				text={text}
				flipDelayMs={flipDelayMs}
				revealDelayMs={revealDelayMs}
				encryptedClassName={encryptedClassName ?? defaultEncrypted}
				revealedClassName={revealedClassName ?? defaultRevealed}
			/>
		</h2>
	);
}
