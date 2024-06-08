"use client";

import { Input } from "@nextui-org/react";
import { createRef, useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { updateUserPassword } from "../../userAction/action";
import ActionSubmitButton from "@/app/(withCommonLayout)/components/submitButton/ActionSubmitButton";

const ChangePasswordForm = () => {
  const ref = createRef<HTMLFormElement>();
  const router = useRouter();
  const [state, formAction] = useFormState(updateUserPassword, null);

  useEffect(() => {
    if (state && state?.success) {
      toast.success(state?.message, {
        id: 5,
        duration: 2000,
      });
      ref.current?.reset();
      router.push("/dashboard");
    }
    if (state && !state?.success) {
      toast.error(state?.message, { id: 5, duration: 2000 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <form
      ref={ref}
      action={formAction}
      className="flex flex-col gap-4 my-2 text-center"
    >
      <div className="form-control mt-5 ">
        <Input
          name="currentPassword"
          type="password"
          label="Current Password"
          placeholder="*********"
          required
        />
      </div>

      <div className="form-control">
        <Input
          name="newPassword"
          type="password"
          label="New Password"
          placeholder="*********"
          required
        />
      </div>

      <div className="form-control mt-6">
        <ActionSubmitButton>Change Password</ActionSubmitButton>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
