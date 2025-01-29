import { NextResponse } from 'next/server';

const CONSULT_FAQS = [
  {
    id: 38,
    categoryName: '도입문의',
    subCategoryName: '서비스 상품',
    question: '위블 비즈에서는 어떤 상품을 이용할 수 있나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">소속회사가 위블 비즈 이용 계약이 되어 있는 경우 업무 시간에는 이용 건별 별도 결제 없이 편리하게 업무용 차량을 이용할 수 있고(대여 요금은 소속 회사에서 부담), 비업무 시간에는 출퇴근 및 주말 여가 개인용 차량을 이용할 수 있습니다. </span></p>',
  },
  {
    id: 107,
    categoryName: '도입문의',
    subCategoryName: '서비스 상품',
    question: '위블 비즈 비즈니스용 상품 이용 시 무엇이 좋은가요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">위블 비즈의 비즈니스 상품 이용 시, 기존 차량 이용 대비 아래와 같은 장점이 있습니다...</span></p>',
  },
  {
    id: 134,
    categoryName: '도입문의',
    subCategoryName: '도입 상담',
    question: '비즈니스 상품 도입 기간은 얼마나 걸리나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">위블 비즈 도입 상담을 신청하신 경우, 빠른 시일 내에 기재해주신 연락처로 연락드릴 예정입니다. </span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">담당자와의 1:1 상담 후 최대한 원하시는 시기에 맞춰 서비스가 도입될 수 있도록 도와드리고 있으나, 도입하시는 상품에 따라 소요되는 기간은 다소 상이할 수 있습니다. </span></p>',
  },
  {
    id: 135,
    categoryName: '도입문의',
    subCategoryName: '계약',
    question: '비즈니스 상품 도입 절차가 어떻게 되나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">위블 비즈 비즈니스 상품 도입 절차는 아래와 같습니다.</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">① 상담 문의 등록 후 1:1 맞춤 상담 진행</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">② 서비스 도입 상품 및 세부 조건 협의 후 계약 진행</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">③ 관리자 Web 계정 생성 후 회사 정보 설정</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">④ 임직원 회원가입 진행</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">⑤ 전용 위블존에서 차량 대여 및 이용</span></p>',
  },
];

