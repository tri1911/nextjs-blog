import React from "react";

function serialize(s: any) {
  return JSON.stringify(s, undefined, 2);
}

function JSONPrint({
  obj,
  block,
  children,
}: {
  obj: any;
  block: string;
  children?: React.ReactNode;
}) {
  const copyWithoutChildren = { ...obj };
  delete copyWithoutChildren.children;

  return (
    <div className={`px-4 my-4`}>
      <div className={`my-2`}>{block}</div>
      <pre className={`text-sm`}>{serialize(copyWithoutChildren)}</pre>
      {children ? <div className={`pl-4`}>{children}</div> : null}
    </div>
  );
}

export function ProTip(props: any) {
  // return <JSONPrint obj={props} block={`ProTip`} />;
  return (
    <div
      className={`block border-l-4 border-orange-300 py-6 px-8 my-9 mx-auto`}
    >
      <div className={`flex mb-6`}>
        <div>
          <div
            className={`uppercase text-sm font-semibold text-white bg-orange-500 rounded-sm p-1`}
          >
            Pro Tip
          </div>
        </div>
        <div className={`flex-1`}>
          <div className={`font-sans text-2xl font-semibold pl-2`}>
            {props.title}
          </div>
        </div>
      </div>
      <div className={`font-serif text-gray-900 text-xl mb-0`}>
        {props.children}
      </div>
    </div>
  );
}

export function KeyLearnings(props: any) {
  return (
    <div className={`py-3 px-6 bg-orange-50 block`}>
      <div className={`font-sans block mx-5 mt-7 mb-5 font-semibold text-2xl`}>
        Key Learnings
      </div>
      {props.children}
    </div>
  );
}

export function BlogImage(props: any) {
  const { Reference } = props;
  let removedReferenceProps = { ...props };
  delete removedReferenceProps.Reference;

  // Need special handling because cannot JSON serialize props.Reference
  /*
  return (
    <JSONPrint obj={{ ...removedReferenceProps }} block={`BlogImage`}>
      <Reference />
    </JSONPrint>
  );
  */

  return (
    <div className={`block max-w-2xl mx-auto mt-8 mb-0 align-middle font-sans`}>
      <img
        className={`h-auto max-w-full align-middle border-none`}
        src={props.src}
        alt={props.alt}
      />
      <Reference />
    </div>
  );
}

export function ImageReference(props: any) {
  // return <JSONPrint obj={props} block={`ImageReference`} />;
  return (
    <div className={`text-center text-gray-400 mt-2 mb-6 mx-4 text-xs`}>
      {"Source: "}
      <a
        className={`box-border bg-transparent text-blue-500 cursor-pointer no-underline transition-none hover:outline-none hover:underline`}
      >
        {props.text}
      </a>
    </div>
  );
}
