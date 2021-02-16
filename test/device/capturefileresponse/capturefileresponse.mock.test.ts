import { CaptureFileResponseMock } from "../../../src/xrm-mock/";

describe("Xrm.Device.CaptureFileResponse Mock", () => {
  let captureFileResponse: CaptureFileResponseMock;

  beforeEach(() => {
    captureFileResponse = new CaptureFileResponseMock("context", "Hello", 1028, "text/plain");
  });

  it("should exist", () => {
    expect(captureFileResponse).toBeDefined();
  });
});
