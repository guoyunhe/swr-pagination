import { ReactNode } from 'react';

export interface SwrPaginationProps {
  children: ReactNode;
}

export function SwrPagination({ children }: SwrPaginationProps) {
  return <div className="SwrPagination">{children}</div>;
}
