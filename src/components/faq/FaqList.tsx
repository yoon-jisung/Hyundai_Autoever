'use client';

import { useQuery } from '@tanstack/react-query';
import { useFaqStore } from '@/store/faq';
import { cn } from '@/lib/utils';
import { getFaqs } from '@/api/faq';
import { useState, Suspense } from 'react';

interface FaqItem {
  id: number;
  categoryId: number;
  mainCategory: string;
  subCategory: string;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    categoryId: 1,
    mainCategory: '가입문의',
    subCategory: '가입',
    question: '가입 및 이용 조건은 어떻게 되나요?',
    answer:
      '아래의 조건 충족 시 위블 비즈 가입 및 이용이 가능합니다.\n\n① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요\n② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유\n③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)\n④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)\n⑤ 가입/이용 필수 약관 동의',
  },
  {
    id: 2,
    categoryId: 1,
    mainCategory: '가입문의',
    subCategory: '가입',
    question: '가입 절차는 어떻게 되나요?',
    answer:
      '위블 비즈 앱에서 아래와 같은 절차를 통해 회원 가입을 할 수 있습니다.\n\n① 본인 인증 : 본인 명의 휴대폰을 통해 본인 인증\n② 약관 동의 : 서비스 이용을 위한 필수/선택 약관 동의\n③ 개인정보 입력 : 아이디, 비밀번호, 주소 입력 및 마케팅 정보 수신동의 (선택)\n\n상품 구매(예약) 및 차량을 이용하시려면 운전면허 정보와 결제카드 정보까지 등록해야 합니다.\n\n④ 운전면허 정보 입력 : 취득일로부터 1년 이상 경과한 대한민국 운전면허 등록 가능 (마이페이지 > 결제/운전면허 관리)\n⑤ 결제정보 입력: 본인 명의의 신용/체크카드 입력 가능 (마이페이지 > 결제/운전면허 관리)',
  },
  {
    id: 3,
    categoryId: 1,
    mainCategory: '가입문의',
    subCategory: '가입',
    question: '가입한 적이 없는데 이미 가입한 회원이라고 나오며 가입이 되지 않아요.',
    answer:
      '가입한 적이 없는데 이미 가입한 회원이라고 나오며 가입이 되지 않는 상황일 경우\n\n위블 비즈 고객센터에 문의해주시면 바로 도움을 드리겠습니다.',
  },
  {
    id: 4,
    categoryId: 1,
    mainCategory: '가입문의',
    subCategory: '가입',
    question: '본인 인증이 정상적으로 되지 않아요.',
    answer:
      '휴대폰 본인인증이 안된다면 아래 경우를 확인해주세요.\n\n1. 안드로이드\n① 본인 명의의 휴대폰을 사용하고 계신가요?\n   : 타인 명의의 휴대폰을 사용하고 있다면 인증이 불가능합니다.\n② 기기 접근 권한에 동의하셨나요?\n   : 기기 접근 권한에 동의하지 않으실 경우 인증을 진행할 수 없습니다.\n\n2. iOS\n① 본인 명의의 휴대폰을 사용하고 계신가요?\n② 문자 발송이 안되나요?\n   : 문자 내용을 수정한 경우 인증이 불가합니다.\n\n위의 방법으로도 인증이 불가하신 경우, 위블 비즈 고객센터에 문의해주시면 도움을 드리겠습니다.',
  },
  {
    id: 5,
    categoryId: 1,
    mainCategory: '가입문의',
    subCategory: '로그인',
    question: '아이디/비밀번호를 분실했어요.',
    answer:
      "아이디/비밀번호를 분실하신 경우, 로그인 화면의 '아이디 찾기' 혹은 '비밀번호 찾기'를 통해 해결 가능합니다.\n\n① 아이디 분실 시 : 아이디 찾기 > 휴대폰 본인 인증 > 아이디 확인\n② 비밀번호 분실 시 : 비밀번호 초기화 > 휴대폰 본인 인증 > 새로운 비밀번호 설정\n\n위의 방법으로도 해결이 어려우신 경우, 위블 비즈 고객센터로 문의해주시면 도움을 드리겠습니다.",
  },
  {
    id: 6,
    categoryId: 1,
    mainCategory: '가입문의',
    subCategory: '회원등급',
    question: 'Greener 등급이란 무엇인가요? 등급별 혜택은 어떻게 되나요?',
    answer:
      "위블 비즈에서는 더 나은 환경을 위하여 친환경 차량 주행을 하시는 회원을 대상으로 'Greener' 등급 제도를 운영하고 있습니다.\n\n운전면허를 등록하여 정상적으로 위블 비즈의 차량 이용이 가능한 시점부터 회원 등급이 부여되며, 개인, 비즈니스 프로필의 최근 6개월 간의 월평균 친환경차 주행거리 합산 실적을 기반으로 등급이 부여됩니다.\n\n(가입으로부터 6개월이 되지 않은 회원의 경우, 가입 후 개월수의 평균으로 산정)\n\n매월 1일, Greener 등급이 재산정되며, 등급에 따른 다양한 혜택이 지급됩니다.\n\n자세한 혜택은 메뉴 > 나의 등급 옆 '혜택보기' 를 통해 확인하실 수 있습니다.",
  },
  {
    id: 7,
    categoryId: 1,
    mainCategory: '가입문의',
    subCategory: '면허',
    question: '위블 비즈를 이용하려면 면허증이 반드시 필요한가요?',
    answer:
      '위블 비즈 차량 이용을 위해서는 반드시 취득일이 1년 이상 경과한 대한민국 운전면허증(실물)이 필요합니다.\n\n운전면허증을 분실하였을 경우 운전면허 재발급을 받으신 후 이용이 가능합니다.',
  },
  {
    id: 8,
    categoryId: 1,
    mainCategory: '가입문의',
    subCategory: '면허',
    question: '운전면허를 취득한지 1년이 되지 않았어요.',
    answer:
      '안전한 차량 운행을 위하여 취득일이 1년 이상 경과한 면허증을 소지한 경우에만 차량 이용이 가능합니다.',
  },
  {
    id: 9,
    categoryId: 1,
    mainCategory: '가입문의',
    subCategory: '면허',
    question: '운전면허를 재발급 받은지 1년이 되지 않았어요.',
    answer:
      '면허 취득일로부터 1년이 지났으나 재발급으로 인해 발급일이 1년 미만인 운전면허를 신규로 등록하는 경우,\n\n위블 비즈 앱 - 왼쪽 상단 메뉴 - [마이페이지] - [결제/운전면허 관리] 에서 면허증을 촬영하여 면허 정보를 우선 등록한 후, 위블 비즈 고객센터에 문의하여 안내받은 메일로 면허 승인을 위한 서류(운전경력증명서 - 정부 24(https://www.gov.kr/)에서 발급 가능)를 제출해주시기 바랍니다.\n\n기존에 면허 정보가 저장되어 있는 고객님 중 면허를 재발급 받아 운전면허 정보 변경이 필요하신 경우, 위블 비즈 고객센터에 문의하신 이후 운전면허를 재등록해주시기 바랍니다.',
  },
  {
    id: 10,
    categoryId: 1,
    mainCategory: '가입문의',
    subCategory: '면허',
    question: '운전면허를 갱신/재발급했어요.',
    answer:
      '기존에 면허 정보가 저장되어 있는 고객님 중 면허를 재발급 받아 운전면허 정보 변경이 필요하신 경우, 위블 비즈 고객센터에 문의하신 이후 운전면허를 재등록해주시기 바랍니다.',
  },
  {
    id: 11,
    categoryId: 2,
    mainCategory: '비즈니스',
    subCategory: '이용방법',
    question: '법인 회원은 어떻게 가입하나요?',
    answer:
      '법인 회원 가입은 아래의 절차로 진행됩니다.\n\n① 사업자등록증 사본 준비\n② 위블 비즈 고객센터 문의\n③ 담당자 상담 후 가입 진행\n④ 법인 정보 등록 및 인증\n\n자세한 사항은 고객센터로 문의해 주시면 안내해 드리겠습니다.',
  },
  {
    id: 12,
    categoryId: 2,
    mainCategory: '비즈니스',
    subCategory: '결제',
    question: '법인카드로 결제가 가능한가요?',
    answer:
      '네, 법인 명의의 신용카드로도 결제가 가능합니다.\n\n단, 법인카드 등록 시 카드 소지자 본인 인증이 필요합니다.',
  },
  {
    id: 13,
    categoryId: 3,
    mainCategory: '사고/보험',
    subCategory: '보험',
    question: '보험 적용 범위는 어떻게 되나요?',
    answer:
      '기본적으로 대인, 대물, 자손 보험이 포함되어 있습니다.\n\n자세한 보상 범위 및 한도는 차량 예약 시 확인하실 수 있습니다.',
  },
  {
    id: 14,
    categoryId: 4,
    mainCategory: '예약/결제',
    subCategory: '예약',
    question: '예약 취소는 언제까지 가능한가요?',
    answer:
      '예약 취소는 이용 시작 1시간 전까지 가능합니다.\n\n이후 취소 시에는 취소 수수료가 발생할 수 있습니다.',
  },
  {
    id: 15,
    categoryId: 4,
    mainCategory: '예약/결제',
    subCategory: '결제',
    question: '결제 수단은 어떤 것이 있나요?',
    answer:
      '신용카드, 체크카드로 결제 가능합니다.\n\n법인카드도 사용 가능하며, 등록된 카드로 자동 결제됩니다.',
  },
  {
    id: 16,
    categoryId: 5,
    mainCategory: '차량문의',
    subCategory: '차종',
    question: '어떤 차종을 이용할 수 있나요?',
    answer:
      '전기차, 하이브리드 등 다양한 친환경 차량을 이용하실 수 있습니다.\n\n구체적인 차종은 앱에서 확인 가능합니다.',
  },
  {
    id: 17,
    categoryId: 6,
    mainCategory: '충전',
    subCategory: '충전소',
    question: '충전소 위치는 어떻게 확인하나요?',
    answer:
      '앱 내 지도에서 주변 충전소 위치를 확인할 수 있습니다.\n\n또한 실시간으로 충전소 사용 가능 여부도 확인 가능합니다.',
  },
  {
    id: 18,
    categoryId: 6,
    mainCategory: '충전',
    subCategory: '비용',
    question: '충전 비용은 어떻게 되나요?',
    answer:
      '충전 비용은 이용 요금에 포함되어 있습니다.\n\n별도의 충전 비용을 지불하실 필요가 없습니다.',
  },
  {
    id: 19,
    categoryId: 7,
    mainCategory: '쿠폰/기타',
    subCategory: '쿠폰',
    question: '쿠폰은 어디서 받을 수 있나요?',
    answer:
      '쿠폰은 다양한 이벤트 참여를 통해 받으실 수 있습니다.\n\n또한 정기적으로 진행되는 프로모션을 통해서도 제공됩니다.',
  },
  {
    id: 20,
    categoryId: 7,
    mainCategory: '쿠폰/기타',
    subCategory: '기타',
    question: '앱 오류는 어떻게 문의하나요?',
    answer:
      '앱 이용 중 오류가 발생한 경우, 고객센터로 문의해 주시면 신속하게 도와드리겠습니다.\n\n가능한 경우 오류 화면을 캡처하여 함께 보내주시면 더욱 빠른 해결이 가능합니다.',
  },
];

export function FaqList() {
  const { selectedCategory, activeTab } = useFaqStore();
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);

  const { data: faqData } = useQuery({
    queryKey: ['faqs', activeTab, selectedCategory, visibleCount],
    queryFn: () => getFaqs(activeTab, 0, visibleCount, selectedCategory),
  });

  const hasMore = faqData ? faqData.pageInfo.totalRecord > visibleCount : false;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <Suspense fallback={<div></div>}>
      <div>
        <ul className='space-y-4 border-t-2 border-gray-900'>
          {faqData?.items.map((item) => (
            <li key={item.id} className='overflow-hidden bg-white border-t border-gray-100'>
              <button
                type='button'
                onClick={() => setOpenItemId(openItemId === item.id ? null : item.id)}
                className='flex w-full items-center justify-between px-8 py-6 text-left'
              >
                <span className='text-[20px] font-bold text-midnight-900'>{item.question}</span>
                <span
                  className={cn(
                    'ml-4 text-gray-400 transition-transform duration-300',
                    openItemId === item.id ? 'rotate-180' : ''
                  )}
                >
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6 9L12 15L18 9'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </button>
              <div
                className={cn(
                  'grid transition-all duration-300 ease-in-out',
                  openItemId === item.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                )}
              >
                <div className='overflow-hidden'>
                  <div className='px-8 py-6'>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                      className='text-[13pt] text-[#6A7A87] [&_p]:mb-4 last:[&_p]:mb-0'
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {hasMore && (
          <div className='mt-8 text-center'>
            <button
              type='button'
              onClick={handleLoadMore}
              className='inline-flex items-center text-[18px] font-medium'
            >
              + 더보기
            </button>
          </div>
        )}
      </div>
    </Suspense>
  );
}
