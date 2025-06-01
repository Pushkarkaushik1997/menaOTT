import { useRef, useCallback, useState } from 'react';

const useDirectionalNavigation = () => {
  const parent = useRef<HTMLDivElement | null>(null);
  const lastPosition = useRef<number>(0);
  const [focusedIndex, setfocusedIndex] = useState<number>(0)

  const handleFocus = useCallback(({ focusNode }: any) => {
    const el = focusNode.elRef.current;
    if (el && parent.current) {
      lastPosition.current = +(el.getAttribute("data-index") || 0);
      setfocusedIndex(lastPosition.current)
      el.scrollIntoView({ block: "center", inline: "start", behavior: "auto" });
    }
  }, []);

  const handleBlurred = ({ currentNode }: any) => {
    currentNode.defaultFocusChild = lastPosition.current;
  }

  return { parent, handleFocus, handleBlurred, focusedIndex };
};

export default useDirectionalNavigation;
