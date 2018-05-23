export class ViewSelectorItemMock implements Xrm.Controls.ViewSelectorItem {
  private reference: Xrm.LookupValue;

  constructor(reference: Xrm.LookupValue) {
    this.reference = reference;
  }

  public getEntityReference(): Xrm.LookupValue {
    return this.reference;
  }
}
