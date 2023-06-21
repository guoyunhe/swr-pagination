import { laravelAdaptor } from './laravel';

describe('laravelAdaptor', () => {
  it('buildQuery', () => {
    expect(laravelAdaptor.buildQuery('/posts', 1, 15)).toBe('/posts?page=1&perPage=15');
  });
  it('parseResult', () => {
    expect(
      laravelAdaptor.parseResult({
        total: 50,
        per_page: 15,
        current_page: 1,
        last_page: 4,
        first_page_url: 'http://laravel.app?page=1',
        last_page_url: 'http://laravel.app?page=4',
        next_page_url: 'http://laravel.app?page=2',
        prev_page_url: null,
        path: 'http://laravel.app',
        from: 1,
        to: 15,
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
