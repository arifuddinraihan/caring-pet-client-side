import WelcomeUserInfo from "./WelcomeUserInfo";

const WelcomeText = async () => {
  return (
    <section className="flex flex-col-reverse gap-10 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
      <div className="text-center space-y-4">
        <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
          Welcome to
          <span className="text-indigo-600"> Dashboard</span>
        </h1>
      </div>
      <WelcomeUserInfo />
    </section>
  );
};

export default WelcomeText;
