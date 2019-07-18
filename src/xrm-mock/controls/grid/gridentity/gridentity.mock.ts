export class GridEntityMock implements Xrm.Controls.Grid.GridEntity {
  private reference: Xrm.LookupValue;

  constructor(reference: Xrm.LookupValue) {
    this.reference = reference;
  }

  public getEntityName(): string {
    return this.reference.entityType;
  }
  public getEntityReference(): Xrm.LookupValue {
    return this.reference;
  }
  public getId(): string {
    return this.reference.id;
  }
  public getPrimaryAttributeValue(): string {
    return this.reference.name;
  }
}
