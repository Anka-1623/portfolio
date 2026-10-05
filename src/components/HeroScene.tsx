"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion, type MotionValue } from "framer-motion";
import type * as THREE from "three";

// Scroll progress (0 to 1) turns and grows the shape, so leaving the hero is
// something you feel in the object, not only in the layout.
function CoreShape({ progress }: { progress: MotionValue<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const reduce = useReducedMotion();

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;
    const p = progress.get();
    if (!reduce) {
      group.rotation.y += delta * 0.12;
      group.rotation.x += delta * 0.045;
    }
    group.rotation.z = p * Math.PI * 0.7;
    group.scale.setScalar(1 + p * 0.4);
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial color="#e8632f" wireframe transparent opacity={0.6} />
      </mesh>
      <mesh scale={0.62}>
        <icosahedronGeometry args={[1.7, 0]} />
        <meshBasicMaterial color="#f1f1ee" wireframe transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

export default function HeroScene({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.4], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.75]}
    >
      <CoreShape progress={progress} />
    </Canvas>
  );
}
