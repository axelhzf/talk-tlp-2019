export function Button(props) {
  return (
    <button
      css={theme => ({
        background: theme.colors.interactive1,
        color: theme.colors.text4,
        padding: 10,
        border: 'none',
        fontSize: 16,
        cursor: 'pointer',
        borderRadius: 4,
        '&:hover': {
          background: theme.colors.hoverPrimary
        }
      })}
      {...props}
    />
  );
}
