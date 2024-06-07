import { ReactNode } from "react";
import Footer from "./components/shared/Footer";
import NextUiNavbar from "./components/shared/NextUiNavbar";
import { userInfo } from "./action/authActions";

const CommonLayout = async ({ children }: { children: ReactNode }) => {
  const user = await userInfo();
  return (
    <div>
      <NextUiNavbar user={user} />
      <div className="mx-auto container">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
