import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
type Role = keyof typeof roleBasedPrivateRoutes;

const AuthRoutes = ["/login", "/register"];

const roleBasedPrivateRoutes = {
  USER: [/^\/dashboard$/, "/pets"],
  ADMIN: [/^\/dashboard\/admin/],
  SUPER_ADMIN: [/^\/dashboard\/admin/],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = cookies().get("token")?.value;

  if (!token) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  let decodedData = null;
  decodedData = jwtDecode(token) as any;
  const role = decodedData?.role;
  if (role && roleBasedPrivateRoutes[role as Role]) {
    const routes = roleBasedPrivateRoutes[role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:page*"],
};
