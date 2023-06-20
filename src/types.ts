export interface GetPaginationOptions {
  page: number;
  pageSize: number;
  setPage: (page: number) => void;
  setPageSize: (page: number) => void;
}
