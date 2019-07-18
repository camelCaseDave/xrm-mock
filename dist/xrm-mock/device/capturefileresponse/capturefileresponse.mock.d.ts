/// <reference types="xrm" />
export declare class CaptureFileResponseMock implements Xrm.Device.CaptureFileResponse {
    fileContent: string;
    fileName: string;
    fileSize: number;
    mimeType: string;
    constructor(fileContent?: string, fileName?: string, fileSize?: number, mimeType?: string);
}
