/// <reference types="xrm" />
export declare class PickFileOptionsMock implements Xrm.Device.PickFileOptions {
    accept: Xrm.Device.PickFileTypes;
    allowMultipleFiles: boolean;
    maximumAllowedFileSize: number;
    constructor(accept: Xrm.Device.PickFileTypes, allowMultipleFiles: boolean, maximumAllowedFileSize: number);
}
