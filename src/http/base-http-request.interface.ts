export interface IBaseHttpRequest {
  readonly url: string;
  readonly headers?: HeadersInit;
}