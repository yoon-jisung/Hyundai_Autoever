'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Logo from '@/assets/logo.svg';

const menuItems = [
  { id: 1, name: '서비스 소개', href: '/Guide' },
  { id: 2, name: '자주 묻는 질문', href: '/FAQ', isActive: true },
  { id: 3, name: '새소식', href: '/News' },
  { id: 4, name: '상담문의', href: '/Counsel' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='fixed left-0 right-0 top-0 z-[100] h-[72px]'>
      <div className='inner relative mx-auto flex h-full max-w-[1660px] items-center justify-between px-8'>
        {/* 로고 */}
        <Link href='/' className='logo relative z-[101]'>
          <Image src={Logo} alt='Wible BIZ' width={160} height={48} priority />
        </Link>

        {/* 메인 네비게이션 */}
        <nav className='hidden h-full md:block'>
          <ul className='flex h-full'>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={cn(
                  'relative h-full',
                  item.isActive &&
                    'active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:bg-mint-900 before:content-[""]'
                )}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'relative text-midnight-900 flex items-center px-[34px] text-[18px] font-bold leading-[72px] transition-colors'
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <span className='util relative z-[101] md:hidden'>
          <button
            type='button'
            className='nav flex h-[72px] w-[72px] items-center justify-center'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='메뉴 열기/닫기'
            data-ui-click='nav-toggle'
          >
            <span className='relative h-[18px] w-[24px]'>
              <span
                className={cn(
                  'absolute left-0 h-[2px] w-full bg-midnight-900 transition-all duration-300',
                  isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-midnight-900 transition-all duration-300',
                  isMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'absolute left-0 h-[2px] w-full bg-midnight-900 transition-all duration-300',
                  isMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
                )}
              />
            </span>
          </button>
        </span>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className='fixed inset-0 top-[72px] z-[100] bg-white md:hidden'>
            <nav className='border-t border-gray-200'>
              <ul>
                {menuItems.map((item) => (
                  <li key={item.id} className='border-b border-gray-100'>
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-8 py-4 text-[15px] font-medium transition-colors',
                        item.isActive ? 'text-midnight-900' : 'text-gray-500'
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
