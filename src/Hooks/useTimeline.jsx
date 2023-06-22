import { gsap } from "gsap";

import { useEffect, useLayoutEffect } from "react";

const useTimeline = (containerRef, timeLineArr) => {
  useLayoutEffect(() => {
    const container =
      containerRef.type === "class"
        ? containerRef.ref
        : containerRef.ref.current;

    let ctx = gsap.context(() => {
      const timeLine = gsap.timeline();

      timeLineArr.forEach((animation) => {
        if (animation.type === "from") {
          timeLine.from(animation.ref.current, animation.animation);
        } else if (animation.type === "to") {
          timeLine.to(animation.ref.current, animation.animation);
        }
      });
    }, container);

    return () => ctx.kill();
  }, [containerRef, timeLineArr]);
};

export default useTimeline;
