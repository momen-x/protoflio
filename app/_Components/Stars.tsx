"use client";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Points as PointsType } from "three";

const Stars = () => {
  const ref = useRef<PointsType>(null);
  
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  // Generate 6000 stars spread in a sphere radius of 2
  const sphere = random.inSphere(new Float32Array(6000), { radius: 2 });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* SIZE FIX: Points material with much smaller size */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial 
          transparent 
          color="#f272c8" 
          size={0.003} // Reduced from 0.02 to 0.003 for tiny stars
          sizeAttenuation={true} 
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    // FIXED: h-full instead of h-auto, added pointer-events-none
    <div className="w-full h-full fixed inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;