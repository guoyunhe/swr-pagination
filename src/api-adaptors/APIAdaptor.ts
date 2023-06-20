export class APIAdaptor {
  public static buildQuery(url: string, page: number, pageSize: number): string {
    const [pathname, search] = url.split('?');
    return `${pathname}?${search}&page=${page}&pageSize=${pageSize}`;
  }

  public static parseResult(data: any) {
    return {};
  }
}
