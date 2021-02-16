import { CaptureImageOptionsMock } from "../../../src/xrm-mock";

describe("Xrm.Device.CaptureImageOptions Mock", () => {
  let captureImageOptions: CaptureImageOptionsMock;

  beforeEach(() => {
    captureImageOptions = new CaptureImageOptionsMock({
      allowEdit: true,
      height: 60,
      preferFrontCamera: true,
      quality: 10,
      width: 60,
    });
  });

  it("should exist", () => {
    expect(captureImageOptions).toBeDefined();
  });
});
