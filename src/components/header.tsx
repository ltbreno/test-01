import { DatePickerWithRange } from "./ui/date";
import { Input } from "./ui/input";

export default function Header() {
    return (
      <div className="flex justify-center h-20">
        <div className="flex items-center justify-between w-11/12">
          <h1 className="text-black">Dashboard</h1>
          <DatePickerWithRange />
        </div>
      </div>
    );
  }