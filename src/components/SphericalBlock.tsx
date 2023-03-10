import * as THREE from 'three'
import React, { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'
import { Euler, Vector3, Color } from 'three'
import { Mesh } from 'three'
type WordProps = {
  children: any;
  position: any

}

function Word({ children, ...props }: WordProps) {
  const color = new THREE.Color()
  const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef<Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  const over = (e: { stopPropagation: () => any }) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {

    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    // ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
  })
  return <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps}>{children}</Text>
}


const w = ['', 'React', 'Redux', 'Git', 'MobX', 'Github', 'NPM', 'CSS', 'HTML', 'TS', 'JS', 'Socket', 'API', 'Frontend', 'Developer', 'UI', 'Node', 'JSON', 'Tailwind', 'Mobile', 'JSX', 'SCSS', 'Object', 'Array', 'Function', 'Web', 'HTTP', 'Request', 'AJAX', 'Axios', 'Backend', 'ES5/ES6', 'Mongo DB', 'Response', 'Promise', 'Async', 'Await', 'React', 'Redux', 'Git', 'MobX', 'Github', 'NPM', 'CSS', 'HTML', 'TS', 'JS', 'Socket', 'API', 'Frontend', 'Developer', 'UI', 'Node', 'JSON', 'Tailwind', 'Mobile', 'JSX', 'SCSS', 'Object', 'Array', 'Function', 'Web', 'HTTP', 'Request', 'AJAX', 'Axios', 'Backend', 'ES5/ES6', 'Mongo DB', 'Response', 'Promise', 'Async', 'Await']
function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) {
        temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), w[j + (8 * (i - 1))]])
      }
    return temp
  }, [count, radius])
  return (
    <>
      {words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)}
    </>
  )
}

export default function SphericalBlock() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Cloud count={8} radius={20} />
      <TrackballControls />
    </Canvas>
  )
}