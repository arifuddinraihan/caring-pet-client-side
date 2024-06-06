import { Card, CardBody } from "@nextui-org/react";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-4xl mb-5">
        Register <span className="text-accent">Now</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 justify-items-center">
        <div>
          <iframe
            className="w-80 h-80 md:w-[650px] md:h-[650px]"
            src="https://lottie.host/embed/f0d04434-d06d-4028-a490-062f51a61c92/tAr3umi5pW.json"
          ></iframe>
        </div>

        <Card className="card w-[80%] shadow-xl bg-base-100 text-center md:mt-20">
          <CardBody>
            <RegisterForm />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
