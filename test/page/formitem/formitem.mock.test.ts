import { FormItemMock } from "../../../src/xrm-mock/controls/formitem/formitem.mock";

describe("Xrm.Controls.FormItem Mock", () => {
    beforeEach(() => {
        this.formItemMock = new FormItemMock({
            currentItem: true,
            formType: 1,
            id: "{00000000-0000-0000-0000-000000000000}",
            label: "",
        });
    });

    it("should exist", () => {
        expect(this.formItemMock).toBeDefined();
    });

    it("should have an id", () => {
        expect(this.formItemMock.getId()).toBe("{00000000-0000-0000-0000-000000000000}");
    });

    it("should be labelled", () => {
        expect(this.formItemMock.getLabel()).toBe("");
    });
});
