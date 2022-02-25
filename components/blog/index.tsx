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
    <div className={`border-l-4 border-orange-300 py-4 px-8 my-8 mx-auto`}>
      <div className={`flex mb-6 items-center`}>
        <div className={``}>
          <div
            className={`uppercase text-sm font-semibold text-white bg-orange-400 rounded-sm pt-1 pb-3px px-1 leading-none`}
          >
            Pro Tip
          </div>
        </div>
        <div className={`flex-1`}>
          <div className={`text-2xl font-semibold pl-2 leading-tight`}>
            {props.title}
          </div>
        </div>
      </div>
      <div className={`pro-tip-content`}>{props.children}</div>
    </div>
  );
}

export function KeyLearnings(props: any) {
  return (
    <div className={`py-3 px-7 bg-orange-50`}>
      <h2 className={``}>
        <strong>Key Learnings</strong>
      </h2>
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
    <div className={`max-w-full mx-auto mt-8 mb-0 align-middle`}>
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
    <div className={`text-center text-gray-400 text-xs mt-2 mb-6`}>
      {"Source: "}
      <a className={``}>{props.text}</a>
    </div>
  );
}
