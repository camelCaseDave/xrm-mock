import { UiKeyPressableMock } from "../../../src/xrm-mock/page/uikeypressable/uikeypressable.mock";

describe("Xrm.Page.StandardControl Mock", () => {
    beforeEach(() => {
      this.uiKeyPressable = new UiKeyPressableMock();
    });

    it("should exist", () => {
      expect(this.uiKeyPressable).toBeDefined();
    });

    it("should add an onKeyPress handler", () => {
      const handler = jest.fn();
      this.uiKeyPressable.addOnKeyPress(handler);
    });
});
