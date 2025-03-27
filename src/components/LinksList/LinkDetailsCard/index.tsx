import { Link } from "react-router-dom";
import { Earth } from "lucide-react";
import LinkAction from "../LinkAction";
import LinkAnalytics from "../LinkAnalytics";
import React from "react";
import { Url } from "@/types/apiResponse";
import { getShortUrl } from "@/lib/utils";

const LinkDetailsCard = ({ link }: { link: Url }) => {
  return (
    <div className='flex gap-3 border border-zinc-200 p-6 rounded-lg w-full'>
      {/* Icon */}
      <section className='flex border border-zinc-200 rounded-full h-[30px] lg:h-[35px] w-[30px] lg:w-[35px] p-1 flex justify-center items-center'>
        <Earth size={36} />
      </section>
      {/* Content */}
      <section className='flex-1 flex flex-col gap-2 text-sm'>
        <div className='flex gap-3 justify-between'>
          {/* Title */}
          <Link
            to={`/links/${link.short_url_id}`}
            className='text-lg font-bold hover:underline line-clamp-1 break-all'
          >
            {link.title || link.short_url_id}
          </Link>
          <LinkAction className='hidden lg:flex' />
        </div>
    
        <div className='flex flex-col gap-1'>
          {/* Short URL */}
          <Link
            to={getShortUrl(link.short_url_id).url}
            className='text-blue-500 hover:underline line-clamp-1 break-all'
            target="_blank"
          >
            {getShortUrl(link.short_url_id).label}
          </Link>
          {/* Long URL */}
          <Link
            to={link.long_url}
            target="_blank"
            className='text-zinc-600 hover:underline line-clamp-1 break-all'
          >
            {link.long_url}
          </Link>
        </div>

        <LinkAnalytics />

        <LinkAction className='lg:hidden mt-5' />
      </section>
    </div>
  );
};

export default React.memo(LinkDetailsCard);
