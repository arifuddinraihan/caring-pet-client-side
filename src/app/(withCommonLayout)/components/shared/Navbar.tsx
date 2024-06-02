"use client";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { CatIcon, Cog } from "lucide-react";
import Link from "next/link";
// import { logOut } from "../../action/authAction";
import { useRouter } from "next/navigation";
// import { useAuth } from "@/lib/AuthProviders";

export default function NavBar({ user }: any) {
  //   const {setUser}= useAuth()
  const router = useRouter();
  const routeMap: Record<string, string> = {
    user: "/dashboard",
    admin: "/dashboard/admin",
    driver: "/dashboard/driver",
  };

  //   const handleLogOut = async() => {
  //     await logOut()
  //     setUser(null)
  //     router.push("/")
  //   };
  return (
    <Navbar maxWidth="2xl">
      <NavbarBrand>
        <Link className="flex" href="/">
          <CatIcon />
          <p className="font-bold text-inherit px-4">CARING PETS</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/pets">
            Pets
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about-us">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/success-stories">
            Success Stories
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/adoption-tips" aria-current="page">
            Adoption Tips
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          {user && <Link href={routeMap[user?.role]}>Dashboard</Link>}
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        {user ? (
          <NavbarItem>
            {/* <Button onClick={handleLogOut} color="primary" variant="flat">
              Logout
            </Button> */}
            <Button color="primary" variant="flat">
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
        )}
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
