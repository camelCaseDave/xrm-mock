import { XrmPromiseMock } from "../async/xrmpromise/xrmpromise.mock";

export class WebApiMock implements Xrm.WebApi {
  public online: Xrm.WebApiOnline;
  public offline: Xrm.WebApiOffline;

  private clientContext: Xrm.ClientContext;
  private isOffline: boolean;

  public WebApiMock(clientContext: Xrm.ClientContext) {
    this.clientContext = clientContext;
    this.isOffline = clientContext.getClientState() === "Offline";
  }

  public createRecord(entityLogicalName: string, record: any): Xrm.Async.PromiseLike<string> {
    if (this.isOffline) {
      return this.offline.createRecord(entityLogicalName, record);
    } else {
      return this.online.createRecord(entityLogicalName, record);
    }
  }

  public deleteRecord(entityLogicalName: string, id: string): Xrm.Async.PromiseLike<string> {
    if (this.isOffline) {
      return this.offline.deleteRecord(entityLogicalName, id);
    } else {
      return this.online.deleteRecord(entityLogicalName, id);
    }
  }

  public retrieveRecord(entityLogicalName: string, id: string, options: string): Xrm.Async.PromiseLike<any> {
    if (this.isOffline) {
      return this.offline.retrieveRecord(entityLogicalName, id, options);
    } else {
      return this.online.retrieveRecord(entityLogicalName, id, options);
    }
  }

  public retrieveMultipleRecords(entityLogicalName: string, options?: string, maxPageSize?: number): Xrm.Async.PromiseLike<Xrm.RetrieveMultipleResult> {
    if (this.isOffline) {
      return this.offline.retrieveMultipleRecords(entityLogicalName, options, maxPageSize);
    } else {
      return this.online.retrieveMultipleRecords(entityLogicalName, options, maxPageSize);
    }
  }

  public updateRecord(entityLogicalName: string, id: string, data: any): Xrm.Async.PromiseLike<any> {
    if (this.isOffline) {
      return this.offline.updateRecord(entityLogicalName, id, data);
    } else {
      return this.online.updateRecord(entityLogicalName, id, data);
    }
  }
  public isAvailableOffline(entityLogicalName: string): boolean {
    throw new Error("xrm-mock doesn\'t yet implement metadata features.");
  }
}
