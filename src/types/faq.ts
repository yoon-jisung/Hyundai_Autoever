export interface CategoryResponse {
  categoryID: string;
  name: string;
}

export type TabType = 'CONSULT' | 'USAGE';

export interface FaqItem {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}

export interface FaqResponse {
  pageInfo: {
    totalRecord: number;
    offset: number;
    limit: number;
    prevOffset: number;
    nextOffset: number;
  };
  items: FaqItem[];
}
