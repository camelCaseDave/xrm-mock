import { UiCanGetVisibleElementMock } from '../../../src/page/uicangetvisibleelement/uicangetvisibleelement.mock';
import { UiLabelElementMock } from '../../../src/page/uilabelelement/uilabelelement.mock';
import { UiStandardElementMock } from '../../../src/page/uistandardelement/uistandardelement.mock';
import { SectionMock } from '../../../src/page/section/section.mock';

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