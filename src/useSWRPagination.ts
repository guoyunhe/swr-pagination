import { useEffect, useMemo, useState } from 'react';
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
  const [total, setTotal] = useState(0);
  const [data, setData] = useState<any[]>([]);

  const swrKey = useMemo(
    () => apiAdaptor.buildQuery(url, page, pageSize),
    [url, page, pageSize, apiAdaptor]
  );

  const { data: result, error, isValidating, isLoading } = useSWR(swrKey, options?.swrConfig);

  useEffect(() => {
    const parsed = apiAdaptor.parseResult(result);
    if (typeof parsed.total === 'number') {
      setTotal(parsed.total);
    }
    if (Array.isArray(parsed.data)) {
      setData(parsed.data);
    }
  }, [result, apiAdaptor]);

  const paginationProps = useMemo(
    () => uiAdaptor.getPaginationProps(page, setPage, pageSize, setPageSize, total),
    [page, setPage, pageSize, setPageSize, total, uiAdaptor]
  );

  return {
    error,
    isValidating,
    isLoading,
    data,
    total,
    page,
    setPage,
    pageSize,
    setPageSize,
    paginationProps,
  };
}
