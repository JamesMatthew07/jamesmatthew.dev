"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Sphere } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

import { cn } from "@/lib/utils";

const layers = [
  { y: 0.9, radius: 1.1, color: "#9afb7e", speed: 0.28 },
  { y: 0.3, radius: 1.35, color: "#2d8ca8", speed: -0.22 },
  { y: -0.3, radius: 1.05, color: "#4d7f48", speed: 0.18 },
  { y: -0.9, radius: 1.28, color: "#6b63a8", speed: -0.16 },
] as const;

const nodeAngles = [0, Math.PI * 0.62, Math.PI * 1.28] as const;

function StackOrbitMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const layerRefs = useRef<Array<THREE.Group | null>>([]);

  const spine = useMemo(
    () => [new THREE.Vector3(0, -1.22, 0), new THREE.Vector3(0, 1.22, 0)],
    []
  );

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = elapsed * 0.18 + state.pointer.x * 0.18;
      groupRef.current.rotation.x = -0.22 - state.pointer.y * 0.08;
    }

    layerRefs.current.forEach((layer, index) => {
      if (layer) {
        layer.rotation.z = elapsed * layers[index].speed + index * 0.55;
      }
    });
  });

  return (
    <group ref={groupRef} scale={1.08}>
      <Line points={spine} color="#dfffe0" lineWidth={1} transparent opacity={0.34} />

      <Sphere args={[0.28, 32, 18]}>
        <meshBasicMaterial color="#9afb7e" wireframe transparent opacity={0.52} />
      </Sphere>
      <Sphere args={[0.085, 24, 16]}>
        <meshBasicMaterial color="#dfffe0" transparent opacity={0.82} />
      </Sphere>

      {layers.map((layer, index) => (
        <group
          key={`${layer.color}-${layer.y}`}
          ref={(element) => {
            layerRefs.current[index] = element;
          }}
          position={[0, layer.y, 0]}
          rotation={[Math.PI / 2, 0, index * 0.55]}
        >
          <mesh>
            <torusGeometry args={[layer.radius, 0.008, 8, 120]} />
            <meshBasicMaterial color={layer.color} transparent opacity={0.5} />
          </mesh>
          <mesh>
            <ringGeometry args={[layer.radius * 0.72, layer.radius * 0.725, 96]} />
            <meshBasicMaterial color={layer.color} transparent opacity={0.14} side={THREE.DoubleSide} />
          </mesh>

          {nodeAngles.map((angle, nodeIndex) => (
            <group
              key={`${layer.color}-${angle}`}
              position={[
                Math.cos(angle + index * 0.38) * layer.radius,
                Math.sin(angle + index * 0.38) * layer.radius,
                0,
              ]}
            >
              <Sphere args={[nodeIndex === 0 ? 0.075 : 0.055, 20, 14]}>
                <meshBasicMaterial color={layer.color} transparent opacity={0.78} />
              </Sphere>
              <Sphere args={[nodeIndex === 0 ? 0.16 : 0.12, 20, 14]}>
                <meshBasicMaterial color={layer.color} transparent opacity={0.08} depthWrite={false} />
              </Sphere>
            </group>
          ))}
        </group>
      ))}
    </group>
  );
}

function OrbitFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="size-36 rounded-full border border-lime-200/20 bg-lime-200/5 shadow-[0_0_70px_rgba(154,251,126,0.14)]" />
    </div>
  );
}

type StackOrbitProps = {
  className?: string;
};

export function StackOrbit({ className }: StackOrbitProps) {
  return (
    <div className={cn("relative h-full min-h-[340px] w-full", className)} aria-hidden="true">
      <Suspense fallback={<OrbitFallback />}>
        <Canvas camera={{ position: [0, 0.2, 5.2], fov: 42 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[3, 2, 4]} intensity={1.35} color="#9afb7e" />
          <pointLight position={[-3, -2, 3]} intensity={0.85} color="#2d8ca8" />
          <StackOrbitMesh />
        </Canvas>
      </Suspense>
    </div>
  );
}
