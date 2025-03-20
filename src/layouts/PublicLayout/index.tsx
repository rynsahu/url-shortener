import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="public_layout bg-[#0b0809] dark min-h-screen text-white">
      <Outlet />
    </div>
  );
}

export default PublicLayout;