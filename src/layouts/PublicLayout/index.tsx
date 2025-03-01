import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Public Layout</h1>
      <Outlet />
    </div>
  );
}

export default PublicLayout;