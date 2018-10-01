/// <reference types="xrm" />
export declare class LocalizedLabelMock implements Xrm.Metadata.LocalizedLabel {
    Label: string;
    LanguageCode: number;
    constructor(label: string, languageCode: number);
}
