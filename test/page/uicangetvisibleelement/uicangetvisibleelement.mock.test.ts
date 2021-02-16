import * as UiVisibleMock from "../../../src/xrm-mock/controls/uicangetvisibleelement/uicangetvisibleelement.mock";

describe("Xrm.Controls.UiCanGetVisible Mock", () => {
    let uiCanGetVisibleElement: UiVisibleMock.UiCanGetVisibleElementMock;

    beforeEach(() => {
        uiCanGetVisibleElement = new UiVisibleMock.UiCanGetVisibleElementMock(true);
    });

    it("should instantiate", () => {
        expect(uiCanGetVisibleElement).toBeDefined();
    });

    it("should be visible", () => {
        expect(uiCanGetVisibleElement.getVisible()).toBe(true);
    });
});
