"use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

export default function MusicPlayer() {
	return (
		<div className="bg-slate-600 rounded-2xl w-fit">
			<div className="flex flex-row md:flex-col justify-center items-center">
				<div
					className="w-40 h-40 rounded-2xl overflow-hidden"
					id="song-thumbnail"
				>
					<img
						src="https://cdns-images.dzcdn.net/images/cover/8e29e68122d1b019e7be72c0a920744a/0x1900-000000-80-0-0.jpg"
						alt="Album Cover"
						className="w-full h-full object-cover rounded p-4"
					/>
				</div>
				<div id="">
					<div className="truncate p-4 overflow-hidden">
						<h2 className="text-2xl truncate">Can&apos;t Stop</h2>
						<p className="text-gray-300 truncate">Red Hot Chili Peppers</p>
					</div>
				</div>
			</div>
			<div id="player-controls" className="flex justify-around p-4">
				<button aria-label="Skip back">
					<SkipBack stroke="white" fill="white" />
				</button>
				<button aria-label="Play or Pause" className="rounded-full bg-white">
					<Play fill="black" stroke="transparent" />
				</button>
				<button aria-label="Skip Forward">
					<SkipForward fill="white" />
				</button>
			</div>
		</div>
	);
}
