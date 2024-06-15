"use client";

import ActionSubmitButton from "@/app/(withCommonLayout)/components/submitButton/ActionSubmitButton";
import { Button, Input, ModalFooter } from "@nextui-org/react";
import { LinkIcon, MailIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { updateUserProfile } from "../../userAction/action";

const UpdateUserInfoForm = ({ name, email, profilePhoto, onClose }: any) => {
  const router = useRouter();
  const [state, formAction] = useFormState(updateUserProfile, null);

  useEffect(() => {
    if (state && state?.success) {
      toast.success("Successfully updated your info!", {
        id: 1,
        duration: 2000,
      });
      router.push("/dashboard");
    }
    if (state && !state?.success) {
      toast.error(state?.message, { id: 1, duration: 2000 });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, router]);

  return (
    <form
      action={formAction}
      className="flex flex-col justify-center items-center gap-4 mt-4 px-4"
    >
      <Input
        endContent={
          <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="text"
        name="name"
        label="Username"
        // placeholder={name}
        defaultValue={name}
        variant="bordered"
      />
      <Input
        endContent={
          <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="email"
        name="email"
        label="Email"
        // placeholder={email}
        defaultValue={email}
        variant="bordered"
      />
      <Input
        endContent={
          <LinkIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="text"
        name="profilePhoto"
        label="Profile Photo"
        // placeholder={profilePhoto}
        defaultValue={profilePhoto}
        variant="bordered"
      />
      <ModalFooter className="mt-4">
        <Button onClick={() => onClose()}>Cancel</Button>
        <ActionSubmitButton>Save</ActionSubmitButton>
      </ModalFooter>
    </form>
  );
};

export default UpdateUserInfoForm;
