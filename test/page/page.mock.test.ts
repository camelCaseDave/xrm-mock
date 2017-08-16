import { UiKeyPressableMock } from '../../src/page/uikeypressable/uikeypressable.mock';
import { StandardControlMock } from './../../src/page/standardcontrol/standardcontrol.mock';
import { AutoLookupControlMock } from './../../src/page/autolookupcontrol/autolookupcontrol.mock';
import { StringControlMock } from '../../src/page/stringcontrol/stringcontrol.mock';
import { ControlMock } from './../../src/page/control/control.mock';
import { UiMock } from '../../src/ui/ui.mock';
/// <reference path="../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { XrmStaticMock } from '../../src/xrmstatic.mock';
import { EntityMock } from '../../src/page/entity/entity.mock';
import { DataMock } from '../../src/data/data.mock';
import { AttributeMock } from '../../src/page/attribute/attribute.mock';
import { ItemCollectionMock } from '../../src/collection/itemcollection/itemcollection.mock';
import { PageMock } from '../../src/page/page.mock';

describe('Xrm.Page Mock', () => {
    beforeEach(() => {
        let attributes: AttributeMock[] = [];
        attributes.push(new AttributeMock({ name: 'firstname', value: 'Joe', isDirty: false, requiredLevel: 'none' }));
        attributes.push(new AttributeMock({ name: 'description', value: '' }));
        this.lastName = new AttributeMock({ name: 'lastname', value: 'Bloggs', isDirty: true, requiredLevel: 'recommended', submitMode: 'always' });
        attributes.push(this.lastName);

        this.xrmPageMock = new PageMock({
            data: new DataMock(
                new EntityMock(
                    new ItemCollectionMock<AttributeMock>(attributes))),
                    ui: new UiMock({
                        controls: new ItemCollectionMock([
                            new StringControlMock(new AutoLookupControlMock(new StandardControlMock({
                                attribute: this.lastname,
                                control: new ControlMock({
                                    name: 'lastname',
                                    controlType: 'standard'
                                })
                            }), new UiKeyPressableMock))
                        ])   
                    })
        });
    });

    it('should exist', () => {
        expect(this.xrmPageMock).toBeDefined();
    });

    describe('getAttribute', () => {
        it('should exist', () => {
            expect(this.xrmPageMock.getAttribute).toBeDefined();
        });

        it('by string should return Bloggs for lastname', () => {
            expect(this.xrmPageMock.getAttribute('lastname')).toBe(this.lastName);
        });

        it('by index should return Bloggs for 2', () => {
            expect(this.xrmPageMock.getAttribute(2)).toBe(this.lastName);
        });

        it('should get attribute and value in one line', () => {
            expect(this.xrmPageMock.getAttribute('firstname').getValue()).toBe('Joe');
        });
    });

    describe('getControl', () => {
        it('should exist', () => {
            expect(this.xrmPageMock.getControl).toBeDefined();
        });

        it('should return Bloggs for the control\'s bound attribute value', () => {
            expect(this.xrmPageMock.getControl('lastname').getValue()).toBe('Bloggs');
        });
    });
})
