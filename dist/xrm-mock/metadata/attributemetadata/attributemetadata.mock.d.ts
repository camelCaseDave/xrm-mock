/// <reference types="xrm" />
export declare class AttributeMetadataMock implements Xrm.Metadata.AttributeMetadata {
    DefaultFormValue: number;
    LogicalName: string;
    DisplayName: string;
    AttributeType: XrmEnum.AttributeTypeCode;
    EntityLogicalName: string;
    OptionSet: Xrm.Metadata.OptionMetadata[];
    constructor(components: IAttributeMetadataComponents);
}
export interface IAttributeMetadataComponents {
    DefaultFormValue?: number;
    LogicalName?: string;
    DisplayName?: string;
    AttributeType?: XrmEnum.AttributeTypeCode;
    EntityLogicalName?: string;
    OptionSet?: Xrm.Metadata.OptionMetadata[];
}
