export type SupabasePublicEnv = {
  supabaseUrl: string;
  supabaseAnonKey: string;
  siteUrl: string;
  adminAllowedEmails: string[];
};

export function getSupabasePublicEnv(): SupabasePublicEnv {
  return {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
    adminAllowedEmails: parseAdminAllowedEmails(process.env.ADMIN_ALLOWED_EMAILS),
  };
}

export function getRequiredSupabasePublicEnv() {
  const env = getSupabasePublicEnv();

  if (!env.supabaseUrl || !env.supabaseAnonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    );
  }

  return env;
}

function parseAdminAllowedEmails(value: string | undefined) {
  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}
