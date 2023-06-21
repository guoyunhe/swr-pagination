import { next1Adaptor } from './next1';

describe('next1Adaptor', () => {
  it('getPaginationProps', () => {
    const setPage = jest.fn();
    const setPageSize = jest.fn();
    const props = next1Adaptor.getPaginationProps(1, setPage, 15, setPageSize, 50);
    props.onChange(2);
    props.onPageSizeChange(20);
    expect(props.current).toBe(1);
    expect(props.pageSize).toBe(15);
    expect(props.total).toBe(50);
    expect(setPage).toHaveBeenCalledWith(2);
    expect(setPageSize).toHaveBeenCalledWith(20);
  });
});
