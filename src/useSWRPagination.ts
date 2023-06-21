import { useMemo, useState } from 'react';
import useSWR from 'swr';
import { laravelAdaptor } from './api-adaptors/laravel';
import { SWRPaginationConfig } from './types';
import { antd5Adaptor } from './ui-adaptors/antd5';
import { useSWRPaginationConfig } from './useSWRPaginationConfig';

export interface SWRPaginationOptions extends SWRPaginationConfig {
  swrConfig: any;
}

export function useSWRPagination(url: string, options?: SWRPaginationOptions) {
  const config = useSWRPaginationConfig();

  const apiAdaptor = options?.apiAdaptor || config.apiAdaptor || laravelAdaptor;
  const uiAdaptor = options?.uiAdaptor || config.uiAdaptor || antd5Adaptor;

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(
    options?.defaultPageSize || config.defaultPageSize || 10
  );

  const swrKey = useMemo(
    () => apiAdaptor.buildQuery(url, page, pageSize),
    [url, page, pageSize, apiAdaptor]
  );

  const { data: result } = useSWR(swrKey, options?.swrConfig);

  const { data, total } = useMemo(() => apiAdaptor.parseResult(result), [result, apiAdaptor]);

  const paginationProps = useMemo(
    () => uiAdaptor.getPaginationProps(page, setPage, pageSize, setPageSize, total),
    [page, setPage, pageSize, setPageSize, total, uiAdaptor]
  );

  return { page, setPage, pageSize, setPageSize, data, total, paginationProps };
}
