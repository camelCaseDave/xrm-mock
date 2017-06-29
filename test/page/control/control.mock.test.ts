/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

import { ControlMock } from '../../../src/page/control/control.mock';
import { UiLabelElementMock } from '../../../src/page/uilabelelement/uilabelelement.mock';
import { UiCanGetVisibleElementMock } from '../../../src/page/uicangetvisibleelement/uicangetvisibleelement.mock';

describe('Xrm.Page.Control Mock', () => {
    beforeEach(() => {
        this.control = new ControlMock('Subgrid_Main', 'subgrid',
            new UiLabelElementMock('Main Subgrid'),
            new UiCanGetVisibleElementMock(true));
    });

    it('should initialise', () => {
        expect(this.control).toBeDefined();
    });

    it('should be a subgrid', () => {
        expect(this.control.getControlType()).toBe('subgrid');
    });

    it('should be called Subgrid_Main', () => {
        expect(this.control.getName()).toBe('Subgrid_Main');
    });

    it('should have no parent', () => {
        expect(this.control.getParent).toBeDefined();
        expect(this.control.getParent()).toBeUndefined();
    });

    it('should be labelled Main Subgrid', () => {
        expect(this.control.getLabel()).toBe('Main Subgrid');
    });

    it('should be labelled Sub Subgrid', () => {
        expect(this.control.getLabel()).toBe('Main Subgrid');
        this.control.setLabel('Sub Subgrid');
        expect(this.control.getLabel()).toBe('Sub Subgrid');
    });

    it('should be visible', () => {
        expect(this.control.getVisible()).toBe(true);
    });
});
