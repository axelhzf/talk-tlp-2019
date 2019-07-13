import { PrismTheme } from 'prism-react-renderer';

export const a = {
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

export const prismTheme = {
  'code[class*="language-"]': {
    color: '#fff',
    fontFamily: "'IBM Plex Mono', monospace",
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none'
  },
  'pre[class*="language-"]': {
    color: '#fff',
    fontFamily: "'IBM Plex Mono', monospace",
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: '1em',
    margin: '0',
    overflow: 'auto',
    background: '#1d1f21',
    fontSize: '50%'
  },
  ':not(pre) > code[class*="language-"]': {
    background: '#1d1f21',
    padding: '.1em',
    borderRadius: '.3em'
  },
  comment: {
    color: '#7C7C7C'
  },
  prolog: {
    color: '#7C7C7C'
  },
  doctype: {
    color: '#7C7C7C'
  },
  cdata: {
    color: '#7C7C7C'
  },
  punctuation: {
    color: '#c5c8c6'
  },
  '.namespace': {
    Opacity: '.7'
  },
  property: {
    color: '#96CBFE'
  },
  keyword: {
    color: '#96CBFE'
  },
  tag: {
    color: '#96CBFE'
  },
  'class-name': {
    color: '#FFFFB6',
    textDecoration: 'underline'
  },
  boolean: {
    color: '#99CC99'
  },
  constant: {
    color: '#99CC99'
  },
  symbol: {
    color: '#f92672'
  },
  deleted: {
    color: '#f92672'
  },
  number: {
    color: '#FF73FD'
  },
  selector: {
    color: '#A8FF60'
  },
  'attr-name': {
    color: '#A8FF60'
  },
  string: {
    color: '#A8FF60'
  },
  char: {
    color: '#A8FF60'
  },
  builtin: {
    color: '#A8FF60'
  },
  inserted: {
    color: '#A8FF60'
  },
  variable: {
    color: '#C6C5FE'
  },
  operator: {
    color: '#EDEDED'
  },
  entity: {
    color: '#FFFFB6',
    cursor: 'help'
  },
  url: {
    color: '#96CBFE'
  },
  '.language-css .token.string': {
    color: '#87C38A'
  },
  '.style .token.string': {
    color: '#87C38A'
  },
  atrule: {
    color: '#F9EE98'
  },
  'attr-value': {
    color: '#F9EE98'
  },
  function: {
    color: '#DAD085'
  },
  regex: {
    color: '#E9C062'
  },
  important: {
    color: '#fd971f',
    fontWeight: 'bold'
  },
  bold: {
    fontWeight: 'bold'
  },
  italic: {
    fontStyle: 'italic'
  }
};
