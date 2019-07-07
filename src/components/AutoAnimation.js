import { Flex, Box, Text } from '@rebass/emotion';
import React from 'react';
import { colors } from './colors';
import { usePrevious } from './usePrevious';
import { useMeasure } from './useMeasure';
import { useSpring, animated } from 'react-spring';

export function AutoAnimation() {
  const [active, setActive] = React.useState('blue');

  return (
    <Flex flexDirection="column" justifyContent="left" alignItems="left">
      <Flex fontSize={16}>
        <Tab onClick={() => setActive('blue')}>Blue</Tab>
        <Tab onClick={() => setActive('green')}>Green</Tab>
        <Tab onClick={() => setActive('magenta')}>Magenta</Tab>
      </Flex>
      <div css={{ position: 'relative' }}>
        <TabPane isOpen={active === 'blue'}>
          <Content css={{ height: 50, background: colors.blue30 }}>Blue</Content>
        </TabPane>
        <TabPane isOpen={active === 'green'}>
          <Content css={{ height: 150, background: colors.green30 }}>Green</Content>
        </TabPane>
        <TabPane isOpen={active === 'magenta'}>
          <Content css={{ height: 200, background: colors.magenta30 }}>Magenta</Content>
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
        '&:hover': {
          background: theme.colors.hoverPrimary
        }
      })}
    />
  );
}

function TabPane(props) {
  const { isOpen } = props;
  const previous = usePrevious(isOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
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
      style={{
        opacity,
        height: isOpen && previous === isOpen ? 'auto' : height
      }}
    >
      <animated.div style={{ transform }} {...bind} children={props.children} />
    </animated.div>
  );
}
