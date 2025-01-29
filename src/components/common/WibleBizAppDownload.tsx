import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import IcGooglePlay from '@/assets/ic_google-play-store.svg';
import IcAppleLogo from '@/assets/ic_apple-logo.svg';

interface AppStoreButtonProps {
  href: string;
  icon: StaticImageData;
  storeName: string;
}

function AppStoreButton({ href, icon, storeName }: AppStoreButtonProps) {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noreferrer'
      className='flex h-[60px] min-w-[296px] items-center justify-center gap-2 rounded-[4px] bg-white px-8 font-bold transition-colors'
    >
      <Image src={icon} alt={`${storeName} 아이콘`} width={24} height={24} />
      <span className='text-lg font-bold'>{storeName}</span>
    </Link>
  );
}

const STORE_ITEMS = [
  {
    href: 'https://play.google.com/store/apps/details?id=kor.mop.user.app',
    icon: IcGooglePlay,
    storeName: 'Google Play',
  },
  {
    href: 'https://apps.apple.com/kr/app/%EC%9C%84%EB%B8%94-%EB%B9%84%EC%A6%88/id1598065794',
    icon: IcAppleLogo,
    storeName: 'App Store',
  },
];

export function WibleBizAppDownload() {
  return (
    <div className='bg-gray-50 py-16 rounded-2xl'>
      <div className='app-info mx-auto max-w-[1200px] text-center'>
        <h2 className='text-[32px] font-bold text-midnight-900'>
          <em className='text-mint-900 not-italic'>위블 비즈 App</em> 지금 만나보세요!
        </h2>
        <div className='mt-8 flex items-center justify-center gap-2'>
          {STORE_ITEMS.map((item) => (
            <AppStoreButton
              key={item.storeName}
              href={item.href}
              icon={item.icon}
              storeName={item.storeName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
