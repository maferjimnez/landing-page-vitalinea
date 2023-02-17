import React, { useState, useEffect, useRef } from "react";

const AnimatedItem = ({ from, to, children, transition }) => {
  const useElementOnScreen = (ref, rootMargin = "0px") => {
    const [isIntersecting, setIsIntersecting] = useState(true);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
    return isIntersecting;
  };

  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);

  return (
    <div
      ref={ref}
      style={
        !onScreen
          ? {
              ...transition,
              ...to,
            }
          : {
              ...transition,
              ...from,
            }
      }
    >
      {children}
    </div>
  );
};
export default AnimatedItem;
