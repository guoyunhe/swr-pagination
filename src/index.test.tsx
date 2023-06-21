import { render, screen } from '@testing-library/react';

describe('<SwrPagination/>', () => {
  it('render', async () => {
    render(<div>Hello</div>);

    const elem = await screen.findByText('Hello');

    expect(elem.tagName).toBe('DIV');
  });
});
