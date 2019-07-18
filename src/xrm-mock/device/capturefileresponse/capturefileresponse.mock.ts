export class CaptureFileResponseMock implements Xrm.Device.CaptureFileResponse {
  public fileContent: string;
  public fileName: string;
  public fileSize: number;
  public mimeType: string;

  constructor(fileContent?: string, fileName?: string, fileSize?: number, mimeType?: string) {
    this.fileContent = fileContent;
    this.fileName = fileName;
    this.fileSize = fileSize;
    this.mimeType = mimeType;
  }
}
