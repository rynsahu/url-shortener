import { Link } from "react-router-dom";
import { Earth } from "lucide-react";
import LinkAction from "../LinkAction";
import LinkAnalytics from "../LinkAnalytics";
import React from "react";

const LinkDetailsCard = () => {
  return (
    <div className='flex gap-3 border border-zinc-200 p-4 rounded-lg w-full'>
      {/* Icon */}
      <div className='flex border border-zinc-200 rounded-full h-[30px] lg:h-[35px] w-[30px] lg:w-[35px] p-1 flex justify-center items-center'>
        <Earth size={36} />
      </div>
      {/* Content */}
      <div className='flex-1 flex flex-col gap-2 text-sm'>
        <div className='flex gap-3 justify-between'>
          <Link
            to='/link/1'
            className='text-lg font-bold hover:underline line-clamp-1 break-all'
          >
            JS FlashNotes 🔥
          </Link>
          <LinkAction className='hidden lg:flex' />
        </div>

        <div className='flex flex-col gap-1'>
          <Link
            to='/link/1'
            className='text-blue-500 hover:underline line-clamp-1 break-all'
          >
            shortly.aryansahu.com/js-flash-notes
          </Link>
          <Link
            to='/link/1'
            className='text-zinc-600 hover:underline line-clamp-1 break-all'
          >
            https://witty-legal-efa.notion.site/JavaScript-19ade47442e480408846f0cc17fe6b3c
          </Link>
        </div>

        <LinkAnalytics />

        <LinkAction className='lg:hidden mt-5' />
      </div>
    </div>
  );
};

export default React.memo(LinkDetailsCard);
