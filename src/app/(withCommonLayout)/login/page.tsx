"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Input, Button, Card, CardBody } from "@nextui-org/react";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl mb-5">
        Login <span className="text-accent">Here</span>
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1710130697~exp=1710134297~hmac=f1b21d9c1823a0657d339c256a1c4ad8301168480e35b35aeba5106568a21010&w=740"
            width={500}
            height={200}
            alt="login page"
            className="w-full h-[85%]"
          />
        </div>

        <Card className="card w-[70%] h-[80%] shadow-xl bg-base-100">
          <CardBody>
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
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
