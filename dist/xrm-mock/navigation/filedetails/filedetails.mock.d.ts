/// <reference types="xrm" />
export declare class FileDetailsMock implements Xrm.Navigation.FileDetails {
    fileContent: string;
    fileName: string;
    fileSize: number;
    mimeType: string;
    constructor(fileContent?: string, fileName?: string, fileSize?: number, mimeType?: string);
}
