import * as UiVisibleMock from "../../../src/xrm-mock/page/uicangetvisibleelement/uicangetvisibleelement.mock";

describe("Xrm.Page.UiCanGetVisible Mock", () => {
    beforeEach(() => {
        this.uiCanGetVisibleElement = new UiVisibleMock.UiCanGetVisibleElementMock(true);
    });

    it("should instantiate", () => {
        expect(this.uiCanGetVisibleElement).toBeDefined();
    });

    it("should be visible", () => {
        expect(this.uiCanGetVisibleElement.getVisible()).toBe(true);
    });
});
