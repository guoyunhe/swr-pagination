export interface SWRPaginationConfig {
  apiAdaptor?: APIAdaptor;
  uiAdaptor?: UIAdaptor;
  defaultPageSize?: number;
}

export interface APIAdaptor {
  buildQuery: (url: string, page: number, pageSize: number) => string;
  parseResult: (result: any) => ParsedResult;
}

export interface UIAdaptor {
  getPaginationProps: (
    page: number,
    setPage: (page: number) => void,
    pageSize: number,
    setPageSize: (pageSize: number) => void,
    total: number
  ) => any;
}

export interface ParsedResult {
  data?: any[];
  total?: number;
}

export interface GetPaginationOptions {
  page: number;
  pageSize: number;
  setPage: (page: number) => void;
  setPageSize: (page: number) => void;
}
