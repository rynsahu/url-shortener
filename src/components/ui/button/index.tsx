import { VariantProps } from "class-variance-authority";
import { buttonVariants, Button as ButtonComponent } from "./button";
import { Loader } from "lucide-react";
 
const Button = ({ children, isLoading, ...props }: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    isLoading?: boolean;
  }) => {
  return (
    <ButtonComponent {...props}>
      {isLoading && <Loader className="animate-spin" />}
      {children}
    </ButtonComponent>
  );
}
 
export { Button };