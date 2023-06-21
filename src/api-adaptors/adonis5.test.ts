import { adonis5Adaptor } from './adonis5';

describe('adonis5Adaptor', () => {
  it('buildQuery', () => {
    expect(adonis5Adaptor.buildQuery('/posts', 1, 15)).toBe('/posts?page=1&perPage=15');
  });
  it('parseResult', () => {
    expect(
      adonis5Adaptor.parseResult({
        meta: {
          total: 50,
          per_page: 15,
          current_page: 1,
          last_page: 4,
          first_page_url: 'http://adonis5.app?page=1',
          last_page_url: 'http://adonis5.app?page=4',
          next_page_url: 'http://adonis5.app?page=2',
          prev_page_url: null,
          path: 'http://adonis5.app',
          from: 1,
          to: 15,
        },
        data: [
          {
            // Record...
          },
          {
            // Record...
          },
        ],
      })
    ).toEqual({ data: [{}, {}], total: 50 });
  });
});
