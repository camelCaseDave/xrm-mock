/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { UiCanGetVisibleElementMock} from '../../../src/page/uicangetvisibleelement/uicangetvisibleelement.mock';

describe('Xrm.Page.UiCanGetVisible Mock', () => {
    beforeEach(() => {
        this.uiCanGetVisibleElement = new UiCanGetVisibleElementMock(true);
    });

    it('should instantiate', () => {
        expect(this.uiCanGetVisibleElement).toBeDefined();
    });
    
    it('should be visible', () => {
        expect(this.uiCanGetVisibleElement.getVisible()).toBe(true);
    });
});