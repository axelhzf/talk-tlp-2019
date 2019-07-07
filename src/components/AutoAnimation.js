import { Flex, Box, Text } from '@rebass/emotion';
import React from 'react';
import { colors } from './colors';

export function AutoAnimation() {
  const [active, setActive] = React.useState('blue30');

  return (
    <Flex flexDirection="column" justifyContent="left" alignItems="left">
      <Flex fontSize={16}>
        <Tab onClick={() => setActive('blue30')}>Blue</Tab>
        <Tab onClick={() => setActive('green30')}>Green</Tab>
        <Tab onClick={() => setActive('magenta30')}>Magenta</Tab>
      </Flex>
      <div
        css={{
          display: 'flex',
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
          background: colors[active]
        }}
      >
        <Text textAlign="left" fontSize={16}>
          {active}
        </Text>
      </div>
    </Flex>
  );
}

function Tab(props) {
  return (
    <div
      {...props}
      css={theme => ({
        background: theme.colors.ui5,
        color: theme.colors.text4,
        padding: 10,
        border: 'none',
        fontSize: 16,
        cursor: 'pointer',
        marginRight: 10,
        '&:hover': {
          background: theme.colors.hoverPrimary
        }
      })}
    />
  );
}
