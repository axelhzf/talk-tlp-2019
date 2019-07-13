import React from 'react';
import Highlight, { Prism } from 'prism-react-renderer';

export function CodeHighlight(props) {
  return (
    <Highlight
      Prism={Prism}
      code={props.code.trim()}
      theme={prismTheme}
      language={props.language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div
          css={{
            position: 'relative',
            fontFamily: 'IBM Plex Mono',
            p: 20
          }}
          className={`${className || ''} ${props.className || ''}`}
          style={style}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span
                  css={css({ whiteSpace: 'pre' })}
                  {...getTokenProps({ token, key })}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </Highlight>
  );
}

export const prismTheme = {
  plain: {
    backgroundColor: '#171717',
    color: '#fff'
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#bebebe'
      }
    },
    {
      types: ['punctuation'],
      style: {
        color: '#687985'
      }
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ['tag', 'operator', 'number'],
      style: {
        color: '#6ea6ff'
      }
    },
    {
      types: ['property', 'function'],
      style: {
        color: '#9a86fd'
      }
    },
    {
      types: ['tag-id', 'selector', 'atrule-id'],
      style: {
        color: '#eeebff'
      }
    },
    {
      types: ['attr-name'],
      style: {
        color: '#92eeee'
      }
    },
    {
      types: [
        'boolean',
        'string',
        'entity',
        'url',
        'attr-value',
        'keyword',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'at-rule',
        'placeholder',
        'variable'
      ],
      style: {
        color: '#bb8eff'
      }
    },
    {
      types: ['deleted'],
      style: {
        textDecorationLine: 'line-through'
      }
    },
    {
      types: ['inserted'],
      style: {
        textDecorationLine: 'underline'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['important'],
      style: {
        color: '#c4b9fe'
      }
    }
  ]
};
