import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import { getRequiredSupabasePublicEnv } from "./env";

export async function createSupabaseServerClient() {
  const { supabaseUrl, supabaseAnonKey } = getRequiredSupabasePublicEnv();
  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Server Components cannot always write cookies. Middleware or Server
          // Actions can use this helper when auth is connected in a later phase.
        }
      },
    },
  });
}
