export class LookupOptionsMock implements Xrm.LookupOptions {
  public allowMultiSelect?: boolean;
  public defaultEntityType?: string;
  public defaultViewId?: string;
  public entityTypes?: string[];
  public showBarcodeScanner?: boolean;
  public viewIds?: string[];

  constructor(components: ILookupOptionsComponents) {
    this.allowMultiSelect = components.allowMultiSelect;
    this.defaultEntityType = components.defaultEntityType;
    this.defaultViewId = components.defaultViewId;
    this.entityTypes = components.entityTypes;
    this.showBarcodeScanner = components.showBarcodeScanner;
    this.viewIds = components.viewIds;
  }
}

export interface ILookupOptionsComponents {
  allowMultiSelect?: boolean;
  defaultEntityType?: string;
  defaultViewId?: string;
  entityTypes?: string[];
  showBarcodeScanner?: boolean;
  viewIds?: string[];
}
