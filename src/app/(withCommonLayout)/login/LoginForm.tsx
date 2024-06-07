"use client";

import { Input } from "@nextui-org/react";
import Link from "next/link";
import ActionSubmitButton from "../components/submitButton/ActionSubmitButton";
import { createRef, useEffect } from "react";
import { useFormState } from "react-dom";
import { loginUser } from "../action/authActions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const ref = createRef<HTMLFormElement>();
  const router = useRouter();
  const [state, formAction] = useFormState(loginUser, null);

  useEffect(() => {
    if (state && state?.success) {
      toast.success("Successfully Logged in your account!", {
        id: 2,
        duration: 2000,
      });
      ref.current?.reset();
      router.push("/");
    }
    if (state && !state?.success) {
      toast.error(state?.message, { id: 2, duration: 2000 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, router]);

  return (
    <form
      ref={ref}
      action={formAction}
      className="flex flex-col gap-4 my-2 text-center"
    >
      <div className="form-control mt-5">
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="form-control">
        <Input
          name="password"
          type="password"
          label="Password"
          placeholder="*********"
          required
        />
      </div>

      <div className="form-control mt-6">
        <ActionSubmitButton>Login</ActionSubmitButton>
      </div>
      <p className="text-center mt-5">
        Don{"'"}t have an account?{" "}
        <Link
          className="text-accent underline hover:underline-offset-2"
          href="/register"
        >
          Create an account
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
