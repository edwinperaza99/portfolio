"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	Points,
	PointMaterial,
	PerspectiveCamera,
	OrbitControls,
} from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Galaxy() {
	const pointsRef = useRef<THREE.Points>(null);

	// Helper function for Gaussian distribution
	function randNormal(mean = 0, stdDev = 1) {
		// Box-Muller transform to generate a Gaussian distribution
		let u = 1 - Math.random(); // Subtracting to avoid taking log(0)
		let v = Math.random();
		return (
			mean +
			stdDev * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
		);
	}

	const particles = useMemo(() => {
		const count = 5000;
		const positions = new Float32Array(count * 3); // 5000 particles
		for (let i = 0; i < count; i++) {
			// Using our custom Gaussian distribution function
			const radius = Math.abs(randNormal(0, 2)) * 10; // Mean 0, std deviation 2
			const theta = Math.random() * 2 * Math.PI;

			// Z factor that varies based on radius (thicker in the center, flatter toward edges)
			const zFactor = 0.5 - radius * 0.05; // Higher in the center, lower on edges

			const x = radius * Math.cos(theta);
			const y = radius * Math.sin(theta);
			const z = (Math.random() * 2 - 1) * zFactor; // Vary Z to add thickness in the center

			positions.set([x, y, z], i * 3);
		}
		return positions;
	}, []);

	// Rotate the galaxy
	useFrame(() => {
		if (pointsRef.current) {
			pointsRef.current.rotation.z += 0.0005; // Adjust rotation speed if needed
		}
	});

	return (
		<Points
			ref={pointsRef}
			positions={particles}
			limit={5000}
			// rotation={[Math.PI / 2, 0, 0]}
		>
			<PointMaterial
				transparent
				color="#ffffff"
				size={0.05}
				sizeAttenuation={true}
				depthWrite={false}
			/>
		</Points>
	);
}

export default function Hero() {
	return (
		<section className="w-full h-full absolute inset-0">
			<Canvas className="w-full h-full">
				<PerspectiveCamera makeDefault position={[0, 0, 60]} fov={65} />
				<ambientLight intensity={0.2} />
				<pointLight position={[10, 10, 10]} />
				{/* Add OrbitControls to allow user interaction */}
				<OrbitControls enableZoom={true} enablePan={false} />
				<Galaxy />
			</Canvas>
		</section>
	);
}
