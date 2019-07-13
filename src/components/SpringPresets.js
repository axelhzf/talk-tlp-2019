import React from 'react';
import { useSpring, animated, interpolate, config } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import { colors, gradients } from './colors';
import { Flex, Box } from '@rebass/emotion';
import { theme } from './theme';

const Code = theme.components.code;
const Pre = theme.components.pre;


const presets = Object.keys(config);

export function SpringPresets() {
  const [preset, setPreset] = React.useState('default');
  const [bind, { delta, down }] = useGesture();
  const { x } = useSpring({
    config: config[preset],
    x: down ? delta[0] : 0,
    immediate: name => down
  });

  return (
    <Flex alignItems="center">
      <Box  width={300} css={{ height: 60, position: 'relative' }} mr={50}>
        <animated.div
          {...bind()}
          style={{
            transform: interpolate([x], x => `translate3d(${x}px,0,0)`)
          }}
          css={theme => ({
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            color: theme.colors.text4,
            background: gradients[4],
            transition: down ? undefined : 'left linear 1000ms',
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
            background: colors.blue10,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: 10
          }}
        />
      </Box>
      <Box>
        <select value={preset} onChange={e => setPreset(e.target.value)} css={{ fontSize: 30 }}>
          {presets.map(p => (
            <option value={p} key={p}>
              {p}
            </option>
          ))}
        </select>
        <Box>
          <Pre>
            <Code>{JSON.stringify(config[preset], null, 2)}</Code>
          </Pre>
        </Box>
      </Box>
    </Flex>
  );
}
