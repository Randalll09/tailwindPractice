import Header from "./components/Header";
import Summary from "./components/Summary";
import Todo from "./components/Todo";
import { Calendar } from "./components/ui/calendar";

function App() {
  return (
    <div className="w-full h-[100vh] space-y-6 px-10">
      <Header />
      <Summary />
      <div className="grid grid-cols-3 gap-6">
        <Todo />
        <div className="box w-full"></div>
        <div className="box w-full"></div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
