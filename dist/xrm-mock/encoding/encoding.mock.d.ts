/// <reference types="xrm" />
export declare class EncodingMock implements Xrm.Encoding {
    xmlAttributeEncode(arg: string): string;
    xmlEncode(arg: string): string;
    htmlAttributeEncode(arg: string): string;
    htmlDecode(arg: string): string;
    htmlEncode(arg: string): string;
}
