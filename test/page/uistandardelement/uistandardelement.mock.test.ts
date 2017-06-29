/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { UiStandardElementMock } from '../../../src/page/uistandardelement/uistandardelement.mock';
import { UiLabelElementMock } from '../../../src/page/uilabelelement/uilabelelement.mock';
import { UiCanGetVisibleElementMock } from '../../../src/page/uicangetvisibleelement/uicangetvisibleelement.mock';

describe('Xrm.Ui Mock', () => {
    beforeEach(() => {
        this.uiStandardElement = new UiStandardElementMock(
            new UiLabelElementMock('Section_1'),
            new UiCanGetVisibleElementMock(true));
    });

    it('should instantiate', () => {
        expect(this.uiStandardElement).toBeDefined();
    });

    it('should be visible', () => {
        expect(this.uiStandardElement.getVisible()).toBe(true);
    });

    it('should toggle not visible', () => {
        expect(this.uiStandardElement.getVisible()).toBe(true);
        this.uiStandardElement.setVisible(false);
        expect(this.uiStandardElement.getVisible()).toBe(false);
    });

    it('should be labelled Section_1', () => {
        expect(this.uiStandardElement.getLabel()).toBe('Section_1');
    });

    it('should set its label to Section_2', () => {
        expect(this.uiStandardElement.getLabel()).toBe('Section_1');
        this.uiStandardElement.setLabel('Section_2');
        expect(this.uiStandardElement.getLabel()).toBe('Section_2');
    });
})
