import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { DatePicker } from "./ui/datePicker";

const Summary = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  return (
    <div className="w-full h-80 box grid p-3 grid-cols-3 gap-3 shadow-sm border-1 border-slate-300">
      <div className="col-span-2 bg-white h-full rounded-md border-1 border-slate-300 inset-shadow-xs"></div>
      <div className="col-span-1 h-full">
        <div className="w-full text-center">{date.toLocaleDateString()}</div>
        <div className="mx-auto w-fit mt-3">
          <DatePicker date={date} setDate={setDate} />
        </div>
      </div>
    </div>
  );
};

export default Summary;
