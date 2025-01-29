import { useQuery } from '@tanstack/react-query';
import { getFaqs } from '@/api/faq';
import { FaqResponse, TabType } from '@/types/faq';

const ITEMS_PER_PAGE = 10;
const STALE_TIME = 1000 * 60;
const INITIAL_SEARCH_DATA = { keyword: '' } as const;

type CategoryType = 'ALL' | string;

function getFaqQueryKey(activeTab: TabType, selectedCategory: CategoryType, ...rest: unknown[]) {
  return ['faqs', activeTab, selectedCategory, ...rest];
}

interface SearchData {
  keyword: string;
}

export function useFaqSearch(activeTab: TabType, selectedCategory: CategoryType) {
  return useQuery<SearchData>({
    queryKey: getFaqQueryKey(activeTab, selectedCategory, 'search'),
    initialData: INITIAL_SEARCH_DATA,
  });
}

export function useFaqTotal(activeTab: TabType, selectedCategory: CategoryType, keyword: string) {
  return useQuery<FaqResponse>({
    queryKey: getFaqQueryKey(activeTab, selectedCategory, 'total', keyword),
    queryFn: () => getFaqs(activeTab, 0, 1, selectedCategory, keyword),
    staleTime: STALE_TIME,
  });
}

export function useFaqList(
  activeTab: TabType,
  selectedCategory: CategoryType,
  visibleCount: number,
  keyword: string
) {
  return useQuery<FaqResponse>({
    queryKey: getFaqQueryKey(activeTab, selectedCategory, visibleCount, keyword),
    queryFn: () => getFaqs(activeTab, 0, visibleCount, selectedCategory, keyword),
    staleTime: STALE_TIME,
  });
}
