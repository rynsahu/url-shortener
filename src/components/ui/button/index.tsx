import { VariantProps } from "class-variance-authority";
import { buttonVariants, Button as ButtonComponent } from "./button";
import { Loader } from "lucide-react";
 
const Button = ({ children, isLoading, disabled, ...props }: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    isLoading?: boolean;
  }) => {
  return (
    <ButtonComponent disabled={isLoading || disabled} {...props}>
      {isLoading && <Loader className="animate-spin" />}
      {children}
    </ButtonComponent>
  );
}
 
export { Button };