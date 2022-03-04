import React, { useEffect, useRef, useState } from "react";

type Fn<T extends any[], R> = (...t: T) => R;

const useDetectOnScreen = (
  ref: React.RefObject<HTMLElement>,
  onScreenHandler: Fn<[], void>,
  offScreenHandler: Fn<[], void>
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // initialize observer
    const observer = new IntersectionObserver(
      ([entry]: any) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: [0] }
    );

    // subscribe
    ref.current && observer.observe(ref.current);

    return () => {
      // unsubscribe
      ref.current && observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    isVisible ? onScreenHandler() : offScreenHandler();
  }, [isVisible]);
};

const InfinitePage = () => {
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(10);

  useDetectOnScreen(
    loadMoreRef,
    () => {
      console.log(`load more element is on screen`);
      setCount(count + 1);
    },
    () => {
      console.log(`load more element is off screen`);
    }
  );

  const arr = [...Array(count).keys()];
  console.log(arr);

  return (
    <div className={``}>
      {arr.map((id) => (
        <div
          key={id}
          className="bg-lime-500 font-bold uppercase text-center leading-10 text-white my-4"
        >
          element {`${id}`}
        </div>
      ))}
      <div
        ref={loadMoreRef}
        className="bg-orange-500 h-7 mt-96 text-white uppercase font-bold text-lg text-center"
      >
        Load More
      </div>
    </div>
  );
};

export default InfinitePage;
