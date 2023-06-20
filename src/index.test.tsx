import { render, screen } from '@testing-library/react';
import { SwrPagination } from '.';

describe('<SwrPagination/>', () => {
  it('render', async () => {
    render(<SwrPagination>Hello</SwrPagination>);

    const elem = await screen.findByText('Hello');

    expect(elem.className).toBe('SwrPagination');
  });
});
