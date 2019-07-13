import React from 'react';
import { MDXDeck, Head } from 'mdx-deck';
import { Analytics } from './Analytics';

export function Root(props) {
  return (
    <>
      <MDXDeck {...props} />
      <Analytics />
    </>
  );
}
