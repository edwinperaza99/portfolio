"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	Points,
	PointMaterial,
	PerspectiveCamera,
	OrbitControls,
} from "@react-three/drei";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

function Galaxy() {
	const pointsRef = useRef<THREE.Points>(null);

	// Helper function for Gaussian distribution
	function randNormal(mean = 0, stdDev = 1) {
		// Box-Muller transform to generate a Gaussian distribution
		const u = 1 - Math.random(); // Subtracting to avoid taking log(0)
		const v = Math.random();
		return (
			mean +
			stdDev * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
		);
	}

	const particles = useMemo(() => {
		const count = 50000;
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
			// limit={5000}
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
	const controlsRef = useRef<OrbitControlsImpl | null>(null);

	useEffect(() => {
		let frame = 0;
		const totalFrames = 500; // Adjusts the speed of the animation. Higher values make it slower.

		// Modify these parameters to change the animation behavior
		const startAzimuth = 0; // Starting horizontal rotation angle
		const endAzimuth = (-3 * Math.PI) / 4; // Ending horizontal rotation angle, e.g., Math.PI / 2 for a 90-degree turn
		const startPolar = 0; // Starting vertical angle (from above)
		const endPolar = (-1 * Math.PI) / 4; // Ending vertical angle, e.g., Math.PI / 4 for a lower side view
		const startDistance = 100; // Starting distance for zoom
		const endDistance = 40; // Ending distance for zoom-in

		const startAnimation = () => {
			if (controlsRef.current) {
				const animateOrbit = () => {
					if (controlsRef.current) {
						const progress = frame / totalFrames;

						// Animate azimuth and polar angles
						const azimuthalAngle = THREE.MathUtils.lerp(
							startAzimuth,
							endAzimuth,
							progress
						);
						const polarAngle = THREE.MathUtils.lerp(
							startPolar,
							endPolar,
							progress
						);

						// Animate distance for zoom effect
						const distance = THREE.MathUtils.lerp(
							startDistance,
							endDistance,
							progress
						);
						controlsRef.current.object.position.set(
							distance * Math.sin(polarAngle) * Math.cos(azimuthalAngle),
							distance * Math.sin(polarAngle) * Math.sin(azimuthalAngle),
							distance * Math.cos(polarAngle)
						);

						controlsRef.current.update();
						frame++;

						// Continue animation until totalFrames
						if (frame <= totalFrames) {
							requestAnimationFrame(animateOrbit);
						}
					}
				};

				// Start the animation
				animateOrbit();
			}
		};

		// Delay the animation start slightly to ensure controls are ready
		const animationTimeout = setTimeout(startAnimation, 100);
		return () => clearTimeout(animationTimeout); // Cleanup on unmount
	}, []);

	return (
		<section className="w-full h-full absolute inset-0">
			<Canvas className="w-full h-full">
				<PerspectiveCamera makeDefault position={[0, 0, 30]} fov={65} />
				<ambientLight intensity={0.2} />
				<pointLight position={[10, 10, 10]} />
				{/* Add OrbitControls to allow user interaction */}
				<OrbitControls
					ref={controlsRef}
					enableZoom={true}
					enablePan={false}
					minDistance={10}
					maxDistance={100}
				/>
				<Galaxy />
			</Canvas>
		</section>
	);
}
