export function Button(props) {
  return (
    <button
      {...props}
      css={theme => ({
        background: theme.colors.interactive1,
        color: theme.colors.text4,
        padding: 10,
        border: 'none',
        fontSize: 16,
        cursor: 'pointer',
        '&:hover': {
          background: theme.colors.hoverPrimary
        }
      })}
    />
  );
}
