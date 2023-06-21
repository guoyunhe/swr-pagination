import { antd5Adaptor } from './antd5';

describe('antd5Adaptor', () => {
  it('getPaginationProps', () => {
    const setPage = jest.fn();
    const setPageSize = jest.fn();
    const props = antd5Adaptor.getPaginationProps(1, setPage, 15, setPageSize, 50);
    props.onChange(2, 20);
    expect(props.current).toBe(1);
    expect(props.pageSize).toBe(15);
    expect(props.total).toBe(50);
    expect(setPage).toHaveBeenCalledWith(2);
    expect(setPageSize).toHaveBeenCalledWith(20);
  });
});
