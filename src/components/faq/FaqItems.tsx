'use client';

import { useFaqStore } from '@/store/faq';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const faqItems = [
  {
    id: 1,
    categoryId: 1,
    question: '회원가입은 어떻게 하나요?',
    answer: '홈페이지 우측 상단의 회원가입 버튼을 클릭하여 진행하실 수 있습니다.',
    createdAt: '2024-03-20',
    updatedAt: '2024-03-20',
  },
  // 더 많은 FAQ 아이템들을 추가할 수 있습니다.
];

export function FaqItems() {
  const { selectedCategory } = useFaqStore();
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'ALL'
      ? faqItems
      : faqItems.filter((item) => Number(item.categoryId) === Number(selectedCategory));

  return (
    <div className='space-y-4'>
      {filteredItems.map((item) => (
        <div key={item.id} className='bg-white rounded-lg shadow-sm overflow-hidden'>
          <button
            onClick={() => setOpenItemId(openItemId === item.id ? null : item.id)}
            className='w-full px-6 py-4 text-left flex justify-between items-center'
          >
            <span className='font-medium'>{item.question}</span>
            <span
              className={cn(
                'transform transition-transform',
                openItemId === item.id ? 'rotate-180' : ''
              )}
            >
              ▼
            </span>
          </button>
          {openItemId === item.id && (
            <div className='px-6 py-4 bg-gray-50 border-t'>
              <p className='text-gray-700'>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
