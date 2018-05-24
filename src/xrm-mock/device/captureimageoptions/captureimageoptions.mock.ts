export class CaptureImageOptionsMock implements Xrm.Device.CaptureImageOptions {
  public allowEdit: boolean;
  public height: number;
  public preferFrontCamera: boolean;
  public quality: number;
  public width: number;

  constructor(components: ICaptureImageOptionsComponents) {
    this.allowEdit = components.allowEdit;
    this.height = components.height;
    this.preferFrontCamera = components.preferFrontCamera;
    this.quality = components.quality;
    this.width = components.width;
  }
}

export interface ICaptureImageOptionsComponents {
  allowEdit?: boolean;
  height?: number;
  preferFrontCamera?: boolean;
  quality?: number;
  width?: number;
}
