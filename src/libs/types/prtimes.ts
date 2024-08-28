export interface Release {
  company_name: string;
  company_id: number;
  release_id: number;
  title: string;
  subtitle: string;
  url: string;
  lead_paragraph: string;
  body: string;
  main_image: string;
  main_image_fastly: string;
  main_category_id: number;
  main_category_name: string;
  sub_category_id: number;
  sub_category_name: string;
  release_type: string;
  created_at: string;
  like: number;
}

export interface Keyword {
  id: number;
  name: string;
  sort_priority: number;
}
