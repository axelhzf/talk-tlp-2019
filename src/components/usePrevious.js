import React from 'react';
export function usePrevious(value) {
  const ref = React.useRef();
  React.useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}
