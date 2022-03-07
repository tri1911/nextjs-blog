import { useEffect } from "react";

type Fn<T extends any[], R> = (...t: T) => R;

export default function useDetectOnScreen(
  ref: React.RefObject<HTMLElement>,
  onScreenHandler: Fn<[], void>,
  offScreenHandler: Fn<[], void>
) {
  useEffect(() => {
    // initialize observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? onScreenHandler() : offScreenHandler();
      },
      { threshold: [1] }
    );

    // subscribe
    ref.current && observer.observe(ref.current);

    return () => {
      // unsubscribe
      ref.current && observer.unobserve(ref.current);
    };
  }, [onScreenHandler, offScreenHandler]);
}
