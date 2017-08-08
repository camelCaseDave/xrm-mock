import { FormItemMock } from '../../../src/page/formitem/formitem.mock';

describe('Xrm.Page.FormItem Mock', () => {
    beforeEach(() => {
        this.formItemMock = new FormItemMock({
            id: "{00000000-0000-0000-0000-000000000000}",
            label: "",
            formType: 1,
            currentItem: true
        });
    });

    it('should exist', () => {
        expect(this.formItemMock).toBeDefined();
    });

    it('should have an id', () => {
        expect(this.formItemMock.getId()).toBe("{00000000-0000-0000-0000-000000000000}");
    });

    it('should be labelled', () => {
        expect(this.formItemMock.getLabel()).toBe("");
    }); 
});

