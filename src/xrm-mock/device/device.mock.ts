export class DeviceMock implements Xrm.Device {
  public captureAudio(): Xrm.Async.PromiseLike<Xrm.Device.CaptureFileResponse> {
    throw new Error("Not implemented.");
  }
  public captureImage(imageOptions: Xrm.Device.CaptureImageOptions): Xrm.Async.PromiseLike<Xrm.Device.CaptureFileResponse> {
    throw new Error("Not implemented.");
  }
  public captureVideo(): Xrm.Async.PromiseLike<Xrm.Device.CaptureFileResponse> {
    throw new Error("Not implemented.");
  }
  public getBarcodeValue(): Xrm.Async.PromiseLike<string> {
    throw new Error("Not implemented.");
  }
  public getCurrentPosition(): Xrm.Async.PromiseLike<Xrm.Device.GetCurrentPositionResponse> {
    throw new Error("Not implemented.");
  }
  public pickFile(pickFileOptions: Xrm.Device.PickFileOptions): Xrm.Async.PromiseLike<Xrm.Device.CaptureFileResponse[]> {
    throw new Error("Not implemented.");
  }
}
