import { UiKeyPressableMock } from "../../../src/xrm-mock/controls/uikeypressable/uikeypressable.mock";

describe("Xrm.Controls.StandardControl Mock", () => {
  let handler1: jest.Mock<any>;
  let handler2: jest.Mock<any>;
  let uiKeyPressable: UiKeyPressableMock;

  beforeEach(() => {
    handler1 = jest.fn();
    handler2 = jest.fn();
    uiKeyPressable = new UiKeyPressableMock([handler1, handler2]);
  });

  it("should exist", () => {
    expect(uiKeyPressable).toBeDefined();
  });

  it("should add an onKeyPress handler", () => {
    const handler3 = jest.fn();
    uiKeyPressable.addOnKeyPress(handler3);
    expect(uiKeyPressable.keyPressHandlers.length).toBe(3);
  });

  it("should fire all handlers on key press", () => {
    uiKeyPressable.fireOnKeyPress();
    expect(handler1).toHaveBeenCalled();
    expect(handler2).toHaveBeenCalled();
  });

  it("should remove a specific handler", () => {
    uiKeyPressable.removeOnKeyPress(handler2);
    expect(uiKeyPressable.keyPressHandlers.length).toBe(1);
  });
});
