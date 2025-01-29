import { NextResponse } from 'next/server';

const CONSULT_CATEGORIES = [
  {
    categoryID: 'PRODUCT',
    name: '서비스 상품',
  },
  {
    categoryID: 'COUNSELING',
    name: '도입 상담',
  },
  {
    categoryID: 'CONTRACT',
    name: '계약',
  },
];

const USAGE_CATEGORIES = [
  {
    categoryID: 'JOIN',
    name: '가입문의',
  },
  {
    categoryID: 'BUSINESS',
    name: '비즈니스(업무용)',
  },
  {
    categoryID: 'ACCIDENT',
    name: '사고/보험',
  },
  {
    categoryID: 'RESERVATION',
    name: '예약/결제',
  },
  {
    categoryID: 'CAR',
    name: '차량문의',
  },
  {
    categoryID: 'CHARGE',
    name: '충전',
  },
  {
    categoryID: 'COUPON',
    name: '쿠폰/기타',
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tab = searchParams.get('tab');

  if (tab === 'CONSULT') {
    return NextResponse.json(CONSULT_CATEGORIES);
  }

  if (tab === 'USAGE') {
    return NextResponse.json(USAGE_CATEGORIES);
  }

  return NextResponse.json({ error: 'Invalid tab parameter' }, { status: 400 });
}