const USAGE_FAQS = [
  {
    id: 23,
    categoryName: '가입문의',
    subCategoryName: '가입',
    question: '가입 및 이용 조건은 어떻게 되나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">아래의 조건 충족 시 위블 비즈 가입 및 이용이 가능합니다.</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요  </span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유  </span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가) </span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가) </span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">⑤ 가입/이용 필수 약관 동의 </span></p>',
  },
  {
    id: 24,
    categoryName: '가입문의',
    subCategoryName: '가입',
    question: '가입 절차는 어떻게 되나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">위블 비즈 앱에서 아래와 같은 절차를 통해 회원 가입을 할 수 있습니다.</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">  ① 본인 인증 : 본인 명의 휴대폰을 통해 본인 인증</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">  ② 약관 동의 : 서비스 이용을 위한 필수/선택 약관 동의</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">  ③ 개인정보 입력 : 아이디, 비밀번호, 주소 입력 및 마케팅 정보 수신동의 (선택)</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;"></span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">상품 구매(예약) 및 차량을 이용하시려면 운전면허 정보와 결제카드 정보까지 등록해야 합니다. </span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">  ④ 운전면허 정보 입력 : 취득일로부터 1년 이상 경과한 대한민국 운전면허 등록 가능 (마이페이지 &gt; 결제/운전면허 관리)</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">  ⑤ 결제정보 입력: 본인 명의의 신용/체크카드 입력 가능 (마이페이지 &gt; 결제/운전면허 관리)</span></p>',
  },
  {
    id: 26,
    categoryName: '가입문의',
    subCategoryName: '가입',
    question: '가입한 적이 없는데 이미 가입한 회원이라고 나오며 가입이 되지 않아요.',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">가입한 적이 없는데 이미 가입한 회원이라고 나오며 가입이 되지 않는 상황일 경우</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">위블 비즈 고객센터에 문의해주시면 바로 도움을 드리겠습니다.</span></p>',
  },
  {
    id: 106,
    categoryName: '비즈니스(업무용)',
    subCategoryName: '상품',
    question: '위블 비즈 비즈니스용 상품이란 무엇인가요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">위블 비즈의 비즈니스 상품은, 이용 계약을 한 회사의 임직원들이 위블 비즈의 차량을 업무용으로 이용할 수 있는 서비스를 말합니다.</span></p>...',
  },
  {
    id: 111,
    categoryName: '비즈니스(업무용)',
    subCategoryName: '상품',
    question: '우리 회사의 위블 비즈 상품 계약에 관심이 있어요.',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">소속하신 회사의 위블 비즈 상품 계약에 관심이 있으시다면 기업 상담을 신청해주시면, 빠른 시일 내에 안내해드리겠습니다.</span></p>',
  },
  {
    id: 108,
    categoryName: '비즈니스(업무용)',
    subCategoryName: '프로필',
    question: '비즈니스 프로필이란 무엇인가요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">위블 비즈 이용 계약이 되어 있는 회사의 임직원께서는 위블 비즈 앱에서 비즈니스 프로필 생성 후, 비즈니스 프로필 상태에서 회사가 계약한 위블 비즈 상품을 이용할 수 있습니다.</span></p>...',
  },
  {
    id: 99,
    categoryName: '사고/보험',
    subCategoryName: '사고',
    question: '이용 중 사고가 발생했어요.',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">차량 이용 중 고장이나 사고 발생 시 즉시 고객센터로 연락해 신고해야 하며 회사의 안내를 준수해야 합니다.</span></p>...',
  },
  {
    id: 100,
    categoryName: '사고/보험',
    subCategoryName: '사고',
    question: '사고 처리 과정이 궁금해요.',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">사고 처리 과정은 아래와 같으며 사고 접수 후, 위블 비즈 앱 또는 담당자의 별도 안내를 통해 사고 처리 현황을 확인할 수 있습니다.</span></p>...',
  },
  {
    id: 103,
    categoryName: '사고/보험',
    subCategoryName: '보험',
    question: '개인 보험이 있어도 위블 비즈 보험을 반드시 가입해야 하나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">개인 차량 보험이 있더라도 위블 비즈 이용 시에는 위블 비즈 보험을 필수로 가입해야 합니다.</span></p>...',
  },
  {
    id: 39,
    categoryName: '예약/결제',
    subCategoryName: '예약',
    question: '개인용 차량 예약은 어떻게 하나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">결제 카드 정보, 운전 면허 정보를 등록한 후 위블 비즈 메인 지도 화면에서 위블존, 이용 시간, 차량을 선택하여 결제 시 차량 예약이 완료됩니다.</span></p>...',
  },
  {
    id: 40,
    categoryName: '예약/결제',
    subCategoryName: '예약',
    question: '비즈니스 프로필에서 개인 프로필로 전환하려면 어떻게 해야 하나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">위블 비즈 앱에서 아래의 방법으로 개인&lt;-&gt;비즈니스 프로필을 전환할 수 있습니다.</span></p>...',
  },
  {
    id: 47,
    categoryName: '예약/결제',
    subCategoryName: '결제',
    question: '위블 비즈를 이용하려면 결제카드를 꼭 등록해야 하나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">위블 비즈를 이용하기 위해서는 이용 상품의 대여 요금 결제를 위해 반드시 유효한 신용/체크카드 정보를 등록해야 합니다.</span></p>...',
  },
  {
    id: 62,
    categoryName: '차량문의',
    subCategoryName: '차량',
    question: '운행 할 차량의 옵션을 미리 확인하고 싶어요.',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">대여 예약 차량 선택 시 해당 차량의 상세정보 보기 (차량 사진에서 돋보기) 버튼을 클릭하면 운행 차량의 색상과 옵션 등 상세정보를 확인할 수 있습니다.</span></p>...',
  },
  {
    id: 63,
    categoryName: '차량문의',
    subCategoryName: '차량',
    question: '위블 비즈 차량에는 후방 카메라가 있나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">현재 운행되고 있는 모든 위블 비즈 차량에는 후방카메라가 장착되어 있으니 이용에 참고 부탁드립니다.</span></p>',
  },
  {
    id: 64,
    categoryName: '차량문의',
    subCategoryName: '차량',
    question: '위블 비즈 차량에는 하이패스 단말기가 장착되어 있나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">현재 운행되고 있는 모든 위블 비즈 차량에는 하이패스 단말기가 장착되어 있습니다.</span></p>...',
  },
  {
    id: 90,
    categoryName: '충전',
    subCategoryName: '충전',
    question: '전기차 충전 방법이 궁금해요.',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">차량 충전이 필요하신 경우 인근 전기차 충전소에서 충전해주시고, 충전은 반드시 차량 안에 비치된 전용 충전카드로 결제해주세요.</span></p>...',
  },
  {
    id: 91,
    categoryName: '충전',
    subCategoryName: '충전',
    question: '전기차 충전 비용은 어떻게 결제되나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">차량 충전은 차량 안에 비치된 위블 비즈 전용 충전 카드로 결제 부탁드립니다.</span></p>...',
  },
  {
    id: 92,
    categoryName: '충전',
    subCategoryName: '충전',
    question: '차량 안에 충전 카드가 없어요.',
    answer:
      "<p><span style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\">차량별 충전카드 위치는 '차량별 이용 방법'을 참고해주시고, 차량 내에 전용 충전카드가 없을 경우 고객센터로 연락주시기 바랍니다.</span></p>...",
  },
  {
    id: 122,
    categoryName: '쿠폰/기타',
    subCategoryName: '쿠폰',
    question: '쿠폰으로 할인받을 수 있는 항목은 어떤 것이 있나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">쿠폰 조건에 따라 적용 가능한 할인 상품, 할인 금액이 상이합니다.</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">쿠폰 사용 전에 꼭 해당 쿠폰의 세부 조건을 확인하시기 바랍니다.</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">▶ 쿠폰 확인 방법: 위블 비즈 앱 - 왼쪽 상단 메뉴 - [쿠폰] - [내쿠폰] - 해당 쿠폰의 사용 가능 조건 확인</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">*모든 쿠폰은 결제 시, 대여요금에 한해 적용되며 1개만 사용 가능합니다.</span></p>',
  },
  {
    id: 123,
    categoryName: '쿠폰/기타',
    subCategoryName: '쿠폰',
    question: '쿠폰은 어떻게 등록할 수 있나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">아래 절차에 따라 쿠폰을 등록할 수 있습니다.</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">  ① 쿠폰북 다운로드 : 위블 비즈 앱 - 왼쪽 상단 메뉴 - [쿠폰] - [쿠폰북] - 원하는 쿠폰 우측 &#39;다운로드&#39; 버튼 클릭</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">  ② 개인 쿠폰 등록 : 위블 비즈 앱 - 왼쪽 상단 메뉴 - [쿠폰] - [내쿠폰] - [쿠폰 코드 입력] - [등록]</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">  *쿠폰 등록이 원활하지 않은 경우, 고객센터에 문의해주시기 바랍니다.</span></p>',
  },
  {
    id: 124,
    categoryName: '쿠폰/기타',
    subCategoryName: '쿠폰',
    question: '보유한 쿠폰은 어디에서 확인할 수 있나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">보유하신 쿠폰은 위블 비즈 앱에서 간편하게 확인이 가능합니다.</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">  ▶ 쿠폰 확인 방법: 위블 비즈 앱 - 왼쪽 상단 메뉴 - [쿠폰] - [내쿠폰]</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">  *쿠폰이 보이지 않을 경우, 고객센터에 문의해주시기 바랍니다.</span></p>',
  },
  {
    id: 125,
    categoryName: '쿠폰/기타',
    subCategoryName: '쿠폰',
    question: '예약 시 보유한 쿠폰이 적용되지 않아요.',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">쿠폰 조건에 따라 적용 가능한 쿠폰이 상이합니다. </span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">쿠폰이 적용되지 않을 경우, 아래 메뉴에서 해당 쿠폰의 사용 가능 조건을 확인하시기 바랍니다.   </span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">▶ 쿠폰 확인 방법: 위블 비즈 앱 - 왼쪽 상단 메뉴 - [쿠폰] - [내쿠폰] - 해당 쿠폰의 사용 가능 조건 확인  </span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">*모든 쿠폰은 결제 시, 대여요금에 한해 적용되며 1개만 사용 가능합니다.</span></p>',
  },
  {
    id: 126,
    categoryName: '쿠폰/기타',
    subCategoryName: '쿠폰',
    question: '쿠폰을 사용하여 예약 결제했는데 예약을 취소하면 쿠폰도 삭제되나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">예약 취소 시, 쿠폰의 사용기간이 남아있는 경우에는 해당 쿠폰이 재발급됩니다.</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">단, 쿠폰의 사용기간이 만료되었을 경우에는 예약 취소 시 해당 쿠폰은 소멸됩니다.</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">   ▶ 쿠폰 확인 방법: 위블 비즈 앱 - 왼쪽 상단 메뉴 - [쿠폰] - [내쿠폰]</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">  *예약 취소 후에도 사용기간이 남아 있는 쿠폰이 재발급되지 않는 경우, 고객센터에 문의해주시기 바랍니다.</span></p>',
  },
  {
    id: 127,
    categoryName: '쿠폰/기타',
    subCategoryName: '기타',
    question: '분실물이 발생했을 때에는 어떻게 해야 하나요?',
    answer:
      "<p><span style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\">'두고 내린 물건 찾기' 기능으로 반납 후에도 도어 제어를 통해 물건을 찾아가실 수 있습니다. (단, 차량 반납 후 30분 이내) </span></p><p><span style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\">반납 후 30분이 초과되었거나, 해당 차량의 다음 예약 건으로 '두고 내린 물건 찾기' 기능 사용이 불가한 경우, 고객센터(1833-4964)로 연락 주시면 물품 회수에 도움 드리겠습니다.  </span></p><p><span style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\">*위블 비즈에서는 대여하신 차량에서 발생되는 물품 분실에 대한 배상 책임이 없습니다.</span></p><p><span style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\">*이용 중 이전 고객의 분실물을 발견 시, 분실물 크기에 따라 [보조석 서랍] 또는 [트렁크]에 보관후 고객센터 또는 카카오 상담 채널로 말씀해주시면 감사하겠습니다. </span></p>",
  },
  {
    id: 128,
    categoryName: '쿠폰/기타',
    subCategoryName: '기타',
    question: '차량에서 이전 사용자의 분실물을 발견했어요.',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">이전 사용자의 소지품 발견 시 고객센터로 연락주시기 바랍니다.</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">안전한 보관을 위해 해당 소지품은 글로브박스 혹은 트렁크에 보관 후 사진 촬영 부탁드립니다.</span></p>',
  },
  {
    id: 65,
    categoryName: '차량문의',
    subCategoryName: '차량',
    question: '차량별 이용 방법을 확인하고 싶어요.',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">각 차량의 차량별 이용 방법 안내 메뉴에서 차량별 이용 방법, 충전 방법 등을 확인할 수 있습니다.</span></p>',
  },
  {
    id: 66,
    categoryName: '차량문의',
    subCategoryName: '차량',
    question: '블루투스는 어떻게 연결하나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">아래의 방법으로 블루투스를 연결할 수 있습니다.</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">  ① 우선 차량 시동을 걸어주세요.</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">  ② 스마트폰 설정 메뉴에서 블루투스 기능을 켜주세요.</span></p><p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">  ③ 블루투스 검색 결과에서 이용하시는 위블 비즈 차종을 선택 후 연결해주세요.</span></p>',
  },
  {
    id: 67,
    categoryName: '차량문의',
    subCategoryName: '차량',
    question: '위블 비즈 차량 이용은 어떻게 하나요?',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">위블 비즈 앱을 통해 스마트폰 하나로 대여 및 차량 제어, 반납까지 가능합니다.</span></p>...',
  },
  {
    id: 33,
    categoryName: '가입문의',
    subCategoryName: '면허',
    question: '운전면허를 갱신/재발급했어요.',
    answer:
      '<p><span style="font-size: \'13pt\'; color: rgba(106, 122, 135, 1); word-break: keep-all;">기존에 면허 정보가 저장되어 있는 고객님 중 면허를 재발급 받아 운전면허 정보 변경이 필요하신 경우, 위블 비즈 고객센터에 문의하신 이후 운전면허를 재등록해주시기 바랍니다.</span></p>',
  },
  {
    id: 28,
    categoryName: '가입문의',
    subCategoryName: '로그인',
    question: '아이디/비밀번호를 분실했어요.',
    answer:
      "<p><span style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\">아이디/비밀번호를 분실하신 경우, 로그인 화면의 '아이디 찾기' 혹은 '비밀번호 찾기'를 통해 해결 가능합니다.</span></p><p><span style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\">  ① 아이디 분실 시 : 아이디 찾기 &gt; 휴대폰 본인 인증 &gt; 아이디 확인</span></p><p><span style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\">  ② 비밀번호 분실 시 : 비밀번호 초기화 &gt; 휴대폰 본인 인증 &gt; 새로운 비밀번호 설정</span></p><p><span style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\"></span></p><p><span style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\">위의 방법으로도 해결이 어려우신 경우, 위블 비즈 고객센터로 문의해주시면 도움을 드리겠습니다.</span></p>",
  },
  {
    id: 29,
    categoryName: '가입문의',
    subCategoryName: '회원등급',
    question: 'Greener 등급이란 무엇인가요? 등급별 혜택은 어떻게 되나요?',
    answer:
      "<p><span style=\"font-size: '13pt'; color: rgba(106, 122, 135, 1); word-break: keep-all;\">위블 비즈에서는 더 나은 환경을 위하여 친환경 차량 주행을 하시는 회원을 대상으로 'Greener' 등급 제도를 운영하고 있습니다.</span></p>...",
  },
];

const CATEGORY_MAPPING = {
  // CONSULT 카테고리
  PRODUCT: '서비스 상품',
  COUNSELING: '도입 상담',
  CONTRACT: '계약',
  // USAGE 카테고리
  SIGN_UP: '가입',
  LOGIN: '로그인',
  GRADE: '회원등급',
  LICENSE: '면허',
  BUSINESS: '상품',
  ACCIDENT: '사고',
  RESERVATION: '예약',
  PAYMENT: '결제',
  VEHICLE: '차량',
  REFUEL: '충전',
  COUPON: '쿠폰',
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tab = searchParams.get('tab');
  const categoryId = searchParams.get('faqCategoryID');
  const limit = Number(searchParams.get('limit')) || 10;
  const offset = Number(searchParams.get('offset')) || 0;

  let filteredItems = [];

  if (tab === 'CONSULT') {
    filteredItems = CONSULT_FAQS;
  } else if (tab === 'USAGE') {
    filteredItems = USAGE_FAQS;
  } else {
    return NextResponse.json({ error: 'Invalid tab parameter' }, { status: 400 });
  }

  if (categoryId && categoryId !== 'ALL') {
    const subCategory = CATEGORY_MAPPING[categoryId as keyof typeof CATEGORY_MAPPING];
    filteredItems = filteredItems.filter((item) => item.subCategoryName === subCategory);
  }

  const items = filteredItems.slice(offset, offset + limit);
  const totalRecord = filteredItems.length;

  return NextResponse.json({
    pageInfo: {
      totalRecord,
      offset,
      limit,
      prevOffset: Math.max(0, offset - limit),
      nextOffset: offset + limit < totalRecord ? offset + limit : offset,
    },
    items,
  });
}
