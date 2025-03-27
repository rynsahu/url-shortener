import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import SignUpForm from "../Forms/SignUpForm";
import { Link } from "react-router-dom";
import AppLogo from "../AppLogo";

const SignUp = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <Card className="w-full max-w-[500px]">
        {/*  */}
        <CardHeader>
          <div className="flex items-center justify-center mb-5">
            <AppLogo />
          </div>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create your account to get started.</CardDescription>
        </CardHeader>
        {/*  */}
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
      
      <p className="text-sm">
        Already have an account? Please <Link className="text-blue-500 hover:underline" to="/login">Login</Link>.
      </p>
    </div>
  );
}
 
export default React.memo(SignUp);