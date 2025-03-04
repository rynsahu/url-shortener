import { Input } from "@/components/ui/input";
import FormField from "../../ui/common/Form/FormField";
import { Button } from "@/components/ui/button";

interface CreateLinkFormProps {
  pen?: string;
}
 
const CreateLinkForm: React.FC<CreateLinkFormProps> = () => {
  return (
    <div className="flex flex-col gap-4 p-4 border border-zinc-200 rounded-lg">
      <FormField name="destination" label="Destination">
        <Input name="destination" />
      </FormField>

      <FormField 
        name="title" 
        label="Title"
        subText="(Optional)"
      >
        <Input name="title" />
      </FormField>

      <p className="font-bold text-xl">Short link</p>

      <div className="flex space-between gap-4 items-center w-full">
        <FormField name="destination" label="Destination">
          <Input name="destination" value="shortly.aryansahu.com" disabled />
        </FormField>

        <span className="mt-6">/</span>

        <FormField 
          name="customBackHalf" 
          label="Custom back-half"
          subText="(Optional)"
        >
          <Input name="customBackHalf" />
        </FormField>
      </div>

      <div className="flex gap-4 w-full mt-2">
        <Button variant='outline' className="ml-auto">Cancel</Button>
        <Button>Create your link</Button>
      </div>
    </div>
  );
}
 
export default CreateLinkForm;