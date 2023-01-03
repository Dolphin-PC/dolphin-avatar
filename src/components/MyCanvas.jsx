import React from 'react'
import ModelDancing from './Model-dancing'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const MyCanvas = () => {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        backgroundColor: '#111a21',
        width: '100vw',
        height: '100vh'
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <ModelDancing position={[0.025, -0.9, 0]} />
      <OrbitControls />
    </Canvas>
  )
}

export default MyCanvas