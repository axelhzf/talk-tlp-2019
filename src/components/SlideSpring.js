import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import { colors, gradients } from './colors';
import { Flex } from '@rebass/emotion';

export function SlideSpring() {
  const [bind, { delta, down }] = useGesture();
  const { x } = useSpring({
    x: down ? delta[0] : 0,
    immediate: name => down
  });

  return (
    <Flex flexDirection="column" alignItems="center">
      <div css={{ width: 300, height: 60, position: 'relative' }}>
        <animated.div
          {...bind()}
          style={{
            transform: x.interpolate(x => `translate3d(${x}px,0,0)`)
          }}
          css={theme => ({
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            color: theme.colors.text4,
            background: gradients[0],
            borderRadius: 10,
            userSelect: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '.5em'
          })}
        >
          Slide
        </animated.div>
        <div
          css={{
            background: colors.purple30,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: 10
          }}
        />
      </div>
    </Flex>
  );
}
