import * as Visible from "../../../src/xrm-mock/controls/uicangetvisibleelement/uicangetvisibleelement.mock";
import * as Label from "../../../src/xrm-mock/controls/uilabelelement/uilabelelement.mock";
import * as Ui from "../../../src/xrm-mock/controls/uistandardelement/uistandardelement.mock";

describe("Xrm.Ui Mock", () => {
    let uiStandardElement: Ui.UiStandardElementMock;

    beforeEach(() => {
        uiStandardElement = new Ui.UiStandardElementMock(
            new Label.UiLabelElementMock("Section_1"),
            new Visible.UiCanGetVisibleElementMock(true));
    });

    it("should instantiate", () => {
        expect(uiStandardElement).toBeDefined();
    });

    it("should be visible", () => {
        expect(uiStandardElement.getVisible()).toBe(true);
    });

    it("should toggle not visible", () => {
        expect(uiStandardElement.getVisible()).toBe(true);
        uiStandardElement.setVisible(false);
        expect(uiStandardElement.getVisible()).toBe(false);
    });

    it("should be labelled Section_1", () => {
        expect(uiStandardElement.getLabel()).toBe("Section_1");
    });

    it("should set its label to Section_2", () => {
        expect(uiStandardElement.getLabel()).toBe("Section_1");
        uiStandardElement.setLabel("Section_2");
        expect(uiStandardElement.getLabel()).toBe("Section_2");
    });
});
