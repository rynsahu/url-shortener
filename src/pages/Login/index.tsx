import AppLogo from "@/components/AppLogo";
import Login from "@/components/Login";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center gap-8 h-screen p-6 pt-[80px]">
      <AppLogo />
      <Login />
    </div>
  )
}

export default LoginPage;