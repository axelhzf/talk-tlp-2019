import { future, swiss } from '@mdx-deck/themes';
import { Global, css } from '@emotion/core';

export const theme = {
  ...future,
  font: '"IBM Plex Sans", system-ui, sans-serif',
  colors: {
    background: '#f3f3f3',
    blue: '#0062ff',
    code: '#0062ff',
    link: '#6ea6ff',
    pre: '#0af',
    preBackground: '#000',
    text: '#171717',
    primary: '#0062ff'
  },
  heading: {
    fontWeight: 600
  }
};

export function ThemeGlobal() {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,600,700&display=swap');
        @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400&display=swap');
      `}
    />
  );
}
