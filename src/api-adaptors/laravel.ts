import { APIAdaptor } from '../types';

export const laravelAdaptor: APIAdaptor = {
  buildQuery: (url, page, pageSize) => {
    const [pathname, search] = url.split('?');
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', String(page));
    searchParams.set('perPage', String(pageSize));
    return `${pathname}?${searchParams.toString()}`;
  },

  parseResult: (result) => {
    return {
      data: result.data,
      total: result.total,
    };
  },
};
