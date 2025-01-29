import useSWR from 'swr';

export function useFaq(categoryId: string) {
  const { data, error, isLoading } = useSWR(`/api/faq?tab=USAGE&categoryId=${categoryId}`, {
    revalidateOnFocus: false,
    keepPreviousData: true, // 이전 데이터 유지
    suspense: true,
  });

  return {
    faqData: data,
    isError: error,
    isLoading,
  };
}
