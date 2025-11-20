import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

export function FluidBackground() {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime();
            meshRef.current.rotation.x = t * 0.2;
            meshRef.current.rotation.y = t * 0.3;
        }
    });

    return (
        <>
            <color attach="background" args={['#050505']} />
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#ff0000" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#ff0000" />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sphere args={[1, 100, 200]} scale={2.5} ref={meshRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
                    <MeshDistortMaterial
                        color={hovered ? "#ff3333" : "#1a1a1a"}
                        attach="material"
                        distort={0.6}
                        speed={2}
                        roughness={0.2}
                        metalness={0.9}
                    />
                </Sphere>
            </Float>

            <fog attach="fog" args={['#050505', 5, 15]} />
        </>
    );
}

// Exporting as TechBackground to maintain compatibility with existing imports for now
export { FluidBackground as TechBackground };
export { FluidBackground as ParticleBackground };
