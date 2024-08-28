interface AllArticleType {
  body: string
  company_id: number;
  company_name: string,
  created_at: string,
  lead_paragraph: string,
  like: number,
  main_category_id: number,
  main_category_name: string,
  main_image: string,
  main_image_fastly: string,
  release_id: number,
  release_type: string,
  sub_category_id: 86,
  sub_category_name: string,
  subtitle: string,
  title: string,
  url: string,
  }
  
  interface CategorType {
    id: number,
    name: string,
    sort_priority: number;
  }
  
interface ShowArticleType {
  company_id: number,
  company_name: string,
  created_at: string,
  main_category_name: string,
  main_image: string,
  release_id: number,
  title: string,
}

interface MergeArticleDataType {
  [key: string]: {
    
  },
  body: string,
  company_id: number,
  company_name: string,
  created_at: string,
  lead_paragraph: string,
  like: number,
  main_category_id: number,
  main_category_name: string,
  main_image: string,
  main_image_fastly: string,
  release_id: number,
  release_type: string,
  sub_category_id: 86,
  sub_category_name: string,
  subtitle: string,
  title: string,
  url: string,
}