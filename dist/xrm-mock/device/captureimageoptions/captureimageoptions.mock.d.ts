/// <reference types="xrm" />
export declare class CaptureImageOptionsMock implements Xrm.Device.CaptureImageOptions {
    allowEdit: boolean;
    height: number;
    preferFrontCamera: boolean;
    quality: number;
    width: number;
    constructor(components: ICaptureImageOptionsComponents);
}
export interface ICaptureImageOptionsComponents {
    allowEdit?: boolean;
    height?: number;
    preferFrontCamera?: boolean;
    quality?: number;
    width?: number;
}
