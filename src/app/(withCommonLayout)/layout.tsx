import { ReactNode } from "react";
import Footer from "./components/shared/Footer";
import NextUiNavbar from "./components/shared/NextUiNavbar";

const CommonLayout = ({ children }: { children: ReactNode }) => {

  return (
    <div>
      <NextUiNavbar />
      <div className="mx-auto container">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
