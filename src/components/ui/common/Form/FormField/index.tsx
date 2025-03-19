interface FormFieldProps {
  children: React.ReactElement;
  label?: string | React.ReactElement;
  name: string;
  subText?: string;
}
 
const FormField: React.FC<FormFieldProps> = ({ children, label, subText, name }) => {
  return (
    <div className="flex flex-col gap-2 w-full text-sm">
      {label && (
        <label className="flex gap-1 items-center" htmlFor={name}>
          <span className={subText ? 'font-semibold' : ''}>{label}</span>
          {subText && <span>{subText}</span>}
        </label>
      )}
      {children}
    </div>
  );
}
 
export default FormField;