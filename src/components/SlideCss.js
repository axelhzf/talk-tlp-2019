import React from 'react';
import { useGesture } from 'react-with-gesture';
import { colors } from './colors';
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
            background: colors.teal50,
            transition: down ? undefined : 'left linear 1000ms',
            borderRadius: 10,
            userSelect: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          })}
        >
          Slide
        </div>
        <div
          css={{
            background: colors.teal30,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: 10
          }}
        />
      </div>
      <pre>
        <code>{`transition: linear 1000ms;`}</code>
      </pre>
    </Flex>
  );
}
