import { XrmMockGenerator } from "../../src/xrm-mock-generator/index";
import { FormItemMock, FormSelectorMock, ItemCollectionMock, UiMock } from "../../src/xrm-mock/index";
import { PageMock } from "../../src/xrm-mock/page/page.mock";

describe("XrmMockGenerator.Section", () => {
    let page: PageMock;
    let tab: Xrm.Controls.Tab;
    let section: Xrm.Controls.Section;
    let xrmUiMock: UiMock;

    beforeEach(() => {
        page = XrmMockGenerator.initialise().Page;
        xrmUiMock = new UiMock({
            formSelector: new FormSelectorMock(new ItemCollectionMock<FormItemMock>([
                new FormItemMock({
                    currentItem: true,
                    formType: 2,
                    id: "5",
                    label: "Main",
                }),
            ])),
        });
    });

    it("should create a tab", () => {
        tab = XrmMockGenerator.Tab.createTab("testTab", "Test", false, "collapsed", xrmUiMock, null);
        XrmMockGenerator.Section.createSection("testSection", "TestSection", false, tab, null);

        const sections = Xrm.Page.ui.tabs.get("testTab").sections;
        expect(sections).toBeDefined();
        expect(sections).not.toBeNull();

        section = sections.get("testSection");
        expect(section).toBeDefined();
        expect(section).not.toBeNull();
    });

    it("should have a name", () => {
        expect(section.getName()).toBe("testSection");
    });

    it("should have a label", () => {
        expect(section.getLabel()).toBe("TestSection");
    });

    it("should have a parent", () => {
        expect(section.getParent()).toEqual(tab);
    });

    it("should be invisible", () => {
        expect(section.getVisible()).toBeFalsy();
    });
});
