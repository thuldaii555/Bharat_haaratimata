import { createBrowserClient } from "@supabase/ssr";

import { getRequiredSupabasePublicEnv } from "./env";

export function createSupabaseBrowserClient() {
  const { supabaseUrl, supabaseAnonKey } = getRequiredSupabasePublicEnv();

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
