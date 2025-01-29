'use client';

import { useQuery } from '@tanstack/react-query';
import { useFaqStore } from '@/store/faq';
import { cn } from '@/lib/utils';
import { getCategories } from '@/api/faq';
import { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

export function FaqCategories() {
  const { selectedCategory, setSelectedCategory, activeTab } = useFaqStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const { data: categories } = useQuery({
    queryKey: ['categories', activeTab],
    queryFn: () => getCategories(activeTab),
  });

  const handleCategoryChange = useCallback(
    (categoryId: string) => {
      startTransition(() => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('category', categoryId);
        router.push(`/faq?${params.toString()}`);
      });
    },
    [router, searchParams]
  );

  return (
    <div
      className={`${isPending ? 'opacity-70' : ''} transition-opacity filter flex flex-wrap gap-2`}
    >
      <label
        className={cn(
          'group relative inline-flex h-12 cursor-pointer items-center rounded-full px-5 text-[20px] font-bold transition-all',
          selectedCategory === 'ALL' ? 'bg-mint-900 text-white' : 'bg-none'
        )}
      >
        <input
          type='radio'
          name='filter'
          className='hidden'
          checked={selectedCategory === 'ALL'}
          onChange={() => setSelectedCategory('ALL')}
        />
        <i className='not-italic'>전체</i>
      </label>
      {categories?.map((category) => (
        <label
          key={category.categoryID}
          className={cn(
            'group relative inline-flex h-12 cursor-pointer items-center rounded-full px-5 text-[20px] font-bold transition-all',
            selectedCategory === category.categoryID ? 'bg-mint-900 text-white' : 'bg-none'
          )}
        >
          <input
            type='radio'
            name='filter'
            className='hidden'
            checked={selectedCategory === category.categoryID}
            onChange={() => setSelectedCategory(category.categoryID)}
          />
          <i className='not-italic'>{category.name}</i>
        </label>
      ))}
    </div>
  );
}
