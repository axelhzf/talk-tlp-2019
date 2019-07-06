import React from 'react';

export function BasicAnimation() {
  const [pos, setPos] = React.useState(0);
  return (
    <div>
      <div>
        <div css={{ display: 'flex', justifyContent: 'center' }}>
        <div
          css={theme => ({
            width: 50,
            height: 50,
            borderRadius: '100% ',
            backgroundColor: theme.colors.primary,
            transform: `translateY(${pos})`,
            transition: 'linear 300ms'
          })}
        />
        </div>
        <button
          onClick={() => {
            if (pos === 0) {
              setPos('-150px');
            } else {
              setPos(0);
            }
          }}
        >
          Animate
        </button>
      </div>
      <pre>
        <code>transform: translate({pos});</code>
      </pre>
    </div>
  );
}
