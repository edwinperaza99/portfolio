"use client";

import { Play, SkipBack, SkipForward } from "lucide-react";

export default function MusicPlayer() {
	return (
		<div className="bg-slate-600 rounded-2xl mx-auto flex flex-col items-center shadow-lg p-6 w-full max-w-5xl">
			<div className="flex items-center gap-4">
				<div className="w-1/3 aspect-square rounded-2xl overflow-hidden shadow-md">
					<img
						src="https://cdns-images.dzcdn.net/images/cover/8e29e68122d1b019e7be72c0a920744a/0x1900-000000-80-0-0.jpg"
						alt="Album Cover"
						className="w-full h-full object-cover"
					/>
				</div>
				<div id="song-info" className="text-start">
					<h2 className="text-white text-lg font-semibold truncate">
						Can&apos;t Stop
					</h2>
					<p className="text-gray-400 text-sm truncate">
						Red Hot Chili Peppers
					</p>
				</div>
			</div>
			<div className="flex justify-center items-center gap-6 mt-6">
				<button aria-label="Skip back">
					<SkipBack className="w-6 h-6 text-white" fill="white" />
				</button>
				<button aria-label="Play or Pause" className="">
					<Play className="w-8 h-8" fill="white" />
				</button>
				<button aria-label="Skip Forward">
					<SkipForward className="w-6 h-6 text-white" fill="white" />
				</button>
			</div>
		</div>
	);
}
