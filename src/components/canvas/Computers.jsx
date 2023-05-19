import React, {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, meshBounds, useGLTF } from '@react-three/drei'

import Loader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <primitive 
      object={computer.scene}
      scale={0.75}
      position={[0, -3.75, -2.25]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return(
    <Canvas
      frameloop='demand'
      shadows
      camera={{position:[0,0,10], fov: 25}}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense>
        <OrbitControls enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Computers/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas