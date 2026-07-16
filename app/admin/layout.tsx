import Link from "next/link";
import type { ReactNode } from "react";

import { isAllowedAdminEmail } from "@/lib/supabase/env";
import { createOptionalSupabaseServerClient } from "@/lib/supabase/server";

const adminNavItems = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Products", href: "/admin/products" },
  { label: "Categories", href: "/admin/categories" },
  { label: "Images", href: "/admin/images" },
  { label: "Certifications", href: "/admin/certifications" },
  { label: "Inquiries", href: "/admin/inquiries" },
  { label: "Site Content", href: "/admin/site-content" },
];

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const supabase = await createOptionalSupabaseServerClient();
  const {
    data: { user },
  } = supabase
    ? await supabase.auth.getUser()
    : { data: { user: null } };
  const adminEmail = isAllowedAdminEmail(user?.email) ? user?.email : null;

  return (
    <div className="admin-shell">
      <div className="mx-auto grid max-w-[92rem] gap-6 px-4 py-6 md:px-6 lg:grid-cols-[18rem_1fr] lg:py-8">
        <aside className="admin-sidebar p-5 lg:sticky lg:top-6 lg:self-start">
          <div className="flex items-start justify-between gap-4 lg:block">
            <div>
              <p className="small-caps text-gold">Haaratimata</p>
              <h1 className="mt-3 font-serif text-3xl leading-tight text-walnut">
                Admin
              </h1>
            </div>
            <span className="admin-status-badge shrink-0">
              {adminEmail ? "Authenticated" : "Planning Mode"}
            </span>
          </div>

          <p className="mt-5 text-sm leading-6 text-olive">
            {adminEmail
              ? `Signed in as ${adminEmail}. Editing is currently disabled.`
              : "Supabase Auth is connected for admin access. Editing is currently disabled."}
          </p>

          <nav aria-label="Admin navigation" className="mt-6 grid gap-2">
            {adminNavItems.map((item) => (
              <Link className="nav-link" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          {adminEmail ? (
            <Link className="button-light mt-6 w-full" href="/admin/logout">
              Logout
            </Link>
          ) : (
            <Link className="button-light mt-6 w-full" href="/admin/login">
              Admin Login
            </Link>
          )}
        </aside>

        <main>{children}</main>
      </div>
    </div>
  );
}
