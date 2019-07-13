import React from 'react';
import { Button } from './Button';

export function BasicAnimation() {
  const [pos, setPos] = React.useState(0);
  return (
    <div>
      <div>
        <div css={{ display: 'flex', justifyContent: 'center', height: 200 }}>
          <div
            css={theme => ({
              width: 50,
              height: 50,
              borderRadius: '100% ',
              backgroundColor: theme.colors.primary,
              transform: `translateY(${pos})`,
              transition: 'transform linear 300ms'
            })}
          />
        </div>
        <Button
          onClick={() => {
            if (pos === 0) {
              setPos('150px');
            } else {
              setPos(0);
            }
          }}
        >
          Animate
        </Button>
      </div>
      <pre>
        <code>{`
transform: translate(${pos});
transition: transform linear 300ms;
`}
        </code>
      </pre>
    </div>
  );
}
