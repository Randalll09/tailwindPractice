import { ChartLine, Home, Search } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full pt-5 text-slate-700">
      <header className="w-full h-fit py-4 bg-slate-50 shadow-sm border-1 border-slate-300 px-5 rounded-full flex flex-row justify-between gap-3">
        <div className="flex gap-4">
          <div className="flex">
            <Home className="stroke-slate-700 mr-1" strokeWidth={1} />
            <p>HOME</p>
          </div>
          <div className="flex">
            <ChartLine className="stroke-slate-700 mr-1" strokeWidth={1} />
            <p>DASHBOARD</p>
          </div>
        </div>
        <div className="flex">
          <input className="w-40 h-5 border-b-1" type="text" />
          <Search className="stroke-slate-700" strokeWidth={1} />
        </div>
      </header>
    </div>
  );
};

export default Header;
