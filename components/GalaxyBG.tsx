"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

interface MovingSpheresProps {
	count?: number;
	speed?: number;
	direction:
		| "bottom-to-top"
		| "left-to-right"
		| "right-to-left"
		| "top-to-bottom";
	colors: string[]; // Array of colors for spheres
	size?: number; // Sphere size
}

function MovingSpheres({
	count = 10000,
	speed = 0.5,
	direction = "bottom-to-top",
	colors = ["#ffffff", "#ff007f", "#0a47ff"],
	size = 0.005,
}: MovingSpheresProps) {
	const spheresRef = useRef<THREE.Group>(null);

	// Generate sphere positions
	const spheres = useMemo(() => {
		const positions = [];
		for (let i = 0; i < count; i++) {
			positions.push([
				THREE.MathUtils.randFloatSpread(10), // X
				THREE.MathUtils.randFloatSpread(10), // Y
				THREE.MathUtils.randFloatSpread(10), // Z
			]);
		}
		return positions;
	}, [count]);

	// Update sphere positions
	useFrame(() => {
		if (spheresRef.current) {
			spheresRef.current.children.forEach((child) => {
				const mesh = child as THREE.Mesh;
				const position = mesh.position;

				// Update position based on direction
				switch (direction) {
					case "bottom-to-top":
						position.y += speed * 0.01;
						if (position.y > 5) position.y = -5; // Reset position
						break;
					case "top-to-bottom":
						position.y -= speed * 0.01;
						if (position.y < -5) position.y = 5; // Reset position
						break;
					case "left-to-right":
						position.x += speed * 0.01;
						if (position.x > 5) position.x = -5; // Reset position
						break;
					case "right-to-left":
						position.x -= speed * 0.01;
						if (position.x < -5) position.x = 5; // Reset position
						break;
				}
			});
		}
	});

	return (
		<group ref={spheresRef}>
			{spheres.map((position, index) => (
				<Sphere
					key={index}
					args={[size, 16, 16]} // Smaller size spheres
					position={position as [number, number, number]}
				>
					<meshBasicMaterial color={colors[index % colors.length]} />
				</Sphere>
			))}
		</group>
	);
}

export default function GalaxyBackground({
	direction = "bottom-to-top",
}: {
	direction:
		| "bottom-to-top"
		| "left-to-right"
		| "right-to-left"
		| "top-to-bottom";
}) {
	return (
		<div className="absolute inset-0 -z-10">
			<Canvas>
				<ambientLight intensity={0.5} />
				{/* Pass multiple colors */}
				<MovingSpheres
					count={700}
					speed={0.5}
					direction={direction}
					colors={["#ffffff", "#ff007f", "#0a47ff"]} // Customize colors
					size={0.005} // Smaller spheres
				/>
			</Canvas>
		</div>
	);
}
