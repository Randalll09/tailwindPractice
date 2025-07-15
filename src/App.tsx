import Header from "./components/Header";
import Summary from "./components/Summary";
import Todo from "./components/Todo";
import {useState, useEffect} from "react";
import {useThemeStore} from "./utils/storage";
function App() {
  const {theme} = useThemeStore();

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="w-full h-[100vh] space-y-6 px-10">
      <Header />
      <Summary />
      <div className="grid grid-cols-3 gap-6">
        <Todo />
        <div className="w-full box"></div>
        <div className="w-full box"></div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
