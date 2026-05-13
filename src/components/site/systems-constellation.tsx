"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Sparkles, Sphere } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

import { cn } from "@/lib/utils";

const aiNodes = [
  { position: [-4.8, 1.75, -0.65], radius: 0.18, color: "#1f8ea3" },
  { position: [-4.15, 0.72, 0.28], radius: 0.28, color: "#4d7f48" },
  { position: [-3.85, -0.55, -0.18], radius: 0.2, color: "#7a6a2f" },
  { position: [-3.15, 1.35, 0.32], radius: 0.16, color: "#5f5fa8" },
  { position: [-2.72, 0.02, -0.52], radius: 0.31, color: "#256f91" },
  { position: [-2.45, -1.2, 0.2], radius: 0.22, color: "#7fb85b" },
  { position: [-1.75, 1.9, -0.28], radius: 0.27, color: "#6b6ab8" },
  { position: [-1.45, 0.76, 0.5], radius: 0.2, color: "#5b8f52" },
  { position: [-1.18, -0.35, -0.05], radius: 0.34, color: "#8a7a3a" },
  { position: [-0.58, -1.56, 0.42], radius: 0.17, color: "#3f8f52" },
  { position: [-0.18, 1.35, 0.18], radius: 0.2, color: "#3378b8" },
  { position: [0.2, 0.18, -0.48], radius: 0.38, color: "#9afb7e" },
  { position: [0.62, -0.92, 0.26], radius: 0.21, color: "#4f8d78" },
  { position: [1.08, 1.92, -0.2], radius: 0.16, color: "#2d8ca8" },
  { position: [1.34, 0.82, 0.52], radius: 0.3, color: "#6b63a8" },
  { position: [1.78, -0.2, -0.36], radius: 0.23, color: "#3b9a85" },
  { position: [2.05, -1.35, 0.16], radius: 0.25, color: "#4c8f4e" },
  { position: [2.62, 1.46, 0.24], radius: 0.2, color: "#8d833d" },
  { position: [2.88, 0.36, -0.52], radius: 0.28, color: "#237a95" },
  { position: [3.22, -0.82, 0.44], radius: 0.18, color: "#4f8d78" },
  { position: [3.75, 1.95, -0.22], radius: 0.23, color: "#6aa85f" },
  { position: [4.08, 0.92, 0.4], radius: 0.19, color: "#7d7438" },
  { position: [4.38, -0.14, -0.3], radius: 0.32, color: "#5b5ca3" },
  { position: [4.84, -1.18, 0.18], radius: 0.21, color: "#2a7897" },
  { position: [5.28, 1.15, -0.42], radius: 0.14, color: "#7fb85b" },
  { position: [5.54, -0.42, 0.36], radius: 0.18, color: "#4d7f48" },
] as const;

function AiNodeNetwork() {
  const groupRef = useRef<THREE.Group>(null);

  const connections = useMemo(() => {
    const vectors = aiNodes.map((node) => new THREE.Vector3(...node.position));
    const pairs: { points: [THREE.Vector3, THREE.Vector3]; color: string; opacity: number }[] = [];

    for (let from = 0; from < vectors.length; from += 1) {
      for (let to = from + 1; to < vectors.length; to += 1) {
        const distance = vectors[from].distanceTo(vectors[to]);

        if (distance < 1.75 || (distance < 2.25 && (from + to) % 4 === 0)) {
          pairs.push({
            points: [vectors[from], vectors[to]],
            color: aiNodes[from].color,
          opacity: distance < 1.75 ? 0.34 : 0.16,
          });
        }
      }
    }

    return pairs;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    const elapsed = state.clock.getElapsedTime();
    groupRef.current.rotation.y = elapsed * 0.045 + state.pointer.x * 0.1;
    groupRef.current.rotation.x = Math.sin(elapsed * 0.42) * 0.035 - state.pointer.y * 0.055;
    groupRef.current.position.y = Math.sin(elapsed * 0.35) * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, 0.02, 0]} rotation={[0.04, -0.08, -0.025]} scale={[1.18, 1.22, 1.08]}>
      <Sparkles count={120} scale={[12.8, 5.4, 3.4]} size={1.35} speed={0.25} opacity={0.2} color="#dfffe0" />

      {connections.map((connection, index) => (
        <Line
          key={`connection-${index}`}
          points={connection.points}
          color={connection.color}
          lineWidth={0.9}
          transparent
          opacity={connection.opacity}
        />
      ))}

      {aiNodes.map((node, index) => (
        <group key={`${node.color}-${index}`} position={node.position}>
          <Sphere args={[node.radius * 2.35, 32, 18]}>
            <meshBasicMaterial color={node.color} transparent opacity={0.04} depthWrite={false} />
          </Sphere>
          <Sphere args={[node.radius, 32, 18]}>
            <meshBasicMaterial color={node.color} wireframe transparent opacity={0.62} />
          </Sphere>
          <Sphere args={[node.radius * 0.34, 24, 16]}>
            <meshBasicMaterial color="#dfffe0" transparent opacity={0.74} />
          </Sphere>
        </group>
      ))}
    </group>
  );
}

function SceneFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-44 w-44 rounded-full border border-white/15 bg-white/5 shadow-[0_0_80px_rgba(154,251,126,0.2)]" />
    </div>
  );
}

type SystemsConstellationProps = {
  className?: string;
  framed?: boolean;
};

export function SystemsConstellation({ className, framed = true }: SystemsConstellationProps) {
  return (
    <div
      className={cn(
        "relative h-[280px] w-full overflow-hidden bg-[radial-gradient(circle_at_68%_38%,rgba(154,251,126,0.12),transparent_30%),radial-gradient(circle_at_80%_58%,rgba(34,211,238,0.09),transparent_32%),radial-gradient(circle_at_48%_46%,rgba(122,184,91,0.1),transparent_35%),linear-gradient(135deg,#050505,#080808_52%,#050505)] sm:h-[360px] md:h-[560px]",
        framed && "border-y border-white/10",
        className
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />
      <Suspense fallback={<SceneFallback />}>
        <Canvas camera={{ position: [0, 0, 8.2], fov: 50 }} dpr={[1, 1.65]} gl={{ antialias: true, alpha: true }}>
          <ambientLight intensity={0.42} />
          <pointLight position={[5, 3, 4]} intensity={1.25} color="#9afb7e" />
          <pointLight position={[-4, -2, 3]} intensity={0.95} color="#22d3ee" />
          <AiNodeNetwork />
        </Canvas>
      </Suspense>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
    </div>
  );
}
