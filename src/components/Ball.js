export function Ball(props) {
  return (
    <div
      {...props}
      css={theme => ({
        width: 50,
        height: 50,
        borderRadius: '100% ',
        backgroundColor: theme.colors.interactive1
      })}
    />
  );
}