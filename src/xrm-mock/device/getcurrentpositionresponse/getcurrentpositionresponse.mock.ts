export class GetCurrentPositionResponseMock implements Xrm.Device.GetCurrentPositionResponse {
  public coords: any;
  public timestamp: number;

  constructor(coords: any, timestamp: number) {
    this.coords = coords;
    this.timestamp = timestamp;
  }
}
