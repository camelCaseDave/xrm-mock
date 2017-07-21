import { UiMock } from '../../src/ui/ui.mock';

describe('Xrm.Ui Mock', function () {
    beforeEach(() => {
        this.xrmUiMock = new UiMock();
    });
    it('should exist', () => {  
        expect(this.xrmUiMock).toBeDefined();
    });
    it('should set a form notification', () => {
        expect(this.xrmUiMock.setFormNotification('You have been notified', 'INFO', 'id1')).toBe(true);
    });
    it('should not to remove a form notification if it wasnt found', () => {
        expect(this.xrmUiMock.clearFormNotification('id1')).toBe(false);
    });
    it('should clear form notification if matched by id', () => {
        expect(this.xrmUiMock.setFormNotification('You have been notified', 'INFO', 'id1')).toBe(true);
        expect(this.xrmUiMock.clearFormNotification('id1')).toBe(true);
    })
})
