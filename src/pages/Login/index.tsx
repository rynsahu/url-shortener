import AppLogo from "@/components/AppLogo";
import SignUp from "@/components/SignUp";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center gap-8 h-screen p-6 pt-[80px]">
      <AppLogo />
      <SignUp />
    </div>
  )
}

export default SignUpPage;