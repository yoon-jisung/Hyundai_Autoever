import Image from 'next/image';
import { StaticImageData } from 'next/image';
import IcProcess01 from '@/assets/ic_process01.svg';
import IcProcess02 from '@/assets/ic_process02.svg';
import IcProcess03 from '@/assets/ic_process03.svg';
import IcProcess04 from '@/assets/ic_process04.svg';

interface ProcessItemProps {
  icon: StaticImageData;
  step: number;
  title: string;
  description: string;
  showArrow?: boolean;
}

function ProcessItem({ icon, step, title, description, showArrow }: ProcessItemProps) {
  return (
    <div className='relative flex flex-col items-start rounded-2xl bg-white p-8'>
      <div className='mb-4 flex h-16 w-16 items-center justify-center'>
        <Image src={icon} alt={title} width={48} height={48} />
      </div>
      <h3 className='mb-2 font-bold'>{`${step}. ${title}`}</h3>
      <p className='text-start text-sm text-gray-500'>{description}</p>
      {showArrow && (
        <div className='absolute -right-6 top-1/2 -translate-y-1/2'>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
            <path
              d='M9 6l6 6-6 6'
              stroke='#D1D5DB'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      )}
    </div>
  );
}

const PROCESS_ITEMS = [
  {
    icon: IcProcess01,
    title: '문의 등록',
    description: '상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.',
  },
  {
    icon: IcProcess02,
    title: '관리자 설정',
    description: '관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.',
  },
  {
    icon: IcProcess03,
    title: '임직원 가입',
    description: '사용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.',
  },
  {
    icon: IcProcess04,
    title: '서비스 이용',
    description: '사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!',
  },
] as const;

export function FaqProcess() {
  return (
    <div>
      <h2 className='mb-8 text-2xl font-bold text-midnight-900'>이용 프로세스 안내</h2>
      <div className='grid grid-cols-4 gap-4'>
        {PROCESS_ITEMS.map((item, index) => (
          <ProcessItem
            key={item.title}
            icon={item.icon}
            step={index + 1}
            title={item.title}
            description={item.description}
            showArrow={index < PROCESS_ITEMS.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
