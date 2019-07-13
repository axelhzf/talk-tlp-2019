import React from 'react';
import { useTrail } from 'react-spring';
import { Square } from './Square';
import { Button } from './Button';

export function TrailAnimation() {
  const items = ['A', 'B', 'C', 'D'];
  const [toggle, setToggle] = React.useState(true);

  const trail = useTrail(items.length, {
    opacity: toggle ? 1 : 0
  });

  return (
    <div>
      <div css={{ position: 'relative', height: 50 }}>
        {trail.map(({ opacity }, index) => {
          return (
            <Square
              style={{ opacity }}
              css={{ position: 'absolute', left: index * 60 }}
            />
          );
        })}
      </div>

      <Button onClick={() => setToggle(t => !t)}>
        {toggle ? 'Hide' : 'Show'}
      </Button>
    </div>
  );
}
