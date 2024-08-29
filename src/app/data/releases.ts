"use server";

import { createClient } from "~/libs/supabase/server";

export const getReleases = async ({ offset = 0, limit = 12 } = {}) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("releases")
    .select(
      `
          *,
          keywords:keyword_map(
            keyword:keywords(name)
          )
        `,
    )
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error("Error fetching releases:", error);
    return { success: false, error: error.message };
  }

  return { success: true, data };
};

export const getReleasesCount = async () => {
  const supabase = createClient();

  const { data, error, count } = await supabase
    .from("releases")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error("Error fetching releases:", error);
    return { success: false, error: error.message };
  }

  return { success: true, data: count };
};
