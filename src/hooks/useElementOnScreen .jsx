import { useEffect, useRef, useState } from "react";

export function useElementOnScreen(options) {
  const [isVisible, setIsVisible] = useState(false);
  const observedElRef = useRef(null);

  function callback(entries) {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (observedElRef.current) {
      observer.observe(observedElRef.current);
    }
    // cleanup
    return () => {
      if (observedElRef.current) observer.unobserve(observedElRef.current);
    };
  }, [observedElRef, options]);

  return [isVisible, observedElRef];
}
