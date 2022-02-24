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
    <div className={``}>
      <div className={``}>Key Learnings</div>
      {props.children}
    </div>
  );
}

export function BlogImage(props: any) {
  const { Reference } = props;
  let removedReferenceProps = { ...props };
  delete removedReferenceProps.Reference;

  // Need special handling because cannont JSON serialize props.Reference
  return (
    <JSONPrint obj={{ ...removedReferenceProps }} block={`BlogImage`}>
      <Reference />
    </JSONPrint>
  );
}

export function ImageReference(props: any) {
  return <JSONPrint obj={props} block={`ImageReference`} />;
}
