import { Card, CardBody } from "@nextui-org/react";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-4xl mb-5">
        Login <span className="text-accent">Here</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 justify-items-center">
        <div>
          <iframe
            className="h-80 md:w-[450px] md:h-[450px]"
            src="https://lottie.host/embed/1a0da38c-e988-4f90-a46e-25ce2fe8116e/9IuFcKoBBD.json"
          ></iframe>
        </div>

        <Card className="card w-[80%] text-center shadow-xl bg-base-100 md:mt-16">
          <CardBody>
            <LoginForm />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
