import { CalendarDays, ChartNoAxesColumn } from "lucide-react";
import { Link } from "react-router-dom";

const LinkAnalytics = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-3 text-xs mt-4'>
      {/* Engagement */}
      <div className='flex gap-1 items-center'>
        <ChartNoAxesColumn size={16} />
        <Link to='#' className='hover:underline'>
          {2} engagement
        </Link>
      </div>
      {/* date */}
      <div className='flex gap-1 items-center'>
        <CalendarDays size={16} />
        <Link to='#' className='hover:underline'>
          {2} engagement
        </Link>
      </div>
    </div>
  );
};

export default LinkAnalytics;
