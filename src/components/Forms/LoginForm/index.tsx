import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/common/Form/FormField";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect } from "react";
import { LOGIN_FORM_FIELD, LoginActionState } from "./type";
import LoginAction from "./action";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const initialState: LoginActionState = {
  success: false,
  message: '',
  error: null,
};

const LoginForm = () => {
  const [state, LoginFromAction, isPending] = useActionState(LoginAction, initialState);
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
      action={LoginFromAction}
    >
      <div className="flex flex-col gap-4">
        <FormField label="Email" name={LOGIN_FORM_FIELD.EMAIL}>
          <Input id="email" name={LOGIN_FORM_FIELD.EMAIL} type="email" placeholder="fun@gmail.com" required />
        </FormField>
        <FormField label="Password" name={LOGIN_FORM_FIELD.PASSWORD}>
          <Input id="password" name={LOGIN_FORM_FIELD.PASSWORD} type="password" placeholder="password" required />
        </FormField>
      </div>

      <div className="flex gap-4 mt-4 ml-auto">
        <Button type='button' variant="outline">Cancel</Button>
        <Button type='submit' isLoading={isPending}>Login</Button>
      </div>
    </form>
  );
}
 
export default LoginForm;
