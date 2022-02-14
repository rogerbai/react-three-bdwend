
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, PresentationControls } from '@react-three/drei'
import Model from './Bdwendwen'


export default function App() {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
      {/* <color attach="background" args={['#101010']} /> */}
      {/* <fog attach="fog" args={['#101010', 10, 20]} /> */}
      <pointLight position={[-6, 6, 6]} />
      <Suspense fallback={null} >
        <Environment path="/cube" />
        <PresentationControls speed={1.5} global zoom={1.5} polar={[-0.1, Math.PI / 2]} rotation={[0.6, -0.7, -0.3]}>
          <Suspense fallback={null} castshadow>
            <Model position={[0, -1.2,0]} scale={[5,5,5]} />
          </Suspense>
        </PresentationControls>
      </Suspense>
    </Canvas>
  )
}
