import React from 'react';
import { animated, useSpring, useTransition, useChain } from 'react-spring';
import { Button } from './Button';

export function ChainAnimation() {
  const [toggle, setToggle] = React.useState(false);
  const containerSpringRef = React.useRef();
  const containerSpring = useSpring({
    ref: containerSpringRef,
    from: { width: '20%', height: '20%', background: 'pink' },
    to: {
      width: toggle ? '80%' : '20%',
      height: toggle ? '80%' : '20%',
      background: toggle ? 'white' : 'pink'
    }
  });
  const items = [{ name: 'A' }, { name: 'B' }, { name: 'C' }];

  const itemSpringRef = React.useRef();
  const itemsSpring = useTransition(toggle ? items : [], item => item.name, {
    ref: itemSpringRef,
    unique: true,
    trail: 400 / items.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  });

  useChain(toggle ? [containerSpringRef, itemSpringRef]: [itemSpringRef, containerSpringRef]);

  return (
    <div css={{ width: '100vw', height: '100vh' }}>
      <animated.div
        style={{
          width: containerSpring.width,
          height: containerSpring.height,
          background: containerSpring.background
        }}
        onClick={() => toggle(o => !o)}
      >
        {itemsSpring.map(({ item, key, props }) => {
          return (
            <animated.div key={key} style={props} css={{ width: 50, height: 50, background: 'red' }} />
          );
        })}
      </animated.div>

      <Button onClick={() => setToggle(t => !t)}>
        {toggle ? 'Hide' : 'Show'}
      </Button>
    </div>
  );
}
