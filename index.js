import { useState, useEffect } from 'react';

export function useSelector(selector, deps) {
  const [state, setState] = useState(selector());
  useEffect(() => {
    setState(selector());
  }, deps);
  return state;
};
