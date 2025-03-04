import SideNavHeader from "./SideNavHeader";
import SideNavFooter from "./SideNavFooter";
import SideNavBody from "./SideNavBody";

const SideNav: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col p-2 bg-zinc-50 w-[255px] border-r border-r-zinc-200 text-zinc-700 text-sm">
      <SideNavHeader />
      <SideNavBody />
      <SideNavFooter />
    </div>
  );
}

export default SideNav;
