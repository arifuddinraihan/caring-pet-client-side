"use client";

import Image from "next/image";
import Link from "next/link";
import caringPetLogo from "../../../assets/dog-2-svgrepo-com.png";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthProvider";
import { logOut } from "@/app/(withCommonLayout)/action/authActions";
import { adminSidebarNavigation } from "../utils/adminSidebarNav";

const AdminSidebar = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { setUser } = useAuth();

  const logOutUser = async () => {
    await logOut();
    setUser(null);
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen">
      <nav className="fixed top-0 left-0 w-20 h-full border-r bg-white space-y-8 z-10">
        <div className="flex flex-col h-full">
          <div className="h-20 flex items-center justify-center px-8">
            <Link href="/" className="flex-none">
              <Image
                src={caringPetLogo}
                width={40}
                height={40}
                alt="Caring Pet Logo"
                className="mx-auto"
              />
            </Link>
          </div>
          <div className="flex-1 flex flex-col h-full">
            <ul className="px-4 text-sm font-medium flex-1">
              {adminSidebarNavigation.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 group"
                  >
                    <div className="text-gray-500">{item.icon}</div>
                    <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <ul className="px-4 pb-4 text-sm font-medium">
                <li>
                  <button
                    onClick={logOutUser}
                    className="relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 group"
                  >
                    <div className="text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                      </svg>
                    </div>
                    <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                      Logout
                    </span>
                  </button>
                </li>
              </ul>

              <div className="relative py-4 px-4 border-t">
                {/* SETTLE ONE AVATAR FOR USER HERE */}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden ml-20">
        {children}
      </div>
    </div>
  );
};

export default AdminSidebar;
