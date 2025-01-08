"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	Sphere,
	Points,
	PointMaterial,
	PerspectiveCamera,
	OrbitControls,
} from "@react-three/drei";
import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { MotionSection } from "@/components/MotionTags";

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
		return new THREE.TextureLoader().load("/textures/8k_stars_milky_way.webp");
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
	const [userActive, setUserActive] = useState(false);
	const [isInitialAnimation, setIsInitialAnimation] = useState(true); // Track the initial animation
	const previousTargetRef = useRef<{
		azimuth: number;
		polar: number;
		distance: number;
	} | null>(null); // Track the last target to avoid repeats

	// Use a ref for preset positions to avoid dependency issues
	const presetPositionsRef = useRef([
		{ azimuth: -Math.PI / 2.2, polar: Math.PI / 2.3, distance: 20 }, // good initial
		{ azimuth: Math.PI / 2, polar: Math.PI / 2, distance: 30 }, // good diagonal
		{ azimuth: Math.PI / 2, polar: -Math.PI / 2, distance: 20 }, // good diagonal inverted
		{ azimuth: 0, polar: Math.PI / 2, distance: 40 }, // vertical
		{ azimuth: 0, polar: 0, distance: 40 }, // top view
		{ azimuth: -Math.PI / 2, polar: Math.PI / 2, distance: 30 },
	]);

	useEffect(() => {
		// Initial animation target
		const initialTarget = {
			azimuth: -Math.PI / 2.2,
			polar: Math.PI / 2.3,
			distance: 20,
		};
		let currentTarget = { ...initialTarget };

		// Function to generate random target coordinates
		const generateRandomTarget = () => {
			const azimuth = Math.random() * 2 * Math.PI; // Random azimuthal angle
			const polar = Math.random() * (Math.PI / 2); // Random polar angle
			const distance = 20 + Math.random() * 20; // Random distance (20-40)
			return { azimuth, polar, distance };
		};

		// Function to get the next target
		const getNextTarget = () => {
			// Combine presets and random positions
			const allPositions = [
				...presetPositionsRef.current,
				generateRandomTarget(),
			];
			// Filter out the previous target to avoid repeats
			const validPositions = allPositions.filter(
				(pos) =>
					!previousTargetRef.current ||
					pos.azimuth !== previousTargetRef.current.azimuth ||
					pos.polar !== previousTargetRef.current.polar ||
					pos.distance !== previousTargetRef.current.distance
			);
			// Select a random valid target
			return validPositions[Math.floor(Math.random() * validPositions.length)];
		};

		// Smooth animation logic
		const startAnimation = (
			delta: number,
			target?: { azimuth: number; polar: number; distance: number }
		) => {
			if (controlsRef.current) {
				let elapsedTime = 0;
				const totalDuration = 2; // Duration in seconds (adjust here for animation speed)
				const animationTarget = target || getNextTarget();
				const start = { ...currentTarget };

				const animate = () => {
					elapsedTime += delta;
					const progress = Math.min(elapsedTime / totalDuration, 1);

					// Interpolate target values
					currentTarget.azimuth = THREE.MathUtils.lerp(
						start.azimuth,
						animationTarget.azimuth,
						progress
					);
					currentTarget.polar = THREE.MathUtils.lerp(
						start.polar,
						animationTarget.polar,
						progress
					);
					currentTarget.distance = THREE.MathUtils.lerp(
						start.distance,
						animationTarget.distance,
						progress
					);

					// Calculate new camera position
					const { azimuth, polar, distance } = currentTarget;
					if (controlsRef.current) {
						controlsRef.current.object.position.set(
							distance * Math.sin(polar) * Math.cos(azimuth),
							distance * Math.sin(polar) * Math.sin(azimuth),
							distance * Math.cos(polar)
						);

						controlsRef.current.update();
					}

					if (progress < 1) {
						requestAnimationFrame(animate);
					} else {
						// Update current target after animation finishes
						currentTarget = { ...animationTarget };
						previousTargetRef.current = animationTarget; // Track last target
					}
				};

				requestAnimationFrame(animate);
			}
		};

		// Track user interaction
		let idleTimeout: NodeJS.Timeout;
		const resetIdleTimer = () => {
			clearTimeout(idleTimeout);
			setUserActive(true);
			idleTimeout = setTimeout(() => setUserActive(false), 5000); // Idle timeout (adjust here for idle detection)
		};

		window.addEventListener("mousemove", resetIdleTimer);
		window.addEventListener("touchstart", resetIdleTimer);

		// Periodic animation
		let animationTimeout: NodeJS.Timeout;
		const startIdleAnimation = () => {
			if (!userActive) {
				if (isInitialAnimation) {
					// Perform initial animation with shorter delay
					startAnimation(0.016, initialTarget);
					setIsInitialAnimation(false);
					animationTimeout = setTimeout(startIdleAnimation, 7000); // Switch to longer delay
				} else {
					// Perform random/preset animation with 7-second delay
					startAnimation(0.016);
					animationTimeout = setTimeout(startIdleAnimation, 10000);
				}
			}
		};

		// Trigger first animation with shorter delay
		animationTimeout = setTimeout(startIdleAnimation, 2000); // Initial shorter delay

		return () => {
			clearTimeout(idleTimeout);
			clearTimeout(animationTimeout);
			window.removeEventListener("mousemove", resetIdleTimer);
			window.removeEventListener("touchstart", resetIdleTimer);
		};
	}, [userActive, isInitialAnimation]);

	return (
		<MotionSection
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="w-full h-full absolute inset-0"
		>
			<Canvas className="w-full h-full">
				<PerspectiveCamera
					makeDefault
					position={[
						20 * Math.sin(Math.PI / 2.3) * Math.cos(-Math.PI / 2.2), // X
						20 * Math.sin(Math.PI / 2.3) * Math.sin(-Math.PI / 2.2), // Y
						20 * Math.cos(Math.PI / 2.3), // Z
					]}
					fov={65}
				/>

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
		</MotionSection>
	);
}
