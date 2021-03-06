import { animated } from 'react-spring';

export function Square(props) {
  return (
    <animated.div
      {...props}
      css={theme => ({
        width: 50,
        height: 50,
        backgroundColor: theme.colors.interactive1,
        borderRadius: 10
      })}
    />
  );
}