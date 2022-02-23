import React from "react";

type Fn<T extends any[], R> = (...t: T) => R;

function noop() {}

function Button({ text, onClick }: { text: string; onClick: Fn<[], void> }) {
  return (
    <button
      className={`p-4 w-full rounded-lg text-white bg-blue-700 text-center
         hover:bg-blue-600 active:bg-blue-600
        `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

type Clickable = { id: string; text: string; onClick: Fn<[], void> };
function ButtonRow({ clickables }: { clickables: Clickable[] }) {
  return (
    <div className={`flex gap-2 font-semibold`}>
      {clickables.map((c) => (
        <div key={c.id} className={`flex-1`}>
          <Button {...{ text: c.text, onClick: c.onClick }} />
        </div>
      ))}
    </div>
  );
}

const calculatorLayout = [
  [
    [7, "num"],
    [8, "num"],
    [9, "num"],
  ],
  [
    [4, "num"],
    [5, "num"],
    [6, "num"],
  ],
  [
    [1, "num"],
    [2, "num"],
    [3, "num"],
  ],
  [
    ["+", "add"],
    [0, "num"],
    ["-", "sub"],
  ],
];

export function Calculator() {
  const clickables = calculatorLayout.map((row) =>
    row.map(([label, op]) => ({
      id: "" + label,
      text: "" + label,
      onClick: () => alert(label),
    }))
  );

  return (
    <div className={`w-48`}>
      {clickables.map((row, i) => (
        <div key={`row-${i}`} className={`m-2`}>
          <ButtonRow clickables={row} />
        </div>
      ))}
    </div>
  );
}
