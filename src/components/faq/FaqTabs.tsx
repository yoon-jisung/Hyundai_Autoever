'use client';

import { useFaqStore } from '@/store/faq';
import { cn } from '@/lib/utils';

export function FaqTabs() {
  const { activeTab, setActiveTab } = useFaqStore();

  return (
    <ul className='flex w-full border border-gray-100 font-bold text-[20px] mb-10'>
      <li
        className={cn('flex-1 h-[56px] cursor-pointer transition-colors', {
          'bg-midnight-900 text-white': activeTab === 'intro',
          'bg-white text-gray-500 hover:text-midnight-900': activeTab !== 'intro',
        })}
        onClick={() => setActiveTab('intro')}
      >
        <a className='flex h-full items-center justify-center'>서비스 도입</a>
      </li>
      <li
        className={cn('flex-1 h-[56px] cursor-pointer transition-colors', {
          'bg-midnight-900 text-white': activeTab === 'usage',
          'bg-white text-gray-500 hover:text-midnight-900': activeTab !== 'usage',
        })}
        onClick={() => setActiveTab('usage')}
      >
        <a className='flex h-full items-center justify-center'>서비스 이용</a>
      </li>
    </ul>
  );
}
