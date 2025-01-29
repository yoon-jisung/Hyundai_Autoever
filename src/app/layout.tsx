import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

const kiaSignature = localFont({
  src: [
    {
      path: './font/OTF/KiaSignatureFixOTFLight.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/OTF/KiaSignatureFixOTFRegular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/OTF/KiaSignatureFixOTFBold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-kia',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wiblebiz.kia.com'),
  title: {
    default: '위블 비즈(Wible Biz) - 친환경 모빌리티 서비스',
    template: '위블 비즈(Wible Biz) - 친환경 모빌리티 서비스',
  },
  description:
    '위블 비즈는 기업을 위한 친환경 모빌리티 서비스로 차량부터 전용 App/Web까지 업무차량 토탈 솔루션을 제공합니다.',
  keywords: [
    '위블비즈',
    '위블 비즈',
    '모빌리티',
    '구독서비스',
    '차량구독',
    '차량관리',
    '업무용차량',
    '법인차',
    '관용차',
    '전기차',
    'FMS',
    '스마트솔루션',
  ],
  authors: [{ name: 'Wible Biz' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: '#000000',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://wiblebiz.kia.com',
    siteName: '위블 비즈(Wible Biz)',
    title: '위블 비즈(Wible Biz)',
    description:
      '위블 비즈는 기업을 위한 친환경 모빌리티 서비스로 차량부터 전용 App/Web까지 업무차량 토탈 솔루션을 제공합니다.',
  },
  twitter: {
    card: 'summary',
    title: '위블 비즈(Wible Biz)',
    description:
      '위블 비즈는 기업을 위한 친환경 모빌리티 서비스로 차량부터 전용 App/Web까지 업무차량 토탈 솔루션을 제공합니다.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${kiaSignature.variable} font-kia`}>
        <Header />
        <div className='pt-16'>{children}</div>
      </body>
    </html>
  );
}
