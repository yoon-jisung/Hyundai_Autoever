import { Suspense } from 'react';
import { FaqList } from '@/components/faq/FaqList';
import { FaqCategories } from '@/components/faq/FaqCategories';

export default function FaqPage() {
  return (
    <div className='min-h-screen'>
      <FaqCategories />
      <div className='mt-6'>
        <Suspense>
          <FaqList />
        </Suspense>
      </div>
    </div>
  );
}
