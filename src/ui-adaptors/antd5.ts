import { UIAdaptor } from '../types';

export const antd5Adaptor: UIAdaptor = {
  getPaginationProps(page, setPage, pageSize, setPageSize, total) {
    return {
      current: page,
      pageSize,
      onChange: (page: number, size: number) => {
        setPage(page);
        setPageSize(size);
      },
      total,
    };
  },
};
