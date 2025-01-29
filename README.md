## 프로젝트 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

## 기술 스택

### Framework & Language

- Next.js 13.5.8 (App Router)
- TypeScript
- React 18

### 상태 관리

- Zustand (클라이언트 상태)
- React Query (서버 상태)

### 스타일링

- Tailwind CSS
- clsx & tailwind-merge (조건부 스타일링)

## 프로젝트 구조

```
src/
├── app/          # Next.js App Router
│   ├── api/      # API Route
│   └── layout.ts # 루트 레이아웃
├── assets/       # 이미지, 아이콘 등 정적 파일
├── components/   # 리액트 컴포넌트
│   ├── common/   # 공통 컴포넌트
│   ├── faq/      # FAQ 관련 컴포넌트
│   └── layout/   # 레이아웃 컴포넌트
├── hooks/        # 커스텀 훅
├── lib/          # 유틸리티 함수
├── store/        # Zustand 스토어
└── types/        # TypeScript 타입 정의
```
