"use client";

import { motion, Variants } from "framer-motion";

export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionArticle = motion.article;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionH4 = motion.h4;
export const MotionH5 = motion.h5;
export const MotionP = motion.p;
export const MotionSpan = motion.span;
export const MotionMain = motion.main;

export const fadeInOut: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};
