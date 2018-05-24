export class AttributeMetadataMock implements Xrm.Metadata.AttributeMetadata {
  public defaultFormValue: number;
  public options: string[];
  public logicalName: string;
  public displayName: string;
  public attributeType: XrmEnum.AttributeTypeCode;
  public entityLogicalName: string;
  public optionSet: Xrm.Metadata.OptionMetadata[];

  constructor(components: IAttributeMetadataComponents) {
    this.defaultFormValue = components.defaultFormValue;
    this.options = components.options;
    this.logicalName = components.logicalName;
    this.displayName = components.displayName;
    this.attributeType = components.attributeType;
    this.entityLogicalName = components.entityLogicalName;
    this.optionSet = components.optionSet;
  }
}

export interface IAttributeMetadataComponents {
  defaultFormValue?: number;
  options?: string[];
  logicalName?: string;
  displayName?: string;
  attributeType?: XrmEnum.AttributeTypeCode;
  entityLogicalName?: string;
  optionSet?: Xrm.Metadata.OptionMetadata[];
}
