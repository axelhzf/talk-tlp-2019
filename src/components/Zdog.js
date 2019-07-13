import React from 'react';
import { Illustration, Polygon, useRender } from 'react-zdog';
import { useSpring, a } from 'react-spring/zdog';
import { Button } from './Button';
var eggplant = '#636';

const TAU = Math.PI * 2;

export function Zdog() {
  const [toggle, setToggle] = React.useState(true);
  return (
    <div css={{ height: 300, width: 300 }}>
      <Illustration>
        <Animation toggle={toggle} />
      </Illustration>

      <Button onClick={() => setToggle(t => !t)}>
        {toggle ? 'On' : 'Off'}
      </Button>
    </div>
  );
}

function Animation({ toggle }) {
  const spring = useSpring({ rotate: toggle ? 0: Math.PI / 2 });
  return (
    <a.Cylinder
      {...{
        diameter: 80,
        length: 120,
        stroke: false,
        color: '#C25',
        backface: '#E62',
      }}
      rotate={spring.rotate.interpolate(r => ({ y: r }))}
    />
  )
}
