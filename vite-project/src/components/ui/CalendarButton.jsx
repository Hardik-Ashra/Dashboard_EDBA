import { Calendar,ChevronDown } from "lucide-react";
export const CalendarButton = ({ Text }) => {
    return (
      <div className="flex items-center gap-2 px-2 py-1 border-gray-400 border rounded-md text-sm text-gray-500">
        <Calendar size={16} />
        <span>{Text}</span>
        <ChevronDown size={16} />
      </div>
    );
  };