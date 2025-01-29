'use client';

import { useState } from 'react';
import { useFaqStore } from '@/store/faq';
import { cn } from '@/lib/utils';

const faqItems = [
  {
    id: 1,
    categoryId: 1,
    question: '위블비즈는 어떤 서비스인가요?',
    answer:
      '위블비즈는 기아의 법인 고객을 위한 차량 관리 서비스입니다. 차량 운영에 필요한 다양한 서비스를 제공하며, 효율적인 차량 관리가 가능합니다.',
  },
  // 더 많은 FAQ 항목들...
];

export function FaqList() {
  const { selectedCategory } = useFaqStore();
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 0
      ? faqItems
      : faqItems.filter((item) => item.categoryId === selectedCategory);

  return (
    <ul className='space-y-4'>
      {filteredItems.map((item) => (
        <li key={item.id} className='rounded-2xl bg-white'>
          <button
            onClick={() => setOpenItemId(openItemId === item.id ? null : item.id)}
            className='flex w-full items-center justify-between p-8 text-left'
          >
            <span className='text-lg font-bold text-midnight-900'>{item.question}</span>
            <span
              className={cn(
                'text-midnight-900 transition-transform duration-300',
                openItemId === item.id ? 'rotate-180' : ''
              )}
            >
              ▼
            </span>
          </button>
          {openItemId === item.id && (
            <div className='border-t border-gray-100 p-8'>
              <p className='text-base text-gray-500'>{item.answer}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
