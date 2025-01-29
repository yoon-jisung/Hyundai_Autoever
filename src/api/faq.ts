import { CategoryResponse, FaqResponse, TabType } from '@/types/faq';

export async function getCategories(tab: TabType): Promise<CategoryResponse[]> {
  const response = await fetch(`/api/faq/category?tab=${tab}`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
}

export async function getFaqs(
  tab: TabType,
  offset = 0,
  limit = 10,
  categoryId?: string,
  keyword?: string
): Promise<FaqResponse> {
  const params = new URLSearchParams({
    tab,
    offset: offset.toString(),
    limit: limit.toString(),
  });

  if (categoryId && categoryId !== 'ALL') {
    params.append('faqCategoryID', categoryId);
  }

  if (keyword) {
    params.append('keyword', keyword);
  }

  const response = await fetch(`/api/faq?${params}`);
  if (!response.ok) {
    throw new Error('Failed to fetch FAQs');
  }
  return response.json();
}
