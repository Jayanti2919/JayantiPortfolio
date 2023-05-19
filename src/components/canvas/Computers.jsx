import React, {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, meshBounds, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {
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
      scale={isMobile ? 0.6:0.75}
      position={isMobile? [0, -3, -2.15] : [0, -3.75, -1.5]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false)
  
  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width:500px)');
  
    setisMobile(mediaQuery.matches);
    const handleMediaChange = (event)=>{
      setisMobile(event.matches)
    }
    mediaQuery.addEventListener('change', handleMediaChange);
    return ()=>{
      mediaQuery.removeEventListener('change', handleMediaChange);
    }
  }, [])
  return(
    <Canvas
      frameloop='demand'
      shadows
      camera={{position:[20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas