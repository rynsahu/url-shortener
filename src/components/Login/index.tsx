import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import LoginForm from "../Forms/LoginForm";
import AppLogo from "../AppLogo";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <Card className="w-full max-w-[500px]">
        {/*  */}
        <CardHeader>
          <div className="flex items-center justify-center mb-5">
            <AppLogo />
          </div>
          <CardTitle>Log In</CardTitle>
          {/* This message is better but it's too long */}
          <CardDescription>Welcome back! Please enter your credentials.</CardDescription>
        </CardHeader>
        {/*  */}
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>

      <p className="text-sm">
        Don't have an account? Please <Link className="text-blue-500 hover:underline" to="/signup">Sign Up</Link>.
      </p>
    </div>
  );
}
 
export default React.memo(Login);