export const Text = ({
  className,
  children,
}: {
  className?: string;
  children?: string;
}) => {
  return <text className={className}>{children}</text>;
};
