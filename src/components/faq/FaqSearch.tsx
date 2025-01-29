export function FaqSearch() {
  return (
    <div className='relative'>
      <input
        type='text'
        placeholder='찾으시는 내용을 입력해 주세요'
        className='h-[52px] w-full rounded-lg border-0 bg-white px-4 text-base shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-mint-900'
      />
      <button type='button' className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400'>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path
            d='M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm10 2-4.35-4.35'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </div>
  );
}
