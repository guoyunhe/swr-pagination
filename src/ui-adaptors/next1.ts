import { UIAdaptor } from '../types';

export const next1Adaptor: UIAdaptor = {
  getPaginationProps(page, setPage, pageSize, setPageSize, total) {
    return {
      current: page,
      pageSize,
      onChange: (page: number) => {
        setPage(page);
      },
      onPageSizeChange: (size: number) => {
        setPageSize(size);
      },
      total,
    };
  },
};
