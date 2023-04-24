export interface ICaller<Option> {
  get<T>(url: string, option?: Option): Promise<T>;
  post<T, D>(url: string, data: D, option?: Option): Promise<T>;
  put<T, D>(url: string, data: D, option?: Option): Promise<T>;
  delete<T>(url: string, option?: Option): Promise<T>;
}
