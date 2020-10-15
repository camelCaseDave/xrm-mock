import { AppMock } from "../../src/xrm-mock";

describe("Web API", () => {
  beforeEach(() => {
    this.app = new AppMock();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should exist", () => {
    expect(this.app).toBeDefined();
  });
});
