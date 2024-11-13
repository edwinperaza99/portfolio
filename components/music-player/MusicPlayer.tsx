"use client";

import { Play, SkipBack, SkipForward } from "lucide-react";

export default function MusicPlayer() {
	return (
		<div className="bg-slate-600 rounded-2xl mx-auto grid grid-cols-[1fr_2fr] gap-2 md:gap-4 shadow-lg w-full max-w-3xl p-2 md:p-4">
			<aside className="aspect-square rounded-2xl overflow-hidden shadow-md">
				<img
					src="https://cdns-images.dzcdn.net/images/cover/8e29e68122d1b019e7be72c0a920744a/0x1900-000000-80-0-0.jpg"
					alt="Album Cover"
					className="w-full h-full object-cover"
				/>
			</aside>
			<aside className="flex flex-col justify-around overflow-hidden">
				<div id="song-info" className="overflow-hidden">
					<h2 className="text-white text-xl md:text-3xl font-semibold truncate">
						Quevedo: Bzrp Music Sessions, Vol. 41
					</h2>
					<p className="text-gray-400 md:text-lg truncate whitespace-nowrap overflow-hidden">
						Bizzarap, Quevedo
					</p>
				</div>
				<div className="flex justify-center items-center gap-6">
					<button aria-label="Skip back">
						<SkipBack
							className="w-6 h-6 md:w-8 md:h-8 text-white"
							fill="white"
						/>
					</button>
					<button aria-label="Play or Pause">
						<Play className="w-8 h-8 md:w-10 md:h-10 text-white" fill="white" />
					</button>
					<button aria-label="Skip Forward">
						<SkipForward
							className="w-6 h-6 md:w-8 md:h-8 text-white hover:text-gray-300"
							fill="white"
						/>
					</button>
				</div>
			</aside>
		</div>
	);
}
