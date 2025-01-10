"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { MotionSection, fadeInOut } from "@/components/motionUtils";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsSubmitting(true);

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		// Append required fields directly to FormData
		formData.append("access_key", "a0bf3342-5e88-4c1c-b20f-264ff55fc33a");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					Accept: "application/json",
				},
				body: formData,
			});

			const result = await response.json();

			if (result.success) {
				toast.success("Message sent successfully!");
				form.reset(); // Clear the form
			} else {
				toast.error("Failed to send message. Please try again.");
			}
		} catch (error) {
			toast.error("An error occurred. Please try again.");
			console.error(error);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<MotionSection
			variants={fadeInOut}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, amount: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="my-8"
		>
			<Toaster position="bottom-center" />

			<div className="flex justify-center items-center">
				<div className="bg-[#9e876f] h-1 w-full"></div>
				<h2 className="text-4xl px-2 text-white uppercase whitespace-nowrap">
					Contact
				</h2>
				<div className="bg-[#9e876f] h-1 w-full"></div>
			</div>

			<form
				onSubmit={handleSubmit}
				className="space-y-2 italic flex flex-col justify-center max-w-[700px] mx-auto pt-4 px-4"
			>
				<input type="hidden" name="subject" value="Contact Form Submission" />
				<input type="hidden" name="from_name" value="Portfolio Notifications" />

				<label htmlFor="botcheck" className="sr-only">
					Do not check this box
				</label>
				<input
					type="checkbox"
					name="botcheck"
					id="botcheck"
					className="hidden"
				/>

				<a
					href="mailto:edwin.peraza111@gmail.com"
					className="flex justify-center items-center g-4"
				>
					<IoIosMail />
					<h3 className="pl-2">edwin.peraza111@gmail.com</h3>
				</a>

				<div className="grid grid-cols-2 gap-6">
					<div className="space-y-1">
						<Label htmlFor="first_name">First Name</Label>
						<Input type="text" id="first_name" name="First Name" required />
					</div>
					<div className="space-y-1">
						<Label htmlFor="last_name">Last Name</Label>
						<Input type="text" id="last_name" name="Last Name" required />
					</div>
				</div>

				<div className="space-y-1">
					<Label htmlFor="email">Email</Label>
					<Input type="email" id="email" name="Email" required />
				</div>

				<div className="space-y-1">
					<Label htmlFor="message">Message</Label>
					<Textarea id="message" name="Message" required />
				</div>

				<div className="flex justify-end">
					<Button
						size="lg"
						variant="secondary"
						type="submit"
						disabled={isSubmitting}
					>
						{isSubmitting ? "Sending..." : "Send"}
					</Button>
				</div>
			</form>
			<div className="flex justify-center gap-6 mt-6">
				<Link
					className="row-span-2 place-items-center"
					href="https://www.linkedin.com/in/edwin-peraza/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src="/icons/GitHub.svg"
						alt="GitHub link"
						width={80}
						height={80}
						className="skill drop-shadow-3xl rounded-full p-4"
					/>
				</Link>
				<Link
					className="row-span-2"
					href="https://www.linkedin.com/in/edwin-peraza/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src="/icons/LinkedIn.svg"
						alt="LinkedIn link"
						width={80}
						height={80}
						className="skill drop-shadow-3xl rounded-full p-4"
					/>
				</Link>
			</div>
		</MotionSection>
	);
}
