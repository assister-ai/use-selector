import { useState, useEffect } from 'react';

export function useSelector(state, selector) {
  const [resultingState, setResultingState] = useState();
  useEffect(() => {
    setResultingState(selector(state));
  }, [state, selector, setResultingState]);
  return resultingState;
};

