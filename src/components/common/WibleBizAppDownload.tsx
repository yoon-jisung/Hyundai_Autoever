import Link from 'next/link';

export function WibleBizAppDownload() {
  return (
    <div className='bg-gray-50 py-16'>
      <div className='app-info mx-auto max-w-[1200px] text-center'>
        <h2 className='text-2xl font-bold text-midnight-900'>
          <em className='text-mint-900 not-italic'>위블 비즈 App</em> 지금 만나보세요!
        </h2>
        <div className='mt-8 flex items-center justify-center gap-4'>
          <Link
            href='https://play.google.com/store/apps/details?id=kor.mop.user.app'
            target='_blank'
            rel='noreferrer'
            className='gp flex h-[52px] min-w-[180px] items-center justify-center gap-2 rounded-full bg-midnight-900 px-8 text-white transition-colors hover:bg-midnight-800'
          >
            <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' className='h-5 w-5'>
              <path d='M3.609 1.814L13.792 12 3.61 22.186a2.51 2.51 0 0 1-.497-.714c-.247-.51-.366-1.086-.366-1.724V4.252c0-.638.119-1.214.366-1.724.127-.262.291-.497.496-.714zm9.208 10.186l2.302 2.302-10.806 6.443.001-.001 8.503-8.744zm2.302-2.302l-2.302 2.302-8.503-8.744-.001-.001 10.806 6.443zm.577.288l3.78 2.26c.904.54 1.357 1.31 1.357 2.254 0 .945-.453 1.715-1.357 2.254l-3.78 2.26-2.65-2.65L15.696 12l-2.65-2.65 2.65-2.65z' />
            </svg>
            Google Play
          </Link>
          <Link
            href='https://apps.apple.com/kr/app/%EC%9C%84%EB%B8%94-%EB%B9%84%EC%A6%88/id1598065794'
            target='_blank'
            rel='noreferrer'
            className='as flex h-[52px] min-w-[180px] items-center justify-center gap-2 rounded-full bg-midnight-900 px-8 text-white transition-colors hover:bg-midnight-800'
          >
            <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' className='h-5 w-5'>
              <path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' />
            </svg>
            App Store
          </Link>
        </div>
      </div>
    </div>
  );
}
