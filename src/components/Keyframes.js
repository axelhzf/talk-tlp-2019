import { keyframes } from '@emotion/core';
import { Square } from './Square';
import React from 'react';
import { Flex, Box } from '@rebass/emotion';
import { gradients } from './colors';

export function Keyframes() {
  return (
    <Flex flex="1" justifyContent="flex-end" mr={50} css={{ height: 300 }}>
      <Square
        css={{
          width: 100,
          height: 100,
          animation: `${fancy} 4s ease-in-out infinite;`,
          background: gradients[2]
        }}
      />
    </Flex>
  );
}

const fancy = keyframes`
  0%, 100% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }

  25% {
    transform: translateX(-300px) translateY(0);
  }
  
  50% {
    transform: translateX(-300px) translateY(300px);
    opacity: 0.5;
  }
  
  75% {
    transform: translateX(0) translateY(300px);
  }
`;
