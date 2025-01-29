'use client';

import { useFaqStore } from '@/store/faq';
import { cn } from '@/lib/utils';

const introCategories = [
  { id: 0, name: '전체' },
  { id: 1, name: '서비스 상품' },
  { id: 2, name: '도입 상담' },
  { id: 3, name: '계약' },
];

const usageCategories = [
  { id: 0, name: '전체' },
  { id: 1, name: '가입문의' },
  { id: 2, name: '비즈니스(업무용)' },
  { id: 3, name: '사고/보험' },
  { id: 4, name: '예약/결제' },
  { id: 5, name: '차량문의' },
  { id: 6, name: '충전' },
  { id: 7, name: '쿠폰/기타' },
];

export function FaqCategories() {
  const { selectedCategory, setSelectedCategory, activeTab } = useFaqStore();

  const categories = activeTab === 'intro' ? introCategories : usageCategories;

  return (
    <div className='filter flex flex-wrap gap-2'>
      {categories.map((category) => (
        <label
          key={category.id}
          className={cn(
            'group relative inline-flex h-12 cursor-pointer items-center rounded-full px-5 text-[20px] font-bold transition-all',
            selectedCategory === category.id ? 'bg-mint-900 text-white' : 'bg-none'
          )}
        >
          <input
            type='radio'
            name='filter'
            className='hidden'
            checked={selectedCategory === category.id}
            onChange={() => setSelectedCategory(category.id)}
          />
          <i className='not-italic'>{category.name}</i>
        </label>
      ))}
    </div>
  );
}
