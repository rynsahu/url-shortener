import { Outlet } from "react-router-dom";

function PrivateLayout() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Private Layout</h1>
      <Outlet />
    </div>
  );
}

export default PrivateLayout;