import { Flex, Box, Text } from '@rebass/emotion';
import React from 'react';
import { colors, gradients } from './colors';
import { usePrevious } from './usePrevious';
import { useMeasure } from './useMeasure';
import { useSpring, animated } from 'react-spring';

export function AutoAnimation() {
  const [active, setActive] = React.useState('A');

  return (
    <Flex flexDirection="column" justifyContent="left" alignItems="left" css={{ height: 300 }}>
      <Flex fontSize={16}>
        <Tab onClick={() => setActive('A')}>A</Tab>
        <Tab onClick={() => setActive('B')}>B</Tab>
        <Tab onClick={() => setActive('C')}>C</Tab>
      </Flex>
      <div css={{ position: 'relative', color: '#fff', fontWeight: 'bold' }}>
        <TabPane isOpen={active === 'A'}>
          <Content css={{ height: 50, background: gradients[4] }}>A</Content>
        </TabPane>
        <TabPane isOpen={active === 'B'}>
          <Content css={{ height: 150, background: gradients[5] }}>B</Content>
        </TabPane>
        <TabPane isOpen={active === 'C'}>
          <Content css={{ height: 200, background: gradients[6] }}>C</Content>
        </TabPane>
      </div>
    </Flex>
  );
}

function Content(props) {
  return <div {...props} css={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}/>
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
        paddingLeft: 40,
        paddingRight: 40,
        '&:hover': {
          background: theme.colors.hoverPrimary
        }
      })}
    />
  );
}

function TabPane(props) {
  const { isOpen } = props;
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity } = useSpring({
    from: { opacity: 0, height: 0 },
    to: {
      opacity: isOpen ? 1: 0,
      height: isOpen ? viewHeight : 0,
    },
    immediate: !isOpen
  });
  return (
    <animated.div
      css={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
        fontSize: 20
      }}
      style={{ opacity, height }}
    >
      <div {...bind} children={props.children} />
    </animated.div>
  );
}
