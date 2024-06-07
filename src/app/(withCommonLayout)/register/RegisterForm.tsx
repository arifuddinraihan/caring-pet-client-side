"use client";

import { useForm } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import { toast } from "sonner";
import { createRef, useEffect } from "react";
import { useFormState } from "react-dom";
import { registerUser } from "../action/authActions";
import ActionSubmitButton from "../components/submitButton/ActionSubmitButton";

export type UserData = {
  username: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const ref = createRef<HTMLFormElement>();
  const [state, formAction] = useFormState(registerUser, null);

  useEffect(() => {
    console.log(state);
    // if (state && state.success) {
    //   console.log(state);
    //   toast.success("Sonner Test");
    //   ref.current?.reset();
    // }
  }, [state]);

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm<UserData>({
  //   defaultValues: {
  //     username: "arifuddinraihan",
  //     email: "arifuddinraihan@gmail.com",
  //     password: "asd123",
  //   },
  // });

  // const onSubmit = async (data: UserData) => {
  //   console.log(data);
  //   toast.success("Sonner Test");
  //   reset();

  //   try {
  //   } catch (err: any) {
  //     console.error(err.message);
  //     throw new Error(err.message);
  //   }
  // };

  return (
    <form
      action={formAction}
      // onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col text-center"
    >
      <div className="mt-5">
        <Input
          // {...register("username")}
          type="text"
          name="name"
          label="Name"
          placeholder="name"
          required
        />
      </div>
      <div className="mt-5">
        <Input
          // {...register("email")}
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mt-5">
        <Input
          // {...register("password")}
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
