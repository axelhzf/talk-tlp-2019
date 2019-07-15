import React from 'react';
import { Button } from './Button';
import { theme } from './theme';
import { gradients } from './colors';

const Code = theme.components.code;
const Pre = theme.components.pre;

export function BasicAnimation() {
  const [pos, setPos] = React.useState(0);
  return (
    <div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          height: 300
        }}
      >
        <div
          css={theme => ({
            width: 100,
            height: 100,
            borderRadius: '100% ',
            background: gradients[3],
            transform: `translateY(${pos})`,
            transition: 'transform linear 300ms'
          })}
        />
      </div>
      <Button
        css={{ marginBottom: '1em' }}
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
      <Pre>
        <Code>
          {`transform: translateY(${pos});
transition: transform linear 300ms;
`}
        </Code>
      </Pre>
    </div>
  );
}
