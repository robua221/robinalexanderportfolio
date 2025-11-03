import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

function Particles({ count = 400 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3] = (Math.random() - 0.5) * 10;
      arr[i3 + 1] = (Math.random() - 0.5) * 5;
      arr[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.001;
    // gentle oscillation
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 6) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#8b5cf6" transparent opacity={0.9} sizeAttenuation />
    </points>
  );
}

export default function ThreeHero() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={0.6} />
        <mesh position={[0, -0.2, 0]}>
          <torusKnotGeometry args={[1.4, 0.45, 128, 16]} />
          <meshStandardMaterial color="#7C3AED" metalness={0.7} roughness={0.2} />
        </mesh>
        <Particles count={700} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </motion.div>
  );
}
