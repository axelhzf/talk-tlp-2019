/*eslint-disable object-shorthand*/

import prismLight from 'spectacle/lib/themes/default/prism.light';
import prismDark from 'spectacle/lib/themes/default/prism.dark';
import duoTone from './prism-duotone-light';
import { colors } from './colors';

const defaultColors = {
  primary: '#22292f',
  secondary: colors.blue.base,
  tertiary: colors.blue.darker,
  quarternary: 'white',
  bg: colors.grey.white,
  bgCode: '#2a2734',
};

const defaultFonts = {
  primary:
    'system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;',
  secondary:
    'system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;',
  tertiary: 'Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace'
};

const screen = (colorArgs = defaultColors, fontArgs = defaultFonts) => {
  let normalizedFontArgs = {};
  let googleFonts = {};
  Object.keys(fontArgs).forEach(key => {
    const value = fontArgs[key];
    const fontName = value.hasOwnProperty('name') ? value.name : value;
    normalizedFontArgs = { ...normalizedFontArgs, [key]: fontName };
    if (value.hasOwnProperty('googleFont') && value.googleFont) {
      googleFonts = { ...googleFonts, [key]: value };
    }
  });
  const fonts = Object.assign({}, defaultFonts, normalizedFontArgs);
  return {
    colors: colors,
    fonts: fonts,
    googleFonts,
    global: {
      body: {
        background: colors.grey.white,
        fontFamily: fonts.secondary,
        fontWeight: 'normal',
        fontSize: '2em',
        color: colors.grey.darkest,
        overflow: 'hidden'
      },
      '_:-moz-tree-row(hover), .spectacle-deck': {
        perspective: '1000px'
      },
      '_:-moz-tree-row(hover), ul .appear': {
        display: 'inline'
      },
      'html, body': {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0
      },
      '*': {
        boxSizing: 'border-box'
      }
    },
    fullscreen: {
      fill: colors.tertiary
    },
    autoplay: {
      pause: {
        position: 'absolute',
        top: 20,
        right: '50%',
        left: '50%',
        zIndex: 9999,
        background: 'none',
        border: 'none',
        outline: 0
      },
      pauseIcon: {
        fill: colors.tertiary
      },
      play: {
        position: 'absolute',
        top: 20,
        right: '50%',
        left: '50%',
        zIndex: 9999,
        background: 'none',
        border: 'none',
        outline: 0
      },
      playIcon: {
        fill: colors.tertiary
      }
    },
    controls: {
      prev: {
        position: 'absolute',
        top: '50%',
        left: 20,
        transform: 'translateY(-50%)',
        zIndex: 9999,
        background: 'none',
        border: 'none',
        outline: 0
      },
      prevIcon: {
        fill: colors.blue.base,
        transition: 'fill 1s ease-in-out 0.2s'
      },
      next: {
        position: 'absolute',
        top: '50%',
        right: 20,
        transform: 'translateY(-50%)',
        zIndex: 9999,
        background: 'none',
        border: 'none',
        outline: 0
      },
      nextIcon: {
        fill: colors.blue.base,
        transition: 'fill 1s ease-in-out 0.2s'
      }
    },
    prism: {
      light: prismLight,
      dark: duoTone,
    },
    progress: {
      bar: {
        container: {
          position: 'absolute',
          height: '10px',
          width: '100%',
          bottom: 0,
          left: 0,
          transition: 'all 1s ease-in-out 0.2s',
          zIndex: 1000,
          background: colors.blue.lightest
        },
        bar: {
          height: '100%',
          background: colors.blue.base,
          transition: 'all 0.3s ease-out'
        }
      },
      number: {
        container: {
          position: 'absolute',
          bottom: 10,
          right: 10,
          zIndex: 1000,
          color: colors.quarternary,
          transition: 'all 0.3s ease-out'
        }
      }
    },
    components: {
      blockquote: {
        textAlign: 'left',
        position: 'relative',
        display: 'inline-block',
        margin: 20
      },
      quote: {
        borderLeft: `1px solid ${colors.primary}`,
        paddingLeft: 40,
        display: 'block',
        color: colors.primary,
        fontSize: '4.9rem',
        lineHeight: 1,
        fontWeight: 'bold'
      },
      cite: {
        color: colors.tertiary,
        display: 'block',
        clear: 'left',
        fontSize: '2rem',
        marginTop: '1rem'
      },
      content: {
        margin: '0 auto',
        textAlign: 'center'
      },
      codePane: {
        margin: 'auto',
        fontSize: '1.5rem',
        fontWeight: 'normal',
        minWidth: '100%',
        maxWidth: 800
      },
      syntax: {
        fontFamily: fonts.tertiary,
        fontSize: 'inherit',
        lineHeight: 1.5,
        direction: 'ltr',
        textAlign: 'left',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        tabSize: 2,
        hyphens: 'none',
        whiteSpace: 'pre-wrap',
        padding: '0.5rem',
        margin: 0,
        maxHeight: '100vh',
        overflowY: 'scroll'
      },
      code: {
        color: 'black',
        fontSize: '2.66rem',
        fontFamily: fonts.tertiary,
        margin: '0.25rem auto',
        backgroundColor: 'rgba(0,0,0,0.15)',
        padding: '0 10px',
        borderRadius: 3
      },
      goToAction: {
        borderRadius: '6px',
        fontFamily: fonts.primary,
        padding: '0.25em 1em',
        border: 'none',
        background: '#000',
        color: '#fff',
        '&:hover': {
          background: colors.tertiary,
          color: '#000'
        }
      },
      heading: {
        h1: {
          color: colors.primary,
          fontSize: '7.05rem',
          fontFamily: fonts.primary,
          lineHeight: 1.2,
          fontWeight: 'normal',
          margin: 0,
          zoom: 1
        },
        h2: {
          color: colors.primary,
          fontSize: '5.88rem',
          fontFamily: fonts.primary,
          lineHeight: 1.2,
          fontWeight: 'normal',
          margin: 0,
          paddingBottom: 20,
          marginBottom: 60,
          borderBottom: '5px solid #3490DC',
          textAlign: 'left'
        },
        h3: {
          color: colors.primary,
          fontSize: '4.9rem',
          fontFamily: fonts.primary,
          lineHeight: 1.2,
          fontWeight: 'normal',
          margin: '0.5rem auto'
        },
        h4: {
          color: colors.primary,
          fontSize: '3.82rem',
          fontFamily: fonts.primary,
          lineHeight: 1.2,
          fontWeight: 'normal',
          margin: '0.5rem auto'
        },
        h5: {
          color: colors.primary,
          fontSize: '3.19rem',
          fontFamily: fonts.primary,
          lineHeight: 1.2,
          fontWeight: 'normal',
          margin: '0.5rem auto'
        },
        h6: {
          color: colors.primary,
          fontSize: '2.66rem',
          fontFamily: fonts.primary,
          lineHeight: 1.2,
          fontWeight: 'bold',
          margin: '0.5rem auto'
        }
      },
      image: {
        display: 'block',
        margin: '0.5rem auto',
        maxHeight: 600
      },
      link: {
        textDecoration: 'none'
      },
      listItem: {
        fontSize: '2.66rem',
        marginBottom: '1rem'
      },
      list: {
        textAlign: 'left',
        listStylePosition: 'outside',
        padding: 0,
        paddingLeft: 40
      },
      s: {
        strikethrough: {}
      },
      tableHeaderItem: {
        fontSize: '2.66rem',
        fontWeight: 'bold'
      },
      tableItem: {
        fontSize: '2.66rem'
      },
      table: {
        width: '100%'
      },
      text: {
        fontSize: '2.66rem',
        fontFamily: fonts.secondary,
        margin: '0.25rem auto',
        textAlign: 'left'
      }
    }
  };
};

export default screen;
