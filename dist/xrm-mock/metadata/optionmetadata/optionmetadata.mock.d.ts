/// <reference types="xrm" />
export declare class OptionMetadataMock implements Xrm.Metadata.OptionMetadata {
    Value: number;
    Color: string;
    IsManaged: boolean;
    ExternalValue: any;
    MetadataId: string;
    HasChanged: boolean;
    State: number;
    TransitionData: any;
    Label: Xrm.Metadata.Label;
    Description: Xrm.Metadata.Label;
    constructor(components: IOptionMetadataComponents);
}
export interface IOptionMetadataComponents {
    Value?: number;
    Color?: string;
    IsManaged?: boolean;
    ExternalValue?: any;
    MetadataId?: string;
    HasChanged?: boolean;
    State?: number;
    TransitionData?: any;
    Label?: Xrm.Metadata.Label;
    Description?: Xrm.Metadata.Label;
}
