import { ChevronsUpDown } from "lucide-react";

const SideNavFooter = () => {
  return (
    <div className="sticky bottom-2 p-2 bg-zinc-50 rounded-md hover:bg-zinc-100">
      <button className="flex items-center gap-2 w-full cursor-pointer">
        <div className="flex w-[32px] h-[32px] bg-zinc-950 rounded-lg overflow-hidden">
          <img
            src="/avatar.jpg"
          />
        </div>
        <div className="flex-1 flex flex-col items-start">
          <span className="font-semibold">testuser</span>
          <small className="text-xs mt-[-2px]">rynsahu@example.com</small>
        </div>
        <ChevronsUpDown size={16} />
      </button>
    </div>
  );
}
 
export default SideNavFooter;