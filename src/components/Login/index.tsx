import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import LoginForm from "../Forms/LoginForm";

const Login = () => {
  return (
    <Card className="w-full max-w-[550px]">
      {/*  */}
      <CardHeader>
        <CardTitle>Log In</CardTitle>
        <CardDescription>Access your account to continue.</CardDescription>
      </CardHeader>
      {/*  */}
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
 
export default React.memo(Login);