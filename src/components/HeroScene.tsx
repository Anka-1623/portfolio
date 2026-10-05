"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import type * as THREE from "three";

function CoreShape() {
  const groupRef = useRef<THREE.Group>(null);
  const reduce = useReducedMotion();

  useFrame((_, delta) => {
    if (reduce || !groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.x += delta * 0.045;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial color="#e8632f" wireframe transparent opacity={0.55} />
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
      camera={{ position: [0, 0, 7.4], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.75]}
    >
      <CoreShape />
    </Canvas>
  );
}
