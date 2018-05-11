export class ExecuteResponseMock implements Xrm.ExecuteResponse {
  public body: string;
  public headers: any;
  public ok: boolean;
  public status: number;
  public statusText: string;
  public type: string;
  public url: string;

  public ExecuteResponseMock(components: IExecuteResponseComponents) {
    this.body = components.body;
    this.headers = components.headers;
    this.ok = components.ok;
    this.status = components.status;
    this.statusText = components.statusText;
    this.type = components.type;
    this.url = components.url;
  }
}

export interface IExecuteResponseComponents {
  body: string;
  headers: any;
  ok: boolean;
  status: number;
  statusText: string;
  type: string;
  url: string;
}
