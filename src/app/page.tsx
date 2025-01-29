import { FaqHeader } from '@/components/layout/FaqHeader';
import { FaqContent } from '@/components/faq/FaqContent';

export default function FaqPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex-1 pt-[72px]'>
        <FaqHeader />
        <div className='mx-auto w-full max-w-[1660px] px-8'>
          <FaqContent />
        </div>
      </main>
    </div>
  );
}
