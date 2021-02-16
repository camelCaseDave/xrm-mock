import { SectionMock } from "../../../src/xrm-mock/controls/section/section.mock";
import * as Visible from "../../../src/xrm-mock/controls/uicangetvisibleelement/uicangetvisibleelement.mock";
import * as Label from "../../../src/xrm-mock/controls/uilabelelement/uilabelelement.mock";
import * as Standard from "../../../src/xrm-mock/controls/uistandardelement/uistandardelement.mock";

describe("Xrm.ProcessFlow.Section Mock", () => {
    let section: SectionMock;

    beforeEach(() => {
        section = new SectionMock("Section_Main", null,
            new Standard.UiStandardElementMock(
                new Label.UiLabelElementMock("Main Section"),
                new Visible.UiCanGetVisibleElementMock(true)));
    });

    it("should instantiate", () => {
        expect(section).toBeDefined();
    });

    it("should be called Section_Main", () => {
        expect(section.getName()).toBe("Section_Main");
    });

    it("should be visible", () => {
        expect(section.getVisible()).toBe(true);
    });

    it("should be labelled Main Section", () => {
        expect(section.getLabel()).toBe("Main Section");
    });

    it("should return a null parent", () => {
        expect(section.getParent()).toBe(null);
    });

    it("should toggle to not visible", () => {
        expect(section.getVisible()).toBe(true);
        section.setVisible(false);
        expect(section.getVisible()).toBe(false);
    })

    it("should change its label to Not Main Section", () => {
        expect(section.getLabel()).toBe("Main Section");
        section.setLabel("Not Main Section");
        expect(section.getLabel()).toBe("Not Main Section");
    });
});
