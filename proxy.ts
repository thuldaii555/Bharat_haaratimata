import { type NextRequest, NextResponse } from "next/server";

import { isAllowedAdminEmail } from "@/lib/supabase/env";
import { createSupabaseProxyClient } from "@/lib/supabase/server";

const protectedAdminPaths = new Set([
  "/admin/dashboard",
  "/admin/products",
  "/admin/categories",
  "/admin/images",
  "/admin/certifications",
  "/admin/inquiries",
  "/admin/site-content",
]);

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const proxyClient = createSupabaseProxyClient(request);

  if (!proxyClient) {
    if (pathname === "/admin/login") {
      return NextResponse.next();
    }

    return NextResponse.redirect(
      new URL("/admin/login?error=config", request.url),
    );
  }

  const { supabase, getResponse } = proxyClient;
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (pathname === "/admin/login") {
    if (isAllowedAdminEmail(user?.email)) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }

    if (user?.email) {
      await supabase.auth.signOut();
      return redirectWithAuthCookies(
        new URL("/admin/login?error=unauthorized", request.url),
        getResponse(),
      );
    }

    return getResponse();
  }

  if (!protectedAdminPaths.has(pathname)) {
    return getResponse();
  }

  if (!user?.email) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if (!isAllowedAdminEmail(user.email)) {
    await supabase.auth.signOut();
    return redirectWithAuthCookies(
      new URL("/admin/login?error=unauthorized", request.url),
      getResponse(),
    );
  }

  return getResponse();
}

export const config = {
  matcher: ["/admin/:path*"],
};

function redirectWithAuthCookies(url: URL, responseWithCookies: NextResponse) {
  const redirectResponse = NextResponse.redirect(url);

  responseWithCookies.cookies.getAll().forEach((cookie) => {
    redirectResponse.cookies.set(cookie);
  });

  return redirectResponse;
}
