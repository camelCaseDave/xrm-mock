export class RetrieveMultipleRequestMock implements Xrm.RetrieveMultipleResult {
  public entities: any[];
  public nextLink: string;

  public RetrieveMultipleRequestMock(entities: any[], nextLink: string) {
    this.entities = entities;
    this.nextLink = nextLink;
  }
}
