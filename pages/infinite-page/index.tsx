import React, { useEffect, useRef, useState } from "react";

const useDetectOnScreen = (
  ref: any,
  onScreenHandler: any,
  offScreenHandler: any
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // initialize observer
    const observer = new IntersectionObserver(
      (entries: any) => {
        setIsVisible(entries[0].isIntersecting);
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

const DetectedBox = ({ id }: { id: string }) => {
  const boxRef = useRef(null);

  useDetectOnScreen(
    boxRef,
    () => console.log(`box ${id} is on screen`),
    () => console.log(`box ${id} is on screen`)
  );

  return (
    <div
      ref={boxRef}
      className="bg-lime-500 h-80 w-80 my-96 mx-auto py-36 text-white uppercase font-bold text-5xl text-center"
    >
      Box {id}
    </div>
  );
};

const InfinitePage = () => {
  return (
    <div>
      <DetectedBox id="1" />
      <DetectedBox id="2" />
    </div>
  );
};

export default InfinitePage;
