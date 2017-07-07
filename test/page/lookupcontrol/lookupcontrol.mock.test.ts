import { EventContextMock } from './../../../src/page/eventcontext/eventcontext.mock';
import { UiStandardElementMock } from './../../../src/page/uistandardelement/uistandardelement.mock';
import { UiCanGetVisibleElementMock } from '../../../src/page/uicangetvisibleelement/uicangetvisibleelement.mock';
import { UiFocusableMock } from '../../../src/page/uifocusable/uifocusable.mock';
import { UiLabelElementMock } from '../../../src/page/uilabelelement/uilabelelement.mock';
import { AttributeMock } from './../../../src/page/attribute/attribute.mock';
import { ControlMock } from './../../../src/page/control/control.mock';
import { LookupControlMock } from './../../../src/page/lookupcontrol/lookupcontrol.mock';
import { LookupValueMock } from './../../../src/page/lookupvalue/lookupvalue.mock';
import { StandardControlMock } from './../../../src/page/standardcontrol/standardcontrol.mock';

describe('Xrm.Page.LookupControl Mock', () => {
    beforeEach(() => {
        this.filters = [{
            filter: `<filter type="and">
                        <condition attribute="address1_city" operator="eq" value="Redmond" />
                    </filter>`,
            entityLogicalName: 'account'
        }];
        this.name = 'parentaccountid';
        this.label = new UiLabelElementMock('Parent Account');
        this.visibleElement = new UiCanGetVisibleElementMock(true);

        this.lookupControl = new LookupControlMock(
            new StandardControlMock(
                new ControlMock(this.name, 'lookup',
                    this.label,
                    this.visibleElement),
                new AttributeMock(this.name,
                    new LookupValueMock('5555', 'account', 'Contoso')), false,
                new UiStandardElementMock(this.label, this.visibleElement),
                new UiFocusableMock()),
            this.filters,
            [
                { viewId: '1', entityName: 'account', viewDisplayName: 'Active Accounts', fetchXml: '', layoutXml: '', isDefault: true },
                { viewId: '2', entityName: 'account', viewDisplayName: 'Inactive Accounts', fetchXml: '', layoutXml: '', isDefault: false },
            ]);

    });

    it('should exist', () => {
        expect(this.lookupControl).toBeDefined();
    });

    it('should add a custom filter', () => {
        expect(this.filters.length).toBe(1);
        this.lookupControl.addCustomFilter({
            filter: '', entityLogicalName: 'account'
        });
        expect(this.filters.length).toBe(2);
    });

    it('should add a custom view', () => {
        expect(this.lookupControl.views.length).toBe(2);
        this.lookupControl.addCustomView({
            viewId: '3',
            entityName: 'contact',
            viewDisplayName: 'Sales Contacts',
            fetchXml: '',
            layoutXml: '',
            isDefault: false
        });
        expect(this.lookupControl.views.length).toBe(3);
    });

    it('should return a default view ID of 1', () => {
        expect(this.lookupControl.getDefaultView()).toBe('1');
    });
    
    describe('presearch handler', () => {
        beforeEach(() => {
            
        });
    });

    it('should add a pre search handler', () => {
        expect(this.lookupControl.preSearchHandlers.length).toBe(0);
        this.lookupControl.addPreSearch(new EventContextMock());
        expect(this.lookupControl.preSearchHandlers.length).toBe(1);
    });
});