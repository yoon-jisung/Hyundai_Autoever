interface FaqTabsProps {
  activeTab: 'intro' | 'travel';
  onTabChange: (tab: 'intro' | 'travel') => void;
}

export function FaqTabs({ activeTab, onTabChange }: FaqTabsProps) {
  return (
    <div className='flex border-b border-gray-200'>
      <button
        type='button'
        className={`h-[56px] min-w-[180px] border-b-2 px-4 text-base font-medium transition-colors ${
          activeTab === 'intro'
            ? 'border-midnight-900 text-midnight-900'
            : 'border-transparent text-gray-500'
        }`}
        onClick={() => onTabChange('intro')}
      >
        서비스 도입
      </button>
      <button
        type='button'
        className={`h-[56px] min-w-[180px] border-b-2 px-4 text-base font-medium transition-colors ${
          activeTab === 'travel'
            ? 'border-midnight-900 text-midnight-900'
            : 'border-transparent text-gray-500'
        }`}
        onClick={() => onTabChange('travel')}
      >
        서비스 이용
      </button>
    </div>
  );
}
