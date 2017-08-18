import { AttributeMock } from './../../../src/page/attribute/attribute.mock';
import { UiKeyPressableMock } from '../../../src/page/uikeypressable/uikeypressable.mock';
import { StandardControlMock } from './../../../src/page/standardcontrol/standardcontrol.mock';
import { AutoLookupControlMock } from '../../../src/page/autolookupcontrol/autolookupcontrol.mock';
import { StringControlMock } from './../../../src/page/stringcontrol/stringcontrol.mock';
import { ControlMock } from '../../../src/page/control/control.mock';
import { UiLabelElementMock } from '../../../src/page/uilabelelement/uilabelelement.mock';
import { UiCanGetVisibleElementMock } from '../../../src/page/uicangetvisibleelement/uicangetvisibleelement.mock';

describe('Xrm.Page.Control Mock', () => {
    beforeEach(() => {
        this.control = new ControlMock({
            name: 'Subgrid_Main',
            controlType: 'subgrid',
            uiLabelElement: new UiLabelElementMock('Main Subgrid'),
            uiCanGetVisibleElement: new UiCanGetVisibleElementMock(true)
        });
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

    it('should get a value if it has an attribute', () => {
        let stringControl = new StringControlMock(
            new AutoLookupControlMock(
                new StandardControlMock({
                    attribute: new AttributeMock({ name: 'lastname', value: 'Bloggs' }),
                    control: new ControlMock({
                        name: 'lastname',
                        controlType: 'standard'
                    })
                }),
                new UiKeyPressableMock));

        expect(stringControl.getValue()).toBe('Bloggs');
    })
});
