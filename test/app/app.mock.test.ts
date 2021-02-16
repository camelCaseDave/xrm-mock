import { AppMock } from "../../src/xrm-mock";

describe("Web API", () => {
  let app: AppMock;

  beforeEach(() => {
    app = new AppMock();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should exist", () => {
    expect(app).toBeDefined();
  });
});
