'use client';

import { useQuery } from '@tanstack/react-query';
import { useFaqStore } from '@/store/faq';
import { cn } from '@/lib/utils';
import { getFaqs } from '@/api/faq';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaqResponse } from '@/types/faq';
import { useFaqSearch, useFaqList } from '@/hooks/useFaq';

interface SearchData {
  keyword: string;
}

export function FaqList() {
  const { selectedCategory, activeTab } = useFaqStore();
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);

  const { data: searchData } = useFaqSearch(activeTab, selectedCategory);
  const { data: faqData } = useFaqList(
    activeTab,
    selectedCategory,
    visibleCount,
    searchData.keyword
  );

  const hasMore = faqData ? faqData.pageInfo.totalRecord > visibleCount : false;
  const hasNoResults = faqData?.items.length === 0 && searchData.keyword !== '';

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <Suspense fallback={<div></div>}>
      <div>
        {hasNoResults ? (
          <div className='flex flex-col items-center justify-center py-16 text-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='64'
              height='64'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='mb-4 text-gray-400'
            >
              <circle cx='12' cy='12' r='10' />
              <path d='M12 16v-4' />
              <path d='M12 8h.01' />
            </svg>
            <h3 className='mb-2 text-lg font-medium text-gray-900'>검색결과가 없습니다.</h3>
          </div>
        ) : (
          <>
            <ul className='space-y-4 border-t-2 border-gray-900'>
              {faqData?.items.map((item) => (
                <li key={item.id} className='overflow-hidden bg-white border-t border-gray-100'>
                  <button
                    type='button'
                    onClick={() => setOpenItemId(openItemId === item.id ? null : item.id)}
                    className='flex w-full items-center justify-between px-8 py-6 text-left'
                  >
                    <span className='text-[20px] font-bold text-midnight-900'>{item.question}</span>
                    <span
                      className={cn(
                        'ml-4 text-gray-400 transition-transform duration-300',
                        openItemId === item.id ? 'rotate-180' : ''
                      )}
                    >
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M6 9L12 15L18 9'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-in-out',
                      openItemId === item.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    )}
                  >
                    <div className='overflow-hidden'>
                      <div className='px-8 py-6'>
                        <div
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                          className='text-[13pt] text-[#6A7A87] [&_p]:mb-4 last:[&_p]:mb-0'
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {hasMore && (
              <div className='mt-8 text-center'>
                <button
                  type='button'
                  onClick={handleLoadMore}
                  className='inline-flex items-center text-[18px] font-medium'
                >
                  + 더보기
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </Suspense>
  );
}
