import { Flex, Box } from '@rebass/emotion';
import React from 'react';
import { Button } from './Button';
import { Square } from './Square';
import { useTransition } from 'react-spring';

export function UnmountAnimation() {
  const [visible, setVisible] = React.useState(true);
  const transitions = useTransition(visible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return (
    <div>
      <Button onClick={() => setVisible(v => !v)}>
        {visible ? 'Hide square' : 'Show square'}
      </Button>
      <div css={{ display: 'flex', marginTop: 10, height: 100 }}>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <Square
                key={key}
                style={props}
                css={{ position: 'absolute', left: '50%' }}
              />
            )
        )}
      </div>
    </div>
  );
}
