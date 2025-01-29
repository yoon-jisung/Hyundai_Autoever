import { useQuery } from '@tanstack/react-query';
import { getFaqs } from '@/api/faq';
import { FaqResponse } from '@/types/faq';

interface SearchData {
  keyword: string;
}

export function useFaqSearch(activeTab: string, selectedCategory: string) {
  return useQuery<SearchData>({
    queryKey: ['faqs', activeTab, selectedCategory, 'search'],
    initialData: { keyword: '' },
  });
}

export function useFaqTotal(activeTab: string, selectedCategory: string, keyword: string) {
  return useQuery<FaqResponse>({
    queryKey: ['faqs', activeTab, selectedCategory, 'total', keyword],
    queryFn: () => getFaqs(activeTab, 0, 1, selectedCategory, keyword),
    staleTime: 1000 * 60,
  });
}

export function useFaqList(
  activeTab: string,
  selectedCategory: string,
  visibleCount: number,
  keyword: string
) {
  return useQuery<FaqResponse>({
    queryKey: ['faqs', activeTab, selectedCategory, visibleCount, keyword],
    queryFn: () => getFaqs(activeTab, 0, visibleCount, selectedCategory, keyword),
    staleTime: 1000 * 60,
  });
}
