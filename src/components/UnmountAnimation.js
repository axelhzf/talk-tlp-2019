import { Flex, Box } from '@rebass/emotion';
import React from 'react';
import { Button } from './Button';
import { Square } from './Square';
import { useTransition } from 'react-spring';
import { gradients } from './colors';

export function UnmountAnimation() {
  const [visible, setVisible] = React.useState(true);
  const transitions = useTransition(visible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return (
    <div>
      <div css={{ display: 'flex', marginTop: 10, height: 200, width: 200 }}>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <Square
                key={key}
                style={props}
                css={{
                  width: 200,
                  height: 200,
                  position: 'absolute',
                  background: gradients[3],
                  left: '50%',
                  marginLeft: -100
                }}
              />
            )
        )}
      </div>
      <Button onClick={() => setVisible(v => !v)}>
        Animate
      </Button>
    </div>
  );
}
