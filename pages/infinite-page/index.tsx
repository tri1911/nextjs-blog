import React, { useEffect, useState } from "react";

const DetectedBox = ({ id }: { id: string }) => {
  useEffect(() => {
    console.log(`Box ${id} is rendered...`);
  }, []);
  return (
    <div className="bg-lime-500 h-80 w-80 my-5 mx-auto py-36 text-white uppercase font-bold text-5xl text-center">
      Box {id}
    </div>
  );
};

const InfinitePage = () => {
  return (
    <div>
      <DetectedBox id="1" />
      <DetectedBox id="2" />
      <DetectedBox id="3" />
    </div>
  );
};

export default InfinitePage;
