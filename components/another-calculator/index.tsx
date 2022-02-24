import React from "react";

type Fn<T extends any[], R> = (...t: T) => R;

const limeButtons = `bg-lime-700 hover:bg-lime-600 active:bg-lime-600`;
const blueButtons = `bg-blue-700 hover:bg-blue-600 active:bg-blue-600`;
function Button({
  text,
  onClick,
  color = "blue",
}: {
  text: string;
  onClick: Fn<[], void>;
  color?: "blue" | "lime";
}) {
  return (
    <button
      className={`p-4 w-full rounded-lg text-white text-center
         ${color === "lime" ? limeButtons : blueButtons}
        `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

type Clickable = {
  id: string;
  text: string;
  onClick: Fn<[], void>;
  color?: "blue" | "lime";
};
function ButtonRow({ clickables }: { clickables: Clickable[] }) {
  return (
    <div className={`flex gap-2 font-semibold`}>
      {clickables.map((c) => (
        <div key={c.id} className={`flex-1`}>
          <Button {...{ text: c.text, onClick: c.onClick, color: c.color }} />
        </div>
      ))}
    </div>
  );
}

type ButtonSpec = Num | Op;
type Num = { type: "num"; value: number };
type Ops = "add" | "sub";
type Op = { type: Ops; value: string };
function num(n: number): Num {
  return { type: "num", value: n };
}

const calculatorLayout: ButtonSpec[][] = [
  [num(7), num(8), num(9)],
  [num(4), num(5), num(6)],
  [num(1), num(2), num(3)],
  [{ type: "add", value: "+" }, num(0), { type: "sub", value: "-" }],
];

const defaultState = { total: 0, current: "" };

const opFn = {
  add: (a: number, b: number) => a + b,
  sub: (a: number, b: number) => a - b,
};

/***
 * Separate the calculator state logic from the layout/display
 */
function useCalculator() {
  const [state, setState] = React.useState(defaultState);

  const reset = () => setState(defaultState);

  const digitPressed = (d: number) =>
    setState((prevState) => ({
      ...prevState,
      // since current is a string, we can simply append a number to the end
      current: prevState.current + d,
    }));

  const opPressed = (op: Ops) =>
    setState((prevState) => ({
      // `+prevState.current` coerces a string into a number
      // - this is safe as long as we make sure `digitPressed` is always called with a number
      total: opFn[op](prevState.total, +prevState.current),
      current: "",
    }));

  return {
    state,
    actions: {
      reset,
      digitPressed,
      opPressed,
    },
  };
}

// This is just to demonstrate some useful utility types
// - React.ComponentProps allow you to extract the prop types of a component
// - Pick<T, P> selects part of T using its keys (P)
const Reset = ({
  onClick,
}: Pick<React.ComponentProps<typeof Button>, "onClick">) => (
  <Button text={"Clear"} onClick={onClick} />
);

function Display({ total, current }: { total: number; current: string }) {
  return (
    <div className={`flex gap-2`}>
      <input
        readOnly
        className={`py-2 min-w-0 flex-1 rounded text-center ${
          total < 0 ? "bg-red-500 text-white" : ""
        }`}
        type="text"
        value={total}
      />
      <input
        readOnly
        className={`py-2 min-w-0 flex-1 rounded text-center`}
        type="text"
        value={current}
      />
    </div>
  );
}

export function Calculator() {
  const { state, actions } = useCalculator();

  // convert from the spec to clickables
  const clickables = calculatorLayout.map((row) =>
    row.map((t) => ({
      id: "" + t.value,
      text: "" + t.value,
      color:
        // need "lime" as const to keep `color: "lime" | "blue"` happy
        t.type === "add" || t.type === "sub" ? ("lime" as const) : undefined,
      onClick:
        t.type === "num"
          ? () => actions.digitPressed(t.value)
          : () => actions.opPressed(t.type),
    }))
  );

  return (
    <div className={`w-48 bg-gray-200 p-4 rounded border-2 border-gray-700`}>
      <Display {...state} />
      <div className={``}>
        {clickables.map((row, i) => (
          <div key={`row-${i}`} className={`my-2`}>
            <ButtonRow clickables={row} />
          </div>
        ))}
        <Reset onClick={actions.reset} />
      </div>
    </div>
  );
}
