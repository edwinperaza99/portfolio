"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	Sphere,
	Points,
	PointMaterial,
	PerspectiveCamera,
	OrbitControls,
} from "@react-three/drei";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

function Galaxy({
	color = "#fffff",
	count = 10000,
}: {
	color?: string;
	count?: number;
}) {
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

	// Precompute particle positions
	const particles = useMemo(() => {
		const positions = new Float32Array(count * 3);
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
	}, [count]);

	// Rotate the galaxy
	useFrame((state, delta) => {
		// The `delta` parameter ensures consistent rotation speed across devices
		if (pointsRef.current) {
			pointsRef.current.rotation.z += 0.02 * delta; // Adjust speed multiplier here
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
				color={color}
				size={0.05}
				sizeAttenuation={true}
				depthWrite={true}
				opacity={0.9}
				// blending={THREE.AdditiveBlending}
			/>
		</Points>
	);
}

function NebulaSphere() {
	const texture = useMemo(() => {
		// Load the nebula texture
		return new THREE.TextureLoader().load("/textures/8k_stars_milky_way.jpg");
	}, []);

	const sphereRef = useRef<THREE.Mesh>(null);

	// Rotate the background nebula sphere
	useFrame((state, delta) => {
		// Use delta to ensure consistent rotation speed
		if (sphereRef.current) {
			sphereRef.current.rotation.y -= 0.01 * delta; // Adjust speed multiplier here
			sphereRef.current.rotation.x += 0.005 * delta;
		}
	});

	return (
		<Sphere ref={sphereRef} args={[50, 64, 64]} scale={[-1, 1, 1]}>
			<meshBasicMaterial map={texture} side={THREE.BackSide} />
		</Sphere>
	);
}

export default function Hero() {
	const controlsRef = useRef<OrbitControlsImpl | null>(null);

	useEffect(() => {
		// Animation parameters
		const startAzimuth = 0; // Starting horizontal rotation angle
		const endAzimuth = -Math.PI / 2.2; // Ending horizontal rotation angle, e.g., Math.PI / 2 for a 90-degree turn
		const startPolar = 0; // Starting vertical angle (from above)
		const endPolar = Math.PI / 2.3; // Ending vertical angle, e.g., Math.PI / 4 for a lower side view
		const startDistance = 40; // Starting distance for zoom
		const endDistance = 20; // Ending distance for zoom-in

		let elapsedTime = 0; // Tracks elapsed time for smooth animation
		const totalDuration = 5; // Animation duration in seconds (Adjust this for faster/slower animations)

		// Camera animation logic
		const startAnimation = (delta: number) => {
			if (controlsRef.current) {
				elapsedTime += delta;

				const progress = Math.min(elapsedTime / totalDuration, 1); // Clamp progress to 1

				// Interpolate azimuthal and polar angles
				const azimuthalAngle = THREE.MathUtils.lerp(
					startAzimuth,
					endAzimuth,
					progress
				);
				const polarAngle = THREE.MathUtils.lerp(startPolar, endPolar, progress);

				// Interpolate distance for zoom effect
				const distance = THREE.MathUtils.lerp(
					startDistance,
					endDistance,
					progress
				);

				// Update camera position
				controlsRef.current.object.position.set(
					distance * Math.sin(polarAngle) * Math.cos(azimuthalAngle),
					distance * Math.sin(polarAngle) * Math.sin(azimuthalAngle),
					distance * Math.cos(polarAngle)
				);

				// Update controls
				controlsRef.current.update();

				// Continue animation until completed
				if (progress < 1) {
					requestAnimationFrame(() => startAnimation(delta));
				}
			}
		};

		// Start the animation after a delay
		const animationTimeout = setTimeout(() => {
			requestAnimationFrame(() => startAnimation(0.016)); // Assume 60 FPS initially
		}, 100);

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
					maxDistance={40}
				/>
				<NebulaSphere />
				<Galaxy color="#FF0000" count={1000} />
				<Galaxy color="#ffffff" count={40000} />
				<Galaxy color="#0a47ff" count={20000} />
			</Canvas>
		</section>
	);
}
