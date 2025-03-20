import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import SignUpForm from "../Forms/SignUpForm";

const SignUp = () => {
  return (
    <Card className="w-full max-w-[550px]">
      {/*  */}
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create your account to get started.</CardDescription>
      </CardHeader>
      {/*  */}
      <CardContent>
        <SignUpForm />
      </CardContent>
    </Card>
  );
}
 
export default React.memo(SignUp);