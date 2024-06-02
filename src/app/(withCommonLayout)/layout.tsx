import Navbar from "@/components/Shared/Navbar/Navbar";
import { ReactNode } from "react";
import NavBar from "./components/shared/Navbar";
import NextUiNavbar from "./components/shared/NextUiNavbar";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  const user = "a";

  return (
    <div>
      {/* <NextUiNavbar /> */}
      <NavBar user={user}></NavBar>
      <div className="mx-auto container">{children}</div>
      <p>footer</p>
    </div>
  );
};

export default CommonLayout;
