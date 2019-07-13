import React from 'react';
import { Illustration, Polygon, Anchor } from 'react-zdog';
import { useSpring, a } from 'react-spring/zdog';
import { Button } from './Button';
var eggplant = '#636';

const TAU = Math.PI * 2;

export function Zdog() {
  const [toggle, setToggle] = React.useState(true);
  return (
    <div css={{ height: 300 }}>
      <Illustration zoom={100}>
        <Animation toggle={toggle} />
      </Illustration>

      <Button onClick={() => setToggle(t => !t)}>Animate</Button>
    </div>
  );
}

function Animation({ toggle }) {
  const spring = useSpring({
    from: { rotate: 0 },
    to: { rotate: toggle ? 0 : Math.PI }
  });
  var radius = 0.5;
  var inradius = Math.cos(TAU / 6) * radius;
  var height = radius + inradius;
  var garnet = '#C25';
  var orange = '#E62';
  var gold = '#EA0';

  const triangleProps = {
    sides: 3,
    radius,
    translate: { y: height / 2 },
    fill: true,
    stroke: false
  };

  return (
    <a.Anchor
      scale={2.5}
      rotate={spring.rotate.interpolate(r => ({ y : r, z: r }))}
    >
      <Anchor rotate={{ y: 0 }}>
        <Anchor
          translate={{ z: inradius, y: height / 2 }}
          rotate={{ x: Math.acos(1 / 3) * -1 + TAU / 4 }}
        >
          <Polygon
            {...triangleProps}
            translate={{ y: -inradius }}
            color={gold}
          />
        </Anchor>
      </Anchor>

      <Anchor rotate={{ y: TAU / 3 }}>
        <Anchor
          translate={{ z: inradius, y: height / 2 }}
          rotate={{ x: Math.acos(1 / 3) * -1 + TAU / 4 }}
        >
          <Polygon
            {...triangleProps}
            translate={{ y: -inradius }}
            color={garnet}
          />
        </Anchor>
      </Anchor>

      <Anchor rotate={{ y: (TAU / 3) * 2 }}>
        <Anchor
          translate={{ z: inradius, y: height / 2 }}
          rotate={{ x: Math.acos(1 / 3) * -1 + TAU / 4 }}
        >
          <Polygon
            {...triangleProps}
            translate={{ y: -inradius }}
            color={orange}
          />
        </Anchor>
      </Anchor>

    </a.Anchor>
  );
}

/*
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

 */

/*
( function() {

  var tetrahedron = new Zdog.Anchor({
    addTo: illo,
    translate: { x: 0, y: 0 },
    scale: 2.5,
  });

  var radius = 0.5;
  var inradius = Math.cos( TAU/6 ) * radius;
  var height = radius + inradius;

  solids.push( tetrahedron );

  var triangle = new Zdog.Polygon({
    sides: 3,
    radius: radius,
    addTo: tetrahedron,
    translate: { y: height/2 },
    fill: true,
    stroke: false,
    color: eggplant,
    // backface: false,
  });


  for ( var i=0; i < 3; i++ ) {
    var rotor1 = new Zdog.Anchor({
      addTo: tetrahedron,
      rotate: { y: TAU/3 * -i },
    });
    var rotor2 = new Zdog.Anchor({
      addTo: rotor1,
      translate: { z: inradius, y: height/2 },
      rotate: { x: Math.acos(1/3) * -1 + TAU/4  },
    });
    triangle.copy({
      addTo: rotor2,
      translate: { y: -inradius },
      color: [ gold, garnet, orange ][i],
    });
  }

  triangle.rotate.set({ x: -TAU/4, z: -TAU/2 });

})();

 */
