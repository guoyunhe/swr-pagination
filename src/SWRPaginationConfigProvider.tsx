import { ReactNode } from 'react';
import { SWRPaginationConfigContext } from './SWRPaginationConfigContext';
import { SWRPaginationConfig } from './types';

export interface SWRPaginationConfigProviderProps extends SWRPaginationConfig {
  children?: ReactNode;
}

export function SWRPaginationConfigProvider({
  children,
  ...config
}: SWRPaginationConfigProviderProps) {
  return (
    <SWRPaginationConfigContext.Provider value={config}>
      {children}
    </SWRPaginationConfigContext.Provider>
  );
}
