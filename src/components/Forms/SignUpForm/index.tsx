import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/common/Form/FormField";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect } from "react";
import { SIGNUP_FORM_FIELD, SignupActionState } from "./type";
import signupAction from "./action";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const initialState: SignupActionState = {
  success: false,
  message: '',
  error: null,
};

const SignUpForm = () => {
  const [state, signupFromAction] = useActionState(signupAction, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.success) {
      navigate('/home');
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state.success, state.message,navigate]);

  return (
    <form 
      className="flex flex-col gap-6"
      action={signupFromAction}
    >
      <div className="flex flex-col gap-4">
        <FormField label="Email" name={SIGNUP_FORM_FIELD.EMAIL}>
          <Input id="email" type="email" placeholder="fun@gmail.com" required />
        </FormField>
        <FormField label="Password" name={SIGNUP_FORM_FIELD.PASSWORD}>
          <Input id="password" type="password" placeholder="password" required />
        </FormField>
      </div>

      <div className="flex gap-4 mt-4 ml-auto">
        <Button type='button' variant="outline">Cancel</Button>
        <Button type='submit'>Sign Up</Button>
      </div>
    </form>
  );
}
 
export default SignUpForm;
