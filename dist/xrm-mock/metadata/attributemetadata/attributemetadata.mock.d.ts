/// <reference types="xrm" />
export declare class AttributeMetadataMock implements Xrm.Metadata.AttributeMetadata {
    defaultFormValue: number;
    options: string[];
    logicalName: string;
    displayName: string;
    attributeType: XrmEnum.AttributeTypeCode;
    entityLogicalName: string;
    optionSet: Xrm.Metadata.OptionMetadata[];
    constructor(components: IAttributeMetadataComponents);
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
