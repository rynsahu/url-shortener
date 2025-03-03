interface FormFieldProps {
  children: React.ReactElement;
  label?: string | React.ReactElement;
  name?: string;
}
 
const FormField: React.FC<FormFieldProps> = ({ children, label, name }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label htmlFor={name}>{label}</label>}
      {children}
    </div>
  );
}
 
export default FormField;