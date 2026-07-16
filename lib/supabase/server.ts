import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

import { getRequiredSupabasePublicEnv, getSupabasePublicEnv } from "./env";

export async function createSupabaseServerClient() {
  const { supabaseUrl, supabaseAnonKey } = getRequiredSupabasePublicEnv();
  const cookieStore = await cookies();

  return createSupabaseServerClientWithCookies(
    supabaseUrl,
    supabaseAnonKey,
    cookieStore,
  );
}

export async function createOptionalSupabaseServerClient() {
  const { supabaseUrl, supabaseAnonKey } = getSupabasePublicEnv();

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  const cookieStore = await cookies();

  return createSupabaseServerClientWithCookies(
    supabaseUrl,
    supabaseAnonKey,
    cookieStore,
  );
}

function createSupabaseServerClientWithCookies(
  supabaseUrl: string,
  supabaseAnonKey: string,
  cookieStore: Awaited<ReturnType<typeof cookies>>,
) {
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

export function createSupabaseMiddlewareClient(request: NextRequest) {
  const { supabaseUrl, supabaseAnonKey } = getSupabasePublicEnv();

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  let response = NextResponse.next({ request });

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });

        response = NextResponse.next({ request });

        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  return {
    supabase,
    getResponse() {
      return response;
    },
  };
}
