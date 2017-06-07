/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

/// <reference path="../../../src/page/uicangetvisibleelement/uicangetvisibleelement.mock.ts" />
/// <reference path="../../../src/page/uilabelelement/uilabelelement.mock.ts" />
/// <reference path="../../../src/page/uistandardelement/uistandardelement.mock.ts" />
/// <reference path="../../../src/page/section/section.mock.ts" />

describe('Xrm.Page.Section Mock', () => {
    beforeEach(() => {
        this.section = new SectionMock('Section_Main', null,
            new UiStandardElementMock(
                new UiLabelElementMock('Main Section'),
                new UiCanGetVisibleElementMock(true)));
    });

    it('should instantiate', () => {
        expect(this.section).toBeDefined();
    });

    it('should be called Section_Main', () => {
        expect(this.section.getName()).toBe('Section_Main');
    });

    it('should be visible', () => {
        expect(this.section.getVisible()).toBe(true);
    });

    it('should be labelled Main Section', () => {
        expect(this.section.getLabel()).toBe('Main Section');
    });

    it('should return a null parent', () => {
        expect(this.section.getParent()).toBe(null);
    });

    it('should toggle to not visible', () => {
        expect(this.section.getVisible()).toBe(true);
        this.section.setVisible(false);
        expect(this.section.getVisible()).toBe(false);
    });

    it('should change its label to Not Main Section', () => {
        expect(this.section.getLabel()).toBe('Main Section');
        this.section.setLabel('Not Main Section');
        expect(this.section.getLabel()).toBe('Not Main Section');
    });    
});