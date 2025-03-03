import { SIDE_NAV_LINKS } from "@/constants/navigation";
import { NavLink } from "react-router-dom";
 
const SideNavBody = () => {
  return (
    <nav className="flex-1 flex flex-col gap-3 overflow-y-scroll">
      <ul className="flex flex-col gap-1 my-4">
        {SIDE_NAV_LINKS.map((item) => (
          <li key={item.label}>
            <NavLink 
              to={item.path}
              className={({ isActive }) => `py-1 px-2 flex items-center hover:bg-zinc-100 rounded-md ${isActive ? 'bg-zinc-100 font-semibold' : 'text-zinc-500' }`}
            >
              <span className="text-[inherit]">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
 
export default SideNavBody;