import React, {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, meshBounds, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight 
      position={[-20,20,10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
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
      camera={{position:[20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Computers/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas