"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation, Autoplay, Pagination } from "swiper/modules";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

export default function SwiperGallery({
	images,
}: {
	images: StaticImageData[];
}) {
	return (
		<Gallery>
			<div className="max-w-4xl mx-auto">
				<Swiper
					loop={true}
					spaceBetween={10}
					centeredSlides={true}
					// navigation={true}
					autoplay={{
						delay: 8000,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					modules={[FreeMode, Navigation, Autoplay, Pagination]}
					className="mb-3 mySwiper"
				>
					{/* Swiper Slides */}
					{images.map((image, index) => (
						<SwiperSlide key={index}>
							<Item
								original={image.src}
								thumbnail={image.src}
								width={image.width}
								height={image.height}
							>
								{({ ref, open }) => (
									<Image
										ref={ref as React.LegacyRef<HTMLImageElement>}
										onClick={open}
										src={image}
										alt={`Image ${index}`}
										width={image.width}
										height={image.height}
										className="cursor-pointer max-h-96 w-auto mx-auto object-contain"
										placeholder="blur"
									/>
								)}
							</Item>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</Gallery>
	);
}
