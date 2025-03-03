import { Input } from "@/components/ui/input";
import FormField from "../FormField";

interface CreateLinkProps {
  pen?: string;
}
 
const CreateLink: React.FC<CreateLinkProps> = () => {
  return (
    <div className="flex flex-col gap-4 p-4 border border-zinc-200 rounded-lg">
      <FormField name="destination" label="Destination">
        <Input name="destination" />
      </FormField>

      <FormField 
        name="title" 
        label={<span><span className="font-semibold">Tile</span> (Optional)</span>}
      >
        <Input name="title" />
      </FormField>

      <p className="font-bold text-xl">Short link</p>

      <div className="flex space-between gap-4 items-center full">
        <FormField name="destination" label="Destination">
          <Input name="destination" value="shortly.aryansahu.com" disabled />
        </FormField>

        <span className="mt-6">/</span>

        <FormField 
          name="customBackHalf" 
          label={<span><span className="font-semibold">Custom back-half</span> (Optional)</span>}
        >
          <Input name="customBackHalf" />
        </FormField>
      </div>
    </div>
  );
}
 
export default CreateLink;