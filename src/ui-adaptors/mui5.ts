import { UIAdaptor } from '../types';

export const mui5Adaptor: UIAdaptor = {
  getPaginationProps(page, setPage, pageSize, setPageSize, total) {
    return {
      page,
      count: Math.ceil(total / pageSize),
      onChange: (e: Event, newPage: number) => {
        setPage(newPage);
      },
    };
  },
};
