import { UiMock } from '../../src/ui/ui.mock';

describe('Xrm.Ui Mock', function () {
    beforeEach(() => {
        this.xrmUiMock = new UiMock();
    });
    it('should initialise', () => {  
        expect(this.xrmUiMock).toBeDefined();
    });
})
