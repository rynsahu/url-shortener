import { Input } from "@/components/ui/input";
import FormField from "../../ui/common/Form/FormField";
import { Button } from "@/components/ui/button";
import React, { useActionState, useEffect } from "react";
import { createLink } from "./actions";
import { CREATE_LINK_FORM_FIELD, CreateLinkActionState } from "./types";
import { toast } from "sonner";

interface CreateLinkFormProps {
  pen?: string;
}

const formInitialValues: CreateLinkActionState = {
  success: false,
  error: null
}
 
const CreateLinkForm: React.FC<CreateLinkFormProps> = () => {
  const [state, createLinkAction, isPending] = useActionState<CreateLinkActionState, FormData>(createLink, formInitialValues);

  useEffect(() => {
    if (state.error) {
      toast.error(state.error.message);
    }
    if (state.success) {
      toast.success('Link created successfully!');
    }
  }, [state.success, state.error]);

  console.log('CreateLinkForm render');

  return (
    <form 
      className="flex flex-col gap-6 p-6 border border-zinc-200 rounded-lg"
      action={createLinkAction}
    >
      <FormField name={CREATE_LINK_FORM_FIELD.DESTINATION} label="Destination*">
        <Input name={CREATE_LINK_FORM_FIELD.DESTINATION} />
      </FormField>

      <FormField 
        name={CREATE_LINK_FORM_FIELD.TITLE} 
        label="Title"
        subText="(Optional)"
      >
        <Input name={CREATE_LINK_FORM_FIELD.TITLE} />
      </FormField>

      <p className="font-bold text-xl">Short link</p>

      <div className="flex flex-col lg:flex-row space-between gap-4 items-center w-full">
        <FormField name={CREATE_LINK_FORM_FIELD.DOMAIN} label="Domain">
          <Input name={CREATE_LINK_FORM_FIELD.DOMAIN} value="shortly.aryansahu.com" className="bg-zinc-200" disabled />
        </FormField>

        <span className="mt-6 hidden lg:block">/</span>

        <FormField 
          name={CREATE_LINK_FORM_FIELD.CUSTOM_BACK_HALF} 
          label="Custom back-half"
          subText="(Optional)"
        >
          <Input name={CREATE_LINK_FORM_FIELD.CUSTOM_BACK_HALF} />
        </FormField>
      </div>

      <div className="flex gap-4 w-full mt-2">
        <Button type="button" variant='outline' className="ml-auto">Cancel</Button>
        <Button type="submit" isLoading={isPending} >Create your link</Button>
      </div>
    </form>
  );
}
 
export default React.memo(CreateLinkForm);