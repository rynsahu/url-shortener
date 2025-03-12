import { ChevronRight, PanelLeft } from "lucide-react";
import React from "react";
import { Fragment } from "react/jsx-runtime";

const PrivateHeader = () => {
  return (
    <div className="flex gap-2 items-center text-sm">
      <button className="cursor-pointer">
        <PanelLeft size={16} />
      </button>
      {/* ----- */}
      <div className="h-[16px] mx-2 border-l border-zinc-200"></div>
      {/* ----- */}
      <div className="flex gap-2 items-center">
        {['Home', 'Link'].map((item, index, arr) => (
          <Fragment key={`breadcrumb-${item}`}>
            <span className={`${index+1 !== arr.length ? 'text-zinc-500' : ''} `}>{item}</span>
            {index+1 !== arr.length && <ChevronRight size={16} color="#71717a" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
 
export default React.memo(PrivateHeader);