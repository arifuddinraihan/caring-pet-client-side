import { Spinner } from "@nextui-org/react";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[90%] mx-auto">
        <Spinner label="Loading" color="secondary" labelColor="secondary" size="lg" />
      </div>
    </div>
  );
};

export default LoadingPage;
