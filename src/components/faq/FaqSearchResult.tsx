'use client';

import { useQuery } from '@tanstack/react-query';
import { useFaqStore } from '@/store/faq';
import { useQueryClient } from '@tanstack/react-query';
import { FaqResponse } from '@/types/faq';
import { useFaqSearch, useFaqList, useFaqTotal } from '@/hooks/useFaq';

interface SearchData {
  keyword: string;
}

interface FaqSearchResultProps {
  onReset: () => void;
}

export function FaqSearchResult({ onReset }: FaqSearchResultProps) {
  const { activeTab, selectedCategory } = useFaqStore();
  const queryClient = useQueryClient();

  const { data: searchData } = useFaqSearch(activeTab, selectedCategory);
  const { data: totalData } = useFaqTotal(activeTab, selectedCategory, searchData.keyword);

  if (!searchData?.keyword) return null;

  const handleReset = async () => {
    onReset();
    queryClient.setQueryData<SearchData>(['faqs', activeTab, selectedCategory, 'search'], {
      keyword: '',
    });
    await queryClient.invalidateQueries({
      queryKey: ['faqs', activeTab, selectedCategory],
      exact: true,
    });
  };

  return (
    <div className='mb-8 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <span className='text-[20px] font-bold'>검색결과 총</span>
        <span className='text-[20px] font-bold text-mint-900'>
          {totalData?.pageInfo.totalRecord}
        </span>
        <span className='text-[20px] font-bold'>건</span>
      </div>
      <button
        onClick={handleReset}
        className='flex items-center gap-2 text-gray-400 hover:text-gray-600'
      >
        <span>검색초기화</span>
        <svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
          <path
            d='M18 6L6 18M6 6l12 12'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </div>
  );
}
