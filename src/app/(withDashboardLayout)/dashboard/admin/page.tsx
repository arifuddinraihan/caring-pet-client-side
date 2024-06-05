import WelcomeUserInfo from "../../components/shared/WelcomeUserInfo";

const AdminDashboardPage = () => {
  return (
    <div className="flex flex-col mx-auto my-auto">
      <section className="flex flex-col-reverse gap-10 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
            Welcome to
            <span className="text-indigo-600"> Admin Dashboard</span>
          </h1>
        </div>
        <WelcomeUserInfo />
      </section>
    </div>
  );
};

export default AdminDashboardPage;
