import React from 'react';
import { useGesture } from 'react-with-gesture';
import { colors, gradients } from './colors';
import { Flex } from '@rebass/emotion';

export function SlideCss() {
  const [bind, { delta, down }] = useGesture();

  return (
    <Flex flexDirection="column" alignItems="center">
      <div css={{ width: 300, height: 60, position: 'relative' }}>
        <div
          {...bind()}
          css={theme => ({
            position: 'absolute',
            left: down ? delta[0] : 0,
            top: 0,
            width: '100%',
            height: '100%',
            color: theme.colors.text4,
            background: gradients[3],
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
        </div>
        <div
          css={{
            background: colors.magenta10,
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
