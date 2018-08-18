import { XrmMockGenerator } from "../../src/xrm-mock-generator/index";
import { UiMock, FormSelectorMock, ItemCollectionMock, FormItemMock } from "../../src/xrm-mock/index";
import { PageMock } from "../../src/xrm-mock/page/page.mock";

describe("XrmMockGenerator.Tab", () => {
    let page: PageMock;
    let tab: Xrm.Controls.Tab;
    beforeEach(() => {
        page = XrmMockGenerator.initialise().Page;
        this.xrmUiMock = new UiMock({
            formSelector: new FormSelectorMock(new ItemCollectionMock<FormItemMock>([
                new FormItemMock({
                    currentItem: true,
                    formType: 2,
                    id: "5",
                    label: "Main",
                })
            ])),
        });
    });

    it("should create a tab", () => {
        XrmMockGenerator.Tab.createTab("testTab", "Test", false, "collapsed", this.xrmUiMock, null);
        tab = Xrm.Page.ui.tabs.get("testTab");
        expect(tab).toBeDefined();
        expect(tab).not.toBeNull();
    });

    it("should have a name", () => {
        expect(tab.getName()).toBe("testTab");
    });

    it("should have a label", () => {
        expect(tab.getLabel()).toBe("Test");
    });

    it("should have a parent", () => {
        expect(tab.getParent()).toEqual(this.xrmUiMock);
    });

    it("should be invisible", () => {
        expect(tab.getVisible()).toBeFalsy();
    });

    it("should be collapsed", () => {
        expect(tab.getDisplayState()).toBe("collapsed");
    });
});
