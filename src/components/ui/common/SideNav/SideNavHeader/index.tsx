import AppLogo from "@/components/AppLogo";
import { Link } from "react-router-dom";
 
const SideNavHeader = () => {
  return (
      <Link to='/home' className="flex items-center sticky top-0 p-2 bg-zinc-50 hover:bg-zinc-100 rounded-md">
        <AppLogo />
      </Link>
  );
}
 
export default SideNavHeader;