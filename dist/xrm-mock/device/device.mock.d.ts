/// <reference types="xrm" />
export declare class DeviceMock implements Xrm.Device {
    captureAudio(): Xrm.Async.PromiseLike<Xrm.Device.CaptureFileResponse>;
    captureImage(imageOptions: Xrm.Device.CaptureImageOptions): Xrm.Async.PromiseLike<Xrm.Device.CaptureFileResponse>;
    captureVideo(): Xrm.Async.PromiseLike<Xrm.Device.CaptureFileResponse>;
    getBarcodeValue(): Xrm.Async.PromiseLike<string>;
    getCurrentPosition(): Xrm.Async.PromiseLike<Xrm.Device.GetCurrentPositionResponse>;
    pickFile(pickFileOptions: Xrm.Device.PickFileOptions): Xrm.Async.PromiseLike<Xrm.Device.CaptureFileResponse[]>;
}
