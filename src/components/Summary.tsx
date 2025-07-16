import {useState} from "react";
import {DatePicker} from "./ui/datePicker";
import DefaultBox from "./ui/defaultBox";

const Summary = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  return (
    <DefaultBox>
      <div className="grid w-full grid-cols-3 gap-3 h-80">
        <div className="h-full col-span-2 bg-white rounded-md border-1 border-slate-300 inset-shadow-xs"></div>
        <div className="h-full col-span-1">
          <div className="w-full text-center">{date.toLocaleDateString()}</div>
          <div className="mx-auto mt-3 w-fit">
            <DatePicker date={date} setDate={setDate} />
          </div>
        </div>
      </div>
    </DefaultBox>
  );
};

export default Summary;
