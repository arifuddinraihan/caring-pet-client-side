"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Input, Button, Card, CardFooter, CardBody } from "@nextui-org/react";

export type UserData = {
  username: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const onSubmit = async (data: UserData) => {
    console.log(data);

    try {
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl mb-5">
        Register <span className="text-accent">Now</span>
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?t=st=1710081713~exp=1710085313~hmac=f637c194f1f143e63a84950cbf978997453777c872adf4aebbbecdaa445601a1&w=740"
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
              className="flex flex-col text-center"
            >
              <div className="mt-5">
                <Input
                  {...register("username")}
                  type="text"
                  label="Username"
                  placeholder="User Name"
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
          </CardBody>
        </Card>

        {/* <div className="card w-[70%] h-[70%] shadow-xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body py-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                {...register("username")}
                placeholder="User Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent btn-outline">
                Register
              </button>
            </div>
            <p className="text-center">
              Already have an account?{" "}
              <Link className="text-accent" href="/login">
                Login
              </Link>
            </p>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default RegisterPage;
