'use client';

import { useState } from 'react';
import { FaqCategories } from './FaqCategories';
import { FaqList } from './FaqList';
import { FaqSearch } from './FaqSearch';

import { FaqSupport } from './FaqSupport';
import { FaqProcess } from './FaqProcess';
import { WibleBizAppDownload } from '@/components/common/WibleBizAppDownload';
import { FaqSearchResult } from './FaqSearchResult';

export function FaqContent() {
  const [keyword, setKeyword] = useState('');

  const handleResetKeyword = () => {
    setKeyword('');
  };

  return (
    <div>
      {/* 검색 영역 */}
      <div className='bg-gray-50 px-8 py-12'>
        <div className='mx-auto max-w-[600px]'>
          <FaqSearch keyword={keyword} setKeyword={setKeyword} />
        </div>
      </div>

      {/* FAQ 메인 영역 */}
      <div className='mx-auto max-w-[1200px] py-8'>
        {/* 검색 결과 */}
        <FaqSearchResult onReset={handleResetKeyword} />

        {/* 카테고리 */}
        <div className='mb-12'>
          <FaqCategories />
        </div>

        {/* FAQ 리스트 */}
        <div className='mb-20'>
          <FaqList />
        </div>

        {/* 서비스 문의 영역 */}
        <div className='mb-20'>
          <FaqSupport />
        </div>

        {/* 이용 프로세스 */}
        <div>
          <FaqProcess />
        </div>

        {/* 위블비즈 다운로드 */}
        <div className='mt-20'>
          <WibleBizAppDownload />
        </div>
      </div>
    </div>
  );
}
