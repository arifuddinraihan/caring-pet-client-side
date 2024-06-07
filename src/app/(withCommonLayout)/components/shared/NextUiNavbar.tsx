"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import caringPetLogo from "../../../../assets/dog-2-svgrepo-com.png";
import { usePathname, useRouter } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useAuth } from "@/lib/AuthProvider";
import { logOut } from "../../action/authActions";

export default function NextUiNavbar({ user }: any) {
  // console.log(user);

  const router = useRouter();
  const { setUser } = useAuth();

  const routeMap: Record<string, string> = {
    USER: "/dashboard",
    ADMIN: "/dashboard/admin",
    SUPER_ADMIN: "/dashboard/admin",
  };

  const logOutUser = async () => {
    await logOut();
    setUser(null);
    router.push("/login");
  };

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/about-us",
      name: "About Us",
    },
    {
      href: "/success-stories",
      name: "Success Stories",
    },
    {
      href: "/adoption-tips",
      name: "Adoption Tips",
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex">
          <Link color="foreground" href="/">
            <Image
              src={caringPetLogo}
              alt="Caring Pet logo"
              height={40}
              width={40}
            />
            <p className="hidden lg:flex font-bold text-inherit px-4">
              Caring Pets
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/pets"}>
          {user && user.role === "USER" && (
            <Link color="foreground" href="/pets">
              Pets
            </Link>
          )}
        </NavbarItem>
        <NavbarItem isActive={pathname === "/about-us"}>
          <Link color="foreground" href="/about-us">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/success-stories"}>
          <Link color="foreground" href="/success-stories">
            Success Stories
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/adoption-tips"}>
          <Link color="foreground" href="/adoption-tips">
            Adoption Tips
          </Link>
        </NavbarItem>
        <NavbarItem>
          {user && <Link href={routeMap[user?.role]}>Dashboard</Link>}
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        {user ? (
          <>
            <NavbarItem>
              <Button
                onClick={logOutUser}
                as={Button}
                color="primary"
                variant="flat"
              >
                Logout
              </Button>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/register" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.name}-${index}`}
            isActive={pathname === `${item.href}`}
          >
            <Link
              className="w-full"
              color="foreground"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem isActive={pathname === "/pets"}>
          {user && user.role === "USER" && (
            <Link className="w-full" color="foreground" href="/pets" size="lg">
              Pets
            </Link>
          )}
        </NavbarMenuItem>
        <NavbarMenuItem>
          {user && (
            <Link href={routeMap[user?.role]} className="w-full" size="lg">
              Dashboard
            </Link>
          )}
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
