"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Lanyard from "./Lanyard/Lanyard"; // ini model/scene dari React Bits
import { Environment } from "@react-three/drei";

export default function LanyardScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 25 }}
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        {/* Light basic */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 3, 4]} intensity={1.2} />

        {/* Model */}
        <Lanyard />

        {/* Optional environment biar lebih hidup */}
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
