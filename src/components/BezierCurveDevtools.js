import { keyframes } from '@emotion/core';
import { Square } from './Square';
import { gradients } from './colors';

export function BezierCurveDevtools() {
  return (
    <Square
      css={{
        width: 150,
        height: 150,
        animation: `${translateX} 3s infinite cubic-bezier(0.42, 0.0, 0.58, 1.0);`,
        background: gradients[8]
      }}
    />
  );
}

const translateX = keyframes`
  0%, 100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(300px);
  }
`;
