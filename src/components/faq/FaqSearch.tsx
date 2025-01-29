'use client';

import { useFaqStore } from '@/store/faq';
import { useQueryClient } from '@tanstack/react-query';

interface SearchData {
  keyword: string;
}

interface FaqSearchProps {
  keyword: string;
  setKeyword: (value: string) => void;
}

export function FaqSearch({ keyword, setKeyword }: FaqSearchProps) {
  const queryClient = useQueryClient();
  const { activeTab, selectedCategory } = useFaqStore();

  const resetSearch = async () => {
    setKeyword('');
    queryClient.setQueryData<SearchData>(['faqs', activeTab, selectedCategory, 'search'], {
      keyword: '',
    });
    await queryClient.invalidateQueries({
      queryKey: ['faqs', activeTab, selectedCategory],
      exact: true,
    });
  };

  const handleReset = () => {
    resetSearch();
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);

    if (!value.trim()) {
      queryClient.setQueryData<SearchData>(['faqs', activeTab, selectedCategory, 'search'], {
        keyword: '',
      });

      await queryClient.invalidateQueries({
        queryKey: ['faqs', activeTab, selectedCategory],
        exact: true,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    queryClient.setQueryData<SearchData>(['faqs', activeTab, selectedCategory, 'search'], {
      keyword,
    });

    await queryClient.invalidateQueries({
      queryKey: ['faqs', activeTab, selectedCategory],
      exact: true,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='relative'>
        <input
          type='text'
          value={keyword}
          onChange={handleChange}
          placeholder='찾으시는 내용을 입력해 주세요'
          className='h-[52px] w-full rounded-lg border-0 bg-white px-4 text-base shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-mint-900'
        />
        {keyword && (
          <button
            type='button'
            onClick={handleReset}
            className='absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
          >
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
        )}
        <button type='submit' className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400'>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
            <path
              d='M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm10 2-4.35-4.35'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
