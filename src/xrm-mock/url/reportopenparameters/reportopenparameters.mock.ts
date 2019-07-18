export class ReportOpenParametersMock implements Xrm.Url.ReportOpenParameters {
  public action: Xrm.Url.ReportAction;
  public helpID?: string;
  public id: string;

  constructor(action: Xrm.Url.ReportAction, id: string, helpID?: string) {
    this.action = action;
    this.id = id;
    this.helpID = helpID;
  }
}
