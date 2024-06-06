"use client";

import { useForm } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";
import Link from "next/link";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 my-2 text-center"
    >
      <div className="form-control mt-5">
        <Input
          {...register("email")}
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
      </div>

      <div className="form-control">
        <Input
          {...register("password")}
          type="password"
          label="Password"
          placeholder="*********"
        />
      </div>

      <div className="form-control mt-6">
        <Button
          color="success"
          type="submit"
          className="btn btn-accent btn-outline"
        >
          Login
        </Button>
      </div>
      <p className="text-center mt-5">
        Don&apos;t have an account?{" "}
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
