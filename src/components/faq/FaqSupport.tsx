export function FaqSupport() {
  return (
    <div>
      <h2 className='mb-8 text-2xl font-bold text-midnight-900'>서비스 문의</h2>
      <div className='grid grid-cols-3 gap-4'>
        <button className='flex h-[120px] items-center justify-center rounded-2xl border border-gray-200 bg-white p-6'>
          <span className='flex items-center gap-2'>
            <span className='text-lg font-medium'>상품제안서 다운로드</span>
          </span>
        </button>
        <button className='flex h-[120px] items-center justify-center rounded-2xl border border-gray-200 bg-white p-6'>
          <span className='flex items-center gap-2'>
            <span className='text-lg font-medium'>상담문의 등록하기</span>
          </span>
        </button>
        <button className='flex h-[120px] items-center justify-center rounded-2xl border border-gray-200 bg-white p-6'>
          <span className='flex items-center gap-2'>
            <span className='text-lg font-medium'>카카오로 문의하기</span>
            <span className='text-sm text-gray-400'>(위블 비즈 채널)</span>
          </span>
        </button>
      </div>
    </div>
  );
}
