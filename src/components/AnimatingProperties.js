import { keyframes } from '@emotion/core';
import { Ball } from './Ball';
import { Square } from './Square';
import { gradients } from './colors';

export function AnimatingProperties() {
  return (
    <div css={{ display: 'flex', minWidth: '100%' }}>
      <Column>
        <p><code>opacity</code></p>
        <Ball css={{ animation: `${opacity} 1s infinite;`, background: gradients[2] }}/>
      </Column>
      <Column>
        <p><code>scale</code></p>
        <Ball css={{ animation: `${scale} 1s infinite;`, background: gradients[3] }}/>
      </Column>
      <Column>
        <p><code>rotate</code></p>
        <Square css={{ animation: `${rotate} 1s infinite;`, background: gradients[4] }}/>
      </Column>
    </div>
  );
}

const opacity = keyframes`
  0%, 100% {
    opacity: 0;
  }

  50% {
    opacity : 1;
  }
`;

const scale = keyframes`
  0%, 100% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.25);
  }
`;

const rotate = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }
`;

function Column(props) {
  return <div {...props} css={{ flex: 1, alignItems: 'center', display: 'flex', flexDirection: 'column' }} />
}
