import { AppPropertiesMock, IAppPropertiesComponents } from "../../src/xrm-mock";

describe("Xrm.AppProperties", () => {
  beforeEach(() => {
    this.appProperties = new AppPropertiesMock({
      appId: "a",
      displayName: "b",
      uniqueName: "c",
      url: "d",
      webResourceId: "e",
      webResourceName: "f",
      welcomePageId: "g",
      welcomePageName: "h",
    });
  });

  it("should exist", () => {
    expect(this.appProperties).toBeDefined();
  });
});
