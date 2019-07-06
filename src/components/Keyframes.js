import { keyframes } from '@emotion/core';
import { Square } from './Square';
import React from 'react';
import {Flex, Box } from '@rebass/emotion';

export function Keyframes() {
  return (
    <Flex width="100vw">
      <Flex flex="1" justifyContent="flex-end" mr={50}>
        <Square css={{ animation: `${fancy} 4s ease-in-out infinite;` }} />
      </Flex>
      <Box flex="1">
        <pre css={{ fontSize: 16 }}>
          <code>{`
@keyframes fancy {          
  0%, 100% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }

  25% {
    transform: translateX(300px) translateY(0);
  }
  
  50% {
    transform: translateX(300px) translateY(300px);
    opacity: 0.5;
  }
  
  75% {
    transform: translateX(0) translateY(300px);
  }
}  

div {
  animation: fancy 4s ease-in-out infinite;
}        
          `}</code>
        </pre>
      </Box>
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
