import React from 'react';
import { animated, useSpring, useTransition, useChain } from 'react-spring';
import { Button } from './Button';
import { gradients } from './colors';

export function ChainAnimation() {
  const [toggle, setToggle] = React.useState(false);
  const containerSpringRef = React.useRef();
  const containerSpring = useSpring({
    ref: containerSpringRef,
    from: { width: '20%', height: '20%', background: gradients[0] },
    to: {
      width: toggle ? '80%' : '20%',
      background: toggle ? gradients[1] : gradients[0]
    }
  });
  const items = [{ name: 'A' }, { name: 'B' }, { name: 'C' }];

  const itemSpringRef = React.useRef();
  const itemsSpring = useTransition(toggle ? items : [], item => item.name, {
    ref: itemSpringRef,
    unique: true,
    trail: 300 / items.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  });

  useChain(
    toggle
      ? [containerSpringRef, itemSpringRef]
      : [itemSpringRef, containerSpringRef],
    [0, 0.4]
  );

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <animated.div
        style={{
          width: containerSpring.width,
          background: containerSpring.background,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          marginBottom: '1em',
          height: 150
        }}
      >
        {itemsSpring.map(({ item, key, props }, index) => {
          return (
            <animated.div
              key={key}
              style={props}
              css={{
                height: 50,
                borderRadius: 20,
                background: gradients[4 + index],
                flex: 1,
                marginLeft: '1em',
                marginRight: '1em'
              }}
            />
          );
        })}
      </animated.div>

      <Button onClick={() => setToggle(t => !t)}>Animate</Button>
    </div>
  );
}
