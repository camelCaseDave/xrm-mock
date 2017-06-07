/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

/// <reference path="../../../src/page/uicangetvisibleelement/uicangetvisibleelement.mock.ts" />

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