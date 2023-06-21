import { createContext } from 'react';
import { SWRPaginationConfig } from './types';

export const SWRPaginationConfigContext = createContext<SWRPaginationConfig>({
  defaultPageSize: 10,
});
