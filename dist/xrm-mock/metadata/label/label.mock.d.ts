/// <reference types="xrm" />
export declare class LabelMock implements Xrm.Metadata.Label {
    LocalizedLabels: Xrm.Metadata.LocalizedLabel[];
    UserLocalizedLabel: Xrm.Metadata.LocalizedLabel;
    constructor(localLabels: Xrm.Metadata.LocalizedLabel[], userLocalLabels: Xrm.Metadata.LocalizedLabel);
}
