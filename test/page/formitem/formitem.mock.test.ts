import { FormItemMock } from "../../../src/xrm-mock/controls/formitem/formitem.mock";

describe("Xrm.Controls.FormItem Mock", () => {
    let formItemMock: FormItemMock;

    beforeEach(() => {
        formItemMock = new FormItemMock({
            currentItem: true,
            formType: 1,
            id: "{00000000-0000-0000-0000-000000000000}",
            label: "",
        });
    });

    it("should exist", () => {
        expect(formItemMock).toBeDefined();
    });

    it("should have an id", () => {
        expect(formItemMock.getId()).toBe("{00000000-0000-0000-0000-000000000000}");
    });

    it("should be labelled", () => {
        expect(formItemMock.getLabel()).toBe("");
    });
});
