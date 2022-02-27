import React from "react";

const Display = ({ children }) => {
  return (
    <div className="w-full h-28 mb-3 py-0 px-4 bg-sky-800 rounded-lg flex flex-col items-end justify-around text-white box-border">
      {children}
    </div>
  );
};

export const Total = ({ value }) => {
  return <div className="text-5xl font-semibold">{value}</div>;
};

export const Current = ({ value }) => {
  return <div className="text-2xl font-normal">{value}</div>;
};

export default Display;
