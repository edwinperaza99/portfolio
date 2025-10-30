"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IoIosMail } from "react-icons/io";
import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import {
	MotionDiv,
	MotionH2,
	slideInFromLeft,
	slideInFromRight,
} from "@/components/motionUtils";
import Link from "next/link";

export default function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const emailAddress = "edwin.peraza111@gmail.com";

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsSubmitting(true);

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				body: formData,
			});

			const result = await response.json();

			if (result.success) {
				toast.success("Message sent successfully!");
				form.reset();
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
		<>
			<div className="border-b border-white/20">
				<div className="container border-x border-white/20 px-4 py-4">
					<MotionH2
						variants={slideInFromLeft}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="text-4xl md:text-5xl uppercase font-bold text-white tracking-tight"
					>
						Contact
					</MotionH2>
				</div>
			</div>

			<section className="container border-x border-white/20 px-4 py-4 text-primary-light">
				<Toaster position="bottom-center" />
				<div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
					<div className="grid auto-rows-[minmax(120px,auto)] gap-3 md:auto-rows-[minmax(160px,auto)] md:grid-cols-12 md:gap-4">
						<MotionDiv
							variants={slideInFromLeft}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 transition-colors duration-300 hover:bg-white/10 md:col-span-6 lg:col-span-6"
						>
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/10 opacity-0 transition group-hover:opacity-100" />
							<div className="flex h-full flex-col md:flex-row">
								<div className="hidden w-12 items-center justify-center border-r border-white/10 md:flex">
									<span className="-rotate-90 text-xs uppercase tracking-[0.5em] text-white/40">
										GitHub
									</span>
								</div>
								<Link
									href="https://github.com/edwinperaza99"
									title="github.com/edwinperaza99"
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-1 items-center justify-between gap-3 px-4 py-4 text-white transition-colors duration-300 md:gap-4 md:px-6 md:py-8"
								>
									<span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl transition-all duration-300 group-hover:scale-105 group-hover:bg-white/20 md:h-14 md:w-14">
										<FiGithub />
									</span>
									<div className="flex min-w-0 flex-1 flex-col">
										<span className="truncate text-lg font-semibold text-white">
											@edwinperaza99
										</span>
										<span className="text-xs uppercase tracking-[0.35em] text-white/40 md:hidden">
											GitHub
										</span>
									</div>
									<FiArrowUpRight className="flex-none text-white/50 transition-colors duration-300 group-hover:text-white" />
								</Link>
							</div>
						</MotionDiv>

						<MotionDiv
							variants={slideInFromRight}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 transition-colors duration-300 hover:bg-white/10 md:col-span-6 lg:col-span-6"
						>
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/10 opacity-0 transition group-hover:opacity-100" />
							<div className="flex h-full flex-col md:flex-row">
								<div className="hidden w-12 items-center justify-center border-r border-white/10 md:flex">
									<span className="-rotate-90 text-xs uppercase tracking-[0.5em] text-white/40">
										LinkedIn
									</span>
								</div>
								<Link
									href="https://www.linkedin.com/in/edwin-peraza/"
									title="linkedin.com/in/edwin-peraza"
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-1 items-center justify-between gap-3 px-4 py-4 text-white transition-colors duration-300 md:gap-4 md:px-6 md:py-8"
								>
									<span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl transition-all duration-300 group-hover:scale-105 group-hover:bg-white/20 md:h-14 md:w-14">
										<FiLinkedin />
									</span>
									<div className="flex min-w-0 flex-1 flex-col">
										<span className="truncate text-lg font-semibold text-white">
											@edwin-peraza
										</span>
										<span className="text-xs uppercase tracking-[0.35em] text-white/40 md:hidden">
											LinkedIn
										</span>
									</div>
									<FiArrowUpRight className="flex-none text-white/50 transition-colors duration-300 group-hover:text-white" />
								</Link>
							</div>
						</MotionDiv>

						<MotionDiv
							variants={slideInFromLeft}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
							className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 transition-colors duration-300 hover:bg-white/10 md:col-span-3 lg:col-span-2"
						>
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/10 opacity-0 transition group-hover:opacity-100" />
							<div className="flex h-full flex-col md:flex-row">
								<div className="hidden w-12 items-center justify-center border-r border-white/10 md:flex">
									<span className="-rotate-90 text-xs uppercase tracking-[0.5em] text-white/40">
										Email
									</span>
								</div>
								<Link
									href={`mailto:${emailAddress}`}
									title="Email Edwin"
									className="flex flex-1 items-center justify-between gap-3 px-4 py-4 text-white transition-colors duration-300 md:flex-col md:items-center md:gap-6 md:px-6 md:py-8"
								>
									<span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl transition-all duration-300 group-hover:scale-105 group-hover:bg-white/20 md:h-14 md:w-14">
										<IoIosMail />
									</span>
									<div className="flex min-w-0 flex-1 flex-col md:flex-1 md:items-center md:justify-center md:text-center">
										<span className="text-lg font-semibold text-white md:hidden break-words leading-tight">
											{emailAddress}
										</span>
										<span className="text-xs uppercase tracking-[0.35em] text-white/40 md:hidden">
											Email
										</span>
										<span className="hidden text-base font-semibold tracking-[0.2em] md:block [text-orientation:mixed] [writing-mode:vertical-lr] [transform:rotate(180deg)]">
											{emailAddress}
										</span>
									</div>
									<FiArrowUpRight className="flex-none text-white/50 transition-colors duration-300 group-hover:text-white md:mt-auto" />
								</Link>
							</div>
						</MotionDiv>

						<MotionDiv
							variants={slideInFromRight}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
							className="md:col-span-9 lg:col-span-10 rounded-3xl border border-white/20 bg-white/5 p-6 transition-colors duration-300 focus-within:border-white/40 focus-within:bg-white/10 backdrop-blur-sm md:p-8"
						>
							<form onSubmit={handleSubmit} className="space-y-5">
								<input
									type="hidden"
									name="subject"
									value="Contact Form Submission"
								/>
								<input
									type="hidden"
									name="from_name"
									value="Portfolio Notifications"
								/>

								<label htmlFor="botcheck" className="sr-only">
									Do not check this box
								</label>
								<input
									type="checkbox"
									name="botcheck"
									id="botcheck"
									className="hidden"
								/>

								<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
									<div className="space-y-2">
										<Label htmlFor="first_name">First Name</Label>
										<Input
											type="text"
											id="first_name"
											name="First Name"
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="last_name">Last Name</Label>
										<Input
											type="text"
											id="last_name"
											name="Last Name"
											required
										/>
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input type="email" id="email" name="Email" required />
								</div>

								<div className="space-y-2">
									<Label htmlFor="message">Message</Label>
									<Textarea
										id="message"
										name="Message"
										required
										className="min-h-[160px]"
									/>
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
						</MotionDiv>
					</div>
				</div>
			</section>
		</>
	);
}
