export class WebApiOfflineMock implements Xrm.WebApiOffline {
  private notImplementedError = "WebApi methods not implemented. Consider faking API calls using a tool such as Sinon.JS";

  public createRecord(entityLogicalName: string, record: any): Xrm.Async.PromiseLike<string> {
    throw new Error(this.notImplementedError);
  }

  public deleteRecord(entityLogicalName: string, id: string): Xrm.Async.PromiseLike<string> {
    throw new Error(this.notImplementedError);
  }

  public retrieveRecord(entityLogicalName: string, id: string, options: string): Xrm.Async.PromiseLike<any> {
    throw new Error(this.notImplementedError);
  }

  public retrieveMultipleRecords(entityLogicalName: string, options?: string, maxPageSize?: number): Xrm.Async.PromiseLike<Xrm.RetrieveMultipleResult> {
    throw new Error(this.notImplementedError);
  }

  public updateRecord(entityLogicalName: string, id: string, data: any): Xrm.Async.PromiseLike<any> {
    throw new Error(this.notImplementedError);
  }
}
