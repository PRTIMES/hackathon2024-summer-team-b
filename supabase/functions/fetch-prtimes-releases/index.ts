import { createClient } from "npm:@supabase/supabase-js@2.39.3"
// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

Deno.serve(async () => {
  console.log('Starting fetch-prtimes-releases function...');

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
  );

  console.log('Fetching data from PR Times API...');

  const url = "https://hackathon2024-summer-team-b.vercel.app/api";
  const response = await fetch(url);
  const {data} = await response.json();

  console.log('Data fetched:', data);

  for (const item of data) {
    // releases テーブルにデータを挿入
    const { data: releaseData, error: releaseError } = await supabase
      .from('releases')
      .insert({
        company_name: item.company_name,
        title: item.title,
        url: item.url,
        image_url: item.main_image_fastly,
        category_name: item.main_category_name,
        created_at: item.created_at,
      })
      .select()
      .single();

    if (releaseError) {
      console.error('Error inserting release:', releaseError);
      continue;
    }

    console.log('Inserted release:', releaseData);

    // keywords テーブルにデータを挿入
    for (const keyword of item.keywords) {
      const { data: keywordData,  error: keywordError } = await supabase
        .from('keywords')
        .upsert({
          name: keyword.name,
        })
        .select()
        .single();

      if (keywordError) {
        console.error('Error inserting keyword:', keywordError);
        continue;
      }

      console.log('Inserted keyword:', keywordData);

      // keyword_map テーブルにデータを挿入
      const { error: mapError } = await supabase
        .from('keyword_map')
        .upsert({
          release_id: releaseData.id,
          keyword_id: keywordData.id
        });

      if (mapError) {
        console.error('Error inserting keyword_map:', mapError);
      }
    }
  }

  return new Response(JSON.stringify({ message: 'Data inserted successfully' }), {
    headers: { "Content-Type": "application/json" },
  });
});
/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/fetch-prtimes-releases' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
