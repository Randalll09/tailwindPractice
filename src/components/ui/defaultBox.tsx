const DefaultBox = ({children}: {children: any}) => {
  return (
    <div className="p-5 rounded-lg bg-box-bg border-1 h-fit border-slate-300">
      {children}
    </div>
  );
};

export default DefaultBox;
