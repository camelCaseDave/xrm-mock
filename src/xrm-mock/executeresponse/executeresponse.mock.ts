export class ExecuteResponseMock implements Xrm.ExecuteResponse {
  public body: ReadableStream<Uint8Array>;
  public headers: Headers;
  public ok: boolean;
  public redirected: boolean;
  public status: number;
  public statusText: string;
  public type: ResponseType;
  public url: string;
  public trailer: Promise<Headers>;
  public bodyUsed: boolean;

  private notImplementedError = "ExecuteResponseMock methods not implemented. Consider stubbing calls using a tool such as Sinon.JS";

  constructor(components: IExecuteResponseComponents) {
    this.body = components.body;
    this.headers = components.headers;
    this.ok = components.ok;
    this.redirected = components.redirected;
    this.status = components.status;
    this.statusText = components.statusText;
    this.type = components.type;
    this.url = components.url;
    this.trailer = components.trailer;
    this.bodyUsed = components.bodyUsed;
  }

  public arrayBuffer(): Promise<ArrayBuffer> {
    throw new Error(this.notImplementedError);
  }
  public blob(): Promise<Blob> {
    throw new Error(this.notImplementedError);
  }
  public formData(): Promise<FormData> {
    throw new Error(this.notImplementedError);
  }
  public json(): Promise<any> {
    throw new Error(this.notImplementedError);
  }
  public text(): Promise<string> {
    throw new Error(this.notImplementedError);
  }
  public clone(): Response {
    throw new Error(this.notImplementedError);
  }
}

export interface IExecuteResponseComponents {
  body?: ReadableStream<Uint8Array>;
  headers?: Headers;
  ok?: boolean;
  redirected?: boolean;
  status?: number;
  statusText?: string;
  type?: ResponseType;
  url?: string;
  trailer?: Promise<Headers>;
  bodyUsed?: boolean;
}
