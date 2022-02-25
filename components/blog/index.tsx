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
  return <JSONPrint obj={props} block={`ProTip`} />;
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
