import { UiKeyPressableMock } from "../../../src/xrm-mock/controls/uikeypressable/uikeypressable.mock";

describe("Xrm.Page.StandardControl Mock", () => {
  beforeEach(() => {
    this.handler1 = jest.fn();
    this.handler2 = jest.fn();
    this.uiKeyPressable = new UiKeyPressableMock([this.handler1, this.handler2]);
  });

  it("should exist", () => {
    expect(this.uiKeyPressable).toBeDefined();
  });

  it("should add an onKeyPress handler", () => {
    const handler3 = jest.fn();
    this.uiKeyPressable.addOnKeyPress(handler3);
    expect(this.uiKeyPressable.keyPressHandlers.length).toBe(3);
  });

  it("should fire all handlers on key press", () => {
    this.uiKeyPressable.fireOnKeyPress();
    expect(this.handler1).toHaveBeenCalled();
    expect(this.handler2).toHaveBeenCalled();
  });

  it("should remove a specific handler", () => {
    this.uiKeyPressable.removeOnKeyPress(this.handler2);
    expect(this.uiKeyPressable.keyPressHandlers.length).toBe(1);
  });
});
