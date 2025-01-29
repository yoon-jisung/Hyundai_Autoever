'use client';

import { useFaqStore } from '@/store/faq';
import { cn } from '@/lib/utils';

const categories = [
  { id: 0, name: '전체', count: 23 },
  { id: 1, name: '서비스 상품', count: 5 },
  { id: 2, name: '도입 상담', count: 8 },
  { id: 3, name: '계약', count: 6 },
];

export function FaqCategories() {
  const { selectedCategory, setSelectedCategory } = useFaqStore();

  return (
    <div className='flex flex-wrap gap-3'>
      {categories.map((category) => (
        <button
          key={category.id}
          type='button'
          onClick={() => setSelectedCategory(category.id)}
          className={cn(
            'group relative h-[52px] min-w-[120px] rounded-[52px] border border-transparent px-8 text-[15px] font-medium transition-all',
            selectedCategory === category.id
              ? 'border-mint-900 bg-mint-900 text-white hover:bg-mint-700'
              : 'bg-gray-50 text-gray-500 hover:border-gray-200'
          )}
        >
          <span className='relative flex items-center justify-center gap-1'>
            <span>{category.name}</span>
            <span
              className={cn(
                'transition-colors',
                selectedCategory === category.id ? 'text-white' : 'text-gray-400'
              )}
            >
              {category.count}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}
