export type Page<I extends Iterable<any>> = Readonly<{
  page: number;
  limit: number;
  total_results: number;
  total_pages: I[];
}>;
