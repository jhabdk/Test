import type { JSX } from "react";

export const View = ({
  className,
  children,
}: {
  className?: string;
  children?: JSX.Element;
}) => {
  return <div className={className}>{children}</div>;
};
