const DefaultBox = ({
  children,
  className = "",
}: {
  children?: any;
  className?: string;
}) => {
  return (
    <div
      className={`p-5 rounded-lg bg-box-bg border-1 border-slate-300 text-txt ${className}`}>
      {children}
    </div>
  );
};

export default DefaultBox;
