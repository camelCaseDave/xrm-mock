import { CaptureFileResponseMock } from "../../../src/xrm-mock/";

describe("Xrm.Device.CaptureFileResponse Mock", () => {
  beforeEach(() => {
    this.captureFileResponse = new CaptureFileResponseMock("context", "Hello", 1028, "text/plain");
  });

  it("should exist", () => {
    expect(this.captureFileResponse).toBeDefined();
  });
});
