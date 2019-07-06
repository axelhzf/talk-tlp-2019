export function Square(props) {
  return (
    <div
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