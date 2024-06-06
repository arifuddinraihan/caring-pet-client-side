"use client";

import { useForm } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import { toast } from "sonner";

export type UserData = {
  username: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserData>({
    defaultValues: {
      username: "arifuddinraihan",
      email: "arifuddinraihan@gmail.com",
      password: "asd123",
    },
  });

  const onSubmit = async (data: UserData) => {
    // console.log(data);
    // toast.success("Sonner Test");
    // reset();

    try {
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col text-center"
    >
      <div className="mt-5">
        <Input
          {...register("username")}
          type="text"
          label="User Name"
          placeholder="username"
          required
        />
      </div>
      <div className="mt-5">
        <Input
          {...register("email")}
          type="email"
          label="Email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mt-5">
        <Input
          {...register("password")}
          type="password"
          label="Password"
          placeholder="*********"
          required
        />
      </div>

      <div className="form-control mt-6">
        <Button
          color="secondary"
          type="submit"
          className="btn btn-accent btn-outline"
        >
          Register
        </Button>
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
