export type Page<T> = Readonly<{
  page: number;
  results: T[];
  totalResults: number;
  totalPages: number;
}>;
