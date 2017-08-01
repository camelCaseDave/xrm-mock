import { FormSelectorMock } from '../../src/page/formselector/formselector.mock';
import { FormItemMock } from '../../src/page/formitem/formitem.mock';
import { ItemCollectionMock } from '../../src/collection/itemcollection/itemcollection.mock';
import { UiMock } from '../../src/ui/ui.mock';

describe('Xrm.Ui Mock', function () {
    beforeEach(() => {
        this.xrmUiMock = new UiMock({
            formSelector: new FormSelectorMock(new ItemCollectionMock<FormItemMock>([
                new FormItemMock({
                    id: "5",
                    label: "Main",
                    formType: 2,
                    currentItem: true
                })
            ]))
        });
    });
    it('should exist', () => {
        expect(this.xrmUiMock).toBeDefined();
    });
    it('should set a form notification', () => {
        expect(this.xrmUiMock.setFormNotification('You have been notified', 'INFO', 'id1')).toBe(true);
    });
    it('should not set a form notification if the id already exists', () => {
        expect(this.xrmUiMock.setFormNotification('You have been notified', 'INFO', 'id1')).toBe(true);
        expect(this.xrmUiMock.setFormNotification('You have been notified again', 'INFO', 'id1')).toBe(false);
    });
    it('should not to remove a form notification if it wasnt found', () => {
        expect(this.xrmUiMock.clearFormNotification('id1')).toBe(false);
    });
    it('should clear form notification if matched by id', () => {
        expect(this.xrmUiMock.setFormNotification('You have been notified', 'INFO', 'id1')).toBe(true);
        expect(this.xrmUiMock.clearFormNotification('id1')).toBe(true);
    });
    it('should have a form type of update', () => {
        expect(this.xrmUiMock.getFormType()).toBe(2);
    })
})
