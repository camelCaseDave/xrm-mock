export class WebApiOnlineMock implements Xrm.WebApiOnline {
  private offline: Xrm.WebApiOffline;
  private notImplementedError = "WebApi methods not implemented. Consider faking API calls using a tool such as Sinon.JS";

  constructor(offlineCapabilities: Xrm.WebApiOffline) {
    this.offline = offlineCapabilities;
  }

  public execute(request: any): Xrm.Async.PromiseLike<Xrm.ExecuteResponse> {
    throw new Error(this.notImplementedError);
  }

  public executeMultiple(request: any[]): Xrm.Async.PromiseLike<Xrm.ExecuteResponse[]> {
    throw new Error(this.notImplementedError);
  }

  public createRecord(entityLogicalName: string, record: any): Xrm.Async.PromiseLike<Xrm.CreateResponse> {
    return this.offline.createRecord(entityLogicalName, record);
  }

  public deleteRecord(entityLogicalName: string, id: string): Xrm.Async.PromiseLike<string> {
    return this.offline.deleteRecord(entityLogicalName, id);
  }

  public retrieveRecord(entityLogicalName: string, id: string, options: string): Xrm.Async.PromiseLike<any> {
    return this.offline.retrieveRecord(entityLogicalName, id, options);
  }

  public retrieveMultipleRecords(entityLogicalName: string, options?: string, maxPageSize?: number): Xrm.Async.PromiseLike<Xrm.RetrieveMultipleResult> {
    return this.offline.retrieveMultipleRecords(entityLogicalName, options, maxPageSize);
  }

  public updateRecord(entityLogicalName: string, id: string, data: any): Xrm.Async.PromiseLike<any> {
    return this.offline.updateRecord(entityLogicalName, id, data);
  }
}
