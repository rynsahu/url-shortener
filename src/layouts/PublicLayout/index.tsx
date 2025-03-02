import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="public_layout">
      <h1>Public route</h1>
      <Outlet />
    </div>
  );
}

export default PublicLayout;