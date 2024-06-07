"use client";

import { Input } from "@nextui-org/react";
import Link from "next/link";
import { toast } from "sonner";
import { createRef, useEffect } from "react";
import { useFormState } from "react-dom";
import ActionSubmitButton from "../components/submitButton/ActionSubmitButton";
import { registerUser } from "../action/authActions";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const ref = createRef<HTMLFormElement>();
  const router = useRouter();
  const [state, formAction] = useFormState(registerUser, null);

  useEffect(() => {
    if (state && state?.success) {
      toast.success("Successfully registered your account!", {
        id: 1,
        duration: 2000,
      });
      ref.current?.reset();
      router.push("/login");
    }
    if (state && !state?.success) {
      toast.error(state?.message, { id: 1, duration: 2000 });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, router]);

  return (
    <form ref={ref} action={formAction} className="flex flex-col text-center">
      <div className="mt-5">
        <Input
          type="text"
          name="name"
          label="Name"
          placeholder="name"
          required
        />
      </div>
      <div className="mt-5">
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mt-5">
        <Input
          name="profilePhoto"
          type="text"
          label="Profile Photo"
          placeholder="Enter your Profile Photo link here"
          required
        />
      </div>

      <div className="mt-5">
        <Input
          name="password"
          type="password"
          label="Password"
          placeholder="*********"
          required
        />
      </div>

      <div className="form-control mt-6">
        <ActionSubmitButton>Register</ActionSubmitButton>
      </div>
      <p className="text-center mt-5">
        Already have an account?{" "}
        <Link
          className="text-accent underline hover:underline-offset-2"
          href="/login"
        >
          Login Here
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
