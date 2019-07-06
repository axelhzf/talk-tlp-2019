export function Reference(props) {
  return (
    <a
      {...props}
      target="_blank"
      css={theme => ({
        position: 'fixed',
        bottom: '0',
        right: '0',
        padding: '10px',
        backgroundColor: theme.colors.ui5,
        color: theme.colors.white,
        fontSize: 20
      })}
    />
  );
}
