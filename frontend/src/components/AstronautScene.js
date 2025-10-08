import { Model } from './Astronaut'
import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'

const AstronautScene = () => {
    return (
        <Canvas camera={{ position: [-0.5, 1, 4], zoom: 2 }}>
            <OrbitControls />
            <ambientLight />
            <directionalLight
                position={[ -5, 5, 5]}
            />
            <group position={[ 0, -1.5, 0]}>
                <Model />
            </group>
        </Canvas>
    );
}

export default AstronautScene