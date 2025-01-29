export function FaqProcess() {
  return (
    <div>
      <h2 className='mb-8 text-2xl font-bold text-midnight-900'>이용 프로세스 안내</h2>
      <div className='grid grid-cols-4 gap-4'>
        <div className='relative flex flex-col items-center rounded-2xl bg-white p-8'>
          <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50'>
            <span className='text-2xl font-bold text-mint-900'>1</span>
          </div>
          <h3 className='mb-2 font-bold'>문의 등록</h3>
          <p className='text-center text-sm text-gray-500'>
            상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.
          </p>
        </div>
        {/* 나머지 프로세스 아이템들 */}
      </div>
    </div>
  );
}
