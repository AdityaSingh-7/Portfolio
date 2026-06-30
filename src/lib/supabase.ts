import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Create a no-op client if env vars aren't set (dev/build without Supabase)
export const supabase: SupabaseClient = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        select: () => ({ order: () => ({ limit: () => Promise.resolve({ data: [], error: null }) }) }),
        insert: () => Promise.resolve({ error: { message: "Supabase not configured" } }),
      }),
    } as unknown as SupabaseClient;

export interface Recommendation {
  id?: string;
  type: "movie" | "music";
  title: string;
  submitted_by: string;
  created_at?: string;
}
