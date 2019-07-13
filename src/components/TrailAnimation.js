import React from 'react';
import { useTrail } from 'react-spring';
import { Square } from './Square';
import { Button } from './Button';
import { gradients } from './colors';

export function TrailAnimation() {
  const [toggle, setToggle] = React.useState(true);
  const items = ['A', 'B', 'C', 'D'];
  const trail = useTrail(items.length, {
    from: { opacity: 1 },
    to: { opacity: 0 },
    reverse: toggle
  });
  return (
    <div>
      <div css={{ position: 'relative', height: 200 }}>
        {trail.map(({ opacity }, index) => {
          return (
            <Square
              style={{ opacity }}
              key={index}
              css={{
                position: 'absolute',
                width: 200,
                height: 200,
                left: index * (200 + 10),
                background: gradients[5 + index],
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 400
              }}
            >
              {items[index]}
            </Square>
          );
        })}
      </div>

      <Button onClick={() => setToggle(t => !t)}>Animate</Button>
    </div>
  );
}
