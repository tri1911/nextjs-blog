import React, { useEffect, useRef, useState } from "react";

const DetectedBox = ({ id }: { id: string }) => {
  const boxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log(`Box ${id} is rendered...`);
    // initialize observer
    const observer = new IntersectionObserver(
      (entries: any) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: [0] }
    );
    // subscribe
    console.log(`box ${id} is subscribing...`);
    boxRef.current && observer.observe(boxRef.current);
    return () => {
      // unsubscribe
      console.log(`box ${id} is unsubscribing...`);
      boxRef.current && observer.unobserve(boxRef.current);
    };
  }, []);

  useEffect(() => {
    console.log(
      isVisible ? `box ${id} is on screen` : `box ${id} is off screen`
    );
  }, [isVisible]);

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
