import { GetPaginationOptions } from '../types';

export class UIAdaptor {
  public static getPaginationProps({
    page,
    pageSize,
    setPage,
    setPageSize,
  }: GetPaginationOptions): any {
    return {
      page,
      pageSize,
      onChange: setPage,
      onPageSizeChange: setPageSize,
    };
  }
}
