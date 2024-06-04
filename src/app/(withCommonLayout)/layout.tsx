import { ReactNode } from "react";
import NavBar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  const user = "a";

  return (
    <div>
      {/* <NextUiNavbar /> */}
      <NavBar user={user}></NavBar>
      <div className="mx-auto container">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
