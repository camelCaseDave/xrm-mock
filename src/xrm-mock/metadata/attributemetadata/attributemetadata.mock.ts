export class AttributeMetadataMock implements Xrm.Metadata.AttributeMetadata {
  public DefaultFormValue: number;
  public LogicalName: string;
  public DisplayName: string;
  public AttributeType: XrmEnum.AttributeTypeCode;
  public EntityLogicalName: string;
  public OptionSet: Xrm.Metadata.OptionMetadata[];

  constructor(components: IAttributeMetadataComponents) {
    this.DefaultFormValue = components.DefaultFormValue;
    this.LogicalName = components.LogicalName;
    this.DisplayName = components.DisplayName;
    this.AttributeType = components.AttributeType;
    this.EntityLogicalName = components.EntityLogicalName;
    this.OptionSet = components.OptionSet;
  }
}

export interface IAttributeMetadataComponents {
  DefaultFormValue?: number;
  LogicalName?: string;
  DisplayName?: string;
  AttributeType?: XrmEnum.AttributeTypeCode;
  EntityLogicalName?: string;
  OptionSet?: Xrm.Metadata.OptionMetadata[];
}
