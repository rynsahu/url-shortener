import React from "react";
import LinkDetailsCard from "./LinkDetailsCard";

const LinksList = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <LinkDetailsCard />
      <LinkDetailsCard />
      <LinkDetailsCard />
      <LinkDetailsCard />
    </div>
  );
}
 
export default React.memo(LinksList);