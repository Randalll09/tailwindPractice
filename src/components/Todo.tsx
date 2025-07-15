import {Button} from "./ui/button";
import {Input} from "./ui/input";

const Todo = () => {
  return (
    <div className="flex flex-col w-full h-100 box">
      <h1 className="w-full mb-3">Todo</h1>
      <div className="flex items-center gap-2 mb-3">
        <Input className="bg-white border-1 border-slate-300" />
        <Button className="bg-white border-1 border-slate-300 text-slate-700">
          ADD
        </Button>
      </div>
      <div className="w-full h-full bg-white rounded-sm border-1 border-slate-300"></div>
    </div>
  );
};

export default Todo;
