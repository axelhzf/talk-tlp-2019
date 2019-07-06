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
    primary: '#0062ff',

    interactive1: '#0062ff',
    interactive2: '#171717',
    interactive3: '#0062ff',
    interactive4: '#0062ff',
    uiBackground: '#f3f3f3',
    ui1: '#ffffff',
    ui2: '#f3f3f3',
    ui3: '#dcdcdc',
    ui4: '#8c8c8c',
    ui5: '#171717',
    text1: '#171717',
    text2: '#565656',
    text3: '#8c8c8c',
    text4: '#ffffff',
    icon1: '#171717',
    icon2: '#565656',
    icon3: '#ffffff',
    link1: '#0062ff',
    field1: '#ffffff',
    field2: '#f3f3f3',
    inverse1: '#ffffff',
    inverse2: '#3d3d3d',
    support1: '#da1e28',
    support2: '#24a148',
    support3: '#fdd13a',
    support4: '#054ada',
    overlay1: 'rgba(23, 23, 23, 0.5)',
    focus: '#0062ff',
    hoverPrimary: '#0353e9',
    activePrimary: '#0530ad',
    hoverPrimaryText: '#054ada',
    hoverSecondary: '#4c4c4c',
    activeSecondary: '#6f6f6f',
    hoverTertiary: '#0353e9',
    activeTertiary: '#0530ad',
    hoverUi: '#e5e5e5',
    activeUi: '#bebebe',
    selectedUi: '#dcdcdc',
    hoverSelectedUi: '#cacaca',
    hoverDanger: '#ba1b23',
    activeDanger: '#750e13',
    hoverRow: '#e5e5e5',
    visitedLink: '#8a3ffc',
    disabled1: '#ffffff',
    disabled2: '#bebebe',
    disabled3: '#8c8c8c',
    highlight: '#c9deff',
    brand1: '#0062ff',
    brand2: '#171717',
    brand3: '#0062ff',
    active1: '#bebebe',
    hoverField: '#e5e5e5'

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
        
        html {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
  );
}
