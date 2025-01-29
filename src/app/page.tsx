import { FaqHeader } from '@/components/layout/FaqHeader';
import { FaqContent } from '@/components/faq/FaqContent';
import { FaqTabs } from '@/components/faq/FaqTabs';

export default function FaqPage() {
  return (
    <div className='flex min-h-screen flex-col px-12'>
      <main className='flex-1 pt-[72px] max-w-[1240px] mx-auto'>
        <FaqHeader />
        <div className='mx-auto w-full'>
          <FaqTabs />

          <FaqContent />
        </div>
      </main>
    </div>
  );
}
