import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="w-80 min-h-fit p-3 rounded-lg bg-gradient-to-b from-sky-700 to-sky-900">
      {children}
    </div>
  );
};

export default Wrapper;
