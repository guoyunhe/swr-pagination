import { mui5Adaptor } from './mui5';

describe('mui5Adaptor', () => {
  it('getPaginationProps', () => {
    const setPage = jest.fn();
    const setPageSize = jest.fn();
    const props = mui5Adaptor.getPaginationProps(1, setPage, 15, setPageSize, 50);
    props.onChange({}, 2);
    expect(props.page).toBe(1);
    expect(props.count).toBe(4);
    expect(setPage).toHaveBeenCalledWith(2);
  });
});
