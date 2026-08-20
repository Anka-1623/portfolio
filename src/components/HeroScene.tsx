"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function createParticlePositions(count: number) {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const radius = 3.2 + Math.random() * 2.4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = radius * Math.cos(phi);
  }
  return arr;
}

const PARTICLE_POSITIONS = createParticlePositions(420);

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = PARTICLE_POSITIONS;

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.035;
    pointsRef.current.rotation.x = state.pointer.y * 0.15;
    pointsRef.current.rotation.z = state.pointer.x * -0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#f4f3f0"
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}

function CoreShape() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.x += delta * 0.045;
    const targetX = state.pointer.y * 0.25;
    const targetY = state.pointer.x * 0.35;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      groupRef.current.rotation.x + targetX * 0.02,
      0.02
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      groupRef.current.rotation.y + targetY * 0.02,
      0.02
    );
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial color="#ff5a1f" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh scale={0.62}>
        <icosahedronGeometry args={[1.7, 0]} />
        <meshBasicMaterial color="#f4f3f0" wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.75]}
    >
      <CoreShape />
      <ParticleField />
    </Canvas>
  );
}
