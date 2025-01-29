import IcDownload from '@/assets/ic_download.svg';
import IcWrite from '@/assets/ic_write.svg';
import IcTalk from '@/assets/ic_talk.svg';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface SupportItemProps {
  icon: StaticImageData;
  title: string;
  subTitle?: string;
  onClick?: () => void;
}

function SupportItem({ icon, title, subTitle, onClick }: SupportItemProps) {
  return (
    <button
      onClick={onClick}
      className='flex h-[120px] items-center justify-center rounded-2xl border border-gray-200 bg-white p-6'
    >
      <span className='flex items-center gap-2'>
        <Image src={icon} alt={`${title} 아이콘`} width={48} height={48} />
        <span>
          <span className='text-lg font-medium'>{title}</span>
          {subTitle && <span className='text-sm text-gray-400'>({subTitle})</span>}
        </span>
      </span>
    </button>
  );
}

const SUPPORT_ITEMS = [
  {
    icon: IcDownload,
    title: '상품제안서 다운로드',
  },
  {
    icon: IcWrite,
    title: '상담문의 등록하기',
  },
  {
    icon: IcTalk,
    title: '카카오로 문의하기',
    subTitle: '위블 비즈 채널',
  },
];

export function FaqSupport() {
  return (
    <div>
      <h2 className='mb-8 text-2xl font-bold text-midnight-900'>서비스 문의</h2>
      <div className='grid grid-cols-3 gap-4'>
        {SUPPORT_ITEMS.map((item) => (
          <SupportItem
            key={item.title}
            icon={item.icon}
            title={item.title}
            subTitle={item.subTitle}
          />
        ))}
      </div>
    </div>
  );
}
