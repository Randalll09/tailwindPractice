import {ChartLine, Home} from "lucide-react";
import {Switch} from "./ui/switch";
import {useThemeStore} from "../utils/storage";
const Header = () => {
  const {theme, toggleTheme} = useThemeStore();
  return (
    <div className="w-full pt-5 text-slate-700 dark:text-slate-50">
      <header className="flex flex-row justify-between w-full gap-3 px-5 py-4 rounded-full shadow-sm h-fit dark:bg-slate-900 bg-slate-50 border-1 border-slate-300">
        <div className="flex gap-4">
          <div className="flex">
            <Home
              className="mr-1 stroke-slate-700 dark:stroke-slate-50"
              strokeWidth={1}
            />
            <p>HOME</p>
          </div>
          <div className="flex">
            <ChartLine
              className="mr-1 stroke-slate-700 dark:stroke-slate-50"
              strokeWidth={1}
            />
            <p>DASHBOARD</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>Theme</p>
          <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
        </div>
        {/* <div className="flex">
          <input className="w-40 h-5 border-b-1" type="text" />
          <Search className="stroke-slate-700" strokeWidth={1} />
        </div> */}
      </header>
    </div>
  );
};

export default Header;
