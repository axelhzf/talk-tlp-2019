import * as THREE from 'three';
import React from 'react';
import { Canvas } from 'react-three-fiber';
import { useSpring, animated } from 'react-spring/three';
import { Button } from './Button';

export function Three() {
  const [toggle, setToggle] = React.useState(true);
  return (
    <div css={{ height: 300 }}>
      <Canvas>
        <ambientLight color="lightblue" />
        <pointLight color="white" intensity={1} position={[10, 10, 10]} />
        <Octahedron toggle={toggle} />
      </Canvas>
      <Button onClick={() => setToggle(t => !t)}>Animate</Button>
    </div>
  );
}

function Octahedron({ toggle }) {
  const { color, pos, ...props } = useSpring({
    pos: toggle ? [0, 0, 2] : [0, 0, 0],
    scale: toggle ? [3, 3, 3] : [1, 1, 1],
    rotation: toggle
      ? [THREE.Math.degToRad(180), 0, THREE.Math.degToRad(45)]
      : [0, 0, 0]
  });
  return (
    <group>
      <animated.mesh {...props}>
        <octahedronGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="grey" transparent />
      </animated.mesh>
    </group>
  );
}
