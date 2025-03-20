import { Input } from "@/components/ui/input";
import FormField from "../../ui/common/Form/FormField";
import { Button } from "@/components/ui/button";
import React, { useActionState, useEffect } from "react";
import { createLinkAction } from "./actions";
import { CREATE_LINK_FORM_FIELD, CreateLinkActionState } from "./types";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const formInitialValues: CreateLinkActionState = {
  success: false,
  error: null
}
 
const CreateLinkForm = () => {
  const [state, createLinkFromAction, isPending] = useActionState<CreateLinkActionState, FormData>(createLinkAction, formInitialValues);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.success) {
      toast.success('Link created successfully!');
      navigate('/links');
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state.success, navigate, state.message]);

  return (
    <form 
      className="flex flex-col gap-6 p-6 border border-zinc-200 rounded-lg"
      action={createLinkFromAction}
    >
      <FormField name={CREATE_LINK_FORM_FIELD.DESTINATION} label="Destination*">
        <Input name={CREATE_LINK_FORM_FIELD.DESTINATION} type="ur" required/>
      </FormField>

      <FormField 
        name={CREATE_LINK_FORM_FIELD.TITLE} 
        label="Title"
        subText="(Optional)"
      >
        <Input name={CREATE_LINK_FORM_FIELD.TITLE} type="text" />
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

      <div className="flex justify-between gap-4 mt-2 ml-auto">
        <Button type="button" variant='outline'>Cancel</Button>
        <Button type="submit" isLoading={isPending} >Create your link</Button>
      </div>
    </form>
  );
}
 
export default React.memo(CreateLinkForm);