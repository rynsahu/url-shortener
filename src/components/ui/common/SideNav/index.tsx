import SideNavHeader from "./SideNavHeader";
import SideNavFooter from "./SideNavFooter";
import SideNavBody from "./SideNavBody";
import React, { useContext } from "react";
import { SidenavContext } from "@/contexts/sidenavContext";

const SideNav: React.FC = () => {
  const { visible } = useContext(SidenavContext);

  return (
    <div 
      className={`relative h-screen hidden lg:flex flex-col p-2 bg-zinc-50 border-r border-r-zinc-200 text-zinc-700 text-sm`}
      style={{
        translate: visible ? 'initial' : '-255px',
        width: visible ? '255px' : '0px',

        transitionProperty: 'translate, width',
        transitionDelay: '0',
        transitionDuration: '300ms',
        transitionTimingFunction: 'ease-in-out',
      }}
    >
      <SideNavHeader />
      <SideNavBody />
      <SideNavFooter />
    </div>
  );
}

export default React.memo(SideNav);
