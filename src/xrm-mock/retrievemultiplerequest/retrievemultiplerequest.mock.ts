export class RetrieveMultipleRequestMock implements Xrm.RetrieveMultipleResult {
  public entities: any[];
  public nextLink: string;

  constructor(entities: any[], nextLink: string) {
    this.entities = entities;
    this.nextLink = nextLink;
  }
}
