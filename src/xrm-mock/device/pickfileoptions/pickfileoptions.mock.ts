export class PickFileOptionsMock implements Xrm.Device.PickFileOptions {
  public accept: Xrm.Device.PickFileTypes;
  public allowMultipleFiles: boolean;
  public maximumAllowedFileSize: number;

  constructor(accept: Xrm.Device.PickFileTypes, allowMultipleFiles: boolean, maximumAllowedFileSize: number) {
    this.accept = accept;
    this.allowMultipleFiles = allowMultipleFiles;
    this.maximumAllowedFileSize = maximumAllowedFileSize;
  }
}
