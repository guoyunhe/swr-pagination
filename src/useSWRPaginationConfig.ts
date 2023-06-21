import { useContext } from 'react';
import { SWRPaginationConfigContext } from './SWRPaginationConfigContext';

export function useSWRPaginationConfig() {
  return useContext(SWRPaginationConfigContext);
}
