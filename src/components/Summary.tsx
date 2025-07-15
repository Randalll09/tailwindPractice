import {useState} from "react";
import {Calendar} from "./ui/calendar";
import {DatePicker} from "./ui/datePicker";

const Summary = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  return (
    <div className="grid w-full grid-cols-3 gap-3 p-3 shadow-sm h-80 box border-1 border-slate-300">
      <div className="h-full col-span-2 bg-white rounded-md border-1 border-slate-300 inset-shadow-xs"></div>
      <div className="h-full col-span-1">
        <div className="w-full text-center">{date.toLocaleDateString()}</div>
        <div className="mx-auto mt-3 w-fit">
          <DatePicker date={date} setDate={setDate} />
        </div>
      </div>
    </div>
  );
};

export default Summary;
