import { gsap } from "gsap";

import { useEffect, useLayoutEffect } from "react";

const useReveal = (elementRef, containerRef, animationFrom, animationTo) => {
  useLayoutEffect(() => {
    const container =
      containerRef.type === "class"
        ? containerRef.ref
        : containerRef.ref.current;

    let ctx = gsap.context(() => {
      const element =
        elementRef.type === "class" ? elementRef.ref : elementRef.ref.current;

      gsap.fromTo(element, animationFrom, animationTo);
    }, container);

    return () => ctx.kill();
  }, [elementRef, containerRef, animationFrom, animationTo]);
};

export default useReveal;
