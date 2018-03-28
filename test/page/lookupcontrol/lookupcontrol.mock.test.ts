import * as Visible from "../../../src/xrm-mock/page/uicangetvisibleelement/uicangetvisibleelement.mock";
import { UiFocusableMock } from "../../../src/xrm-mock/page/uifocusable/uifocusable.mock";
import { UiLabelElementMock } from "../../../src/xrm-mock/page/uilabelelement/uilabelelement.mock";
import { AttributeMock, IAttributeComponents } from "./../../../src/xrm-mock/page/attribute/attribute.mock";
import { ControlMock, IControlComponents } from "./../../../src/xrm-mock/page/control/control.mock";
import { EventContextMock } from "./../../../src/xrm-mock/page/eventcontext/eventcontext.mock";
import { LookupControlMock } from "./../../../src/xrm-mock/page/lookupcontrol/lookupcontrol.mock";
import { LookupValueMock } from "./../../../src/xrm-mock/page/lookupvalue/lookupvalue.mock";
import { StandardControlMock } from "./../../../src/xrm-mock/page/standardcontrol/standardcontrol.mock";
import { UiStandardElementMock } from "./../../../src/xrm-mock/page/uistandardelement/uistandardelement.mock";

describe("Xrm.Page.LookupControl Mock", () => {
    beforeEach(() => {
        this.filters = [{
            entityLogicalName: "account",
            filter: `<filter type="and">
                        <condition attribute="address1_city" operator="eq" value="Redmond" />
                    </filter>`,
        }];
        this.views = [
            {
                entityName: "account",
                fetchXml: "",
                isDefault: true,
                layoutXml: "",
                viewDisplayName: "Active Accounts",
                viewId: "1",
            },
            {
                entityName: "account",
                fetchXml: "",
                isDefault: false,
                layoutXml: "",
                viewDisplayName: "Inactive Accounts",
                viewId: "2",
            },
        ];
        this.name = "parentaccountid";
        this.label = new UiLabelElementMock("Parent Account");
        this.visibleElement = new Visible.UiCanGetVisibleElementMock(true);
        const standardcontrol = new StandardControlMock({
            attribute: new AttributeMock({
                name: this.name,
                value: new LookupValueMock("5555", "account", "Contoso"),
            }),
            control: new ControlMock({
                controlType: "lookup",
                name: this.name,
            }),
        });
        this.lookupControl = new LookupControlMock(standardcontrol, this.filters, this.views);

    });

    it("should exist", () => {
        expect(this.lookupControl).toBeDefined();
    });

    it("should add a custom filter", () => {
        expect(this.filters.length).toBe(1);
        this.lookupControl.addCustomFilter({
            entityLogicalName: "account",
            filter: "",
        });
        expect(this.filters.length).toBe(2);
    });

    it("should add a custom view", () => {
        expect(this.lookupControl.views.length).toBe(2);
        this.lookupControl.addCustomView({
            entityName: "contact",
            fetchXml: "",
            isDefault: false,
            layoutXml: "",
            viewDisplayName: "Sales Contacts",
            viewId: "3",
        });
        expect(this.lookupControl.views.length).toBe(3);
    });

    it("should return a default view ID of 1", () => {
        expect(this.lookupControl.getDefaultView()).toBe("1");
    });

    describe("presearch handler", () => {
        it("should add a pre search handler", () => {
            expect(this.lookupControl.preSearchHandlers.length).toBe(0);
            this.lookupControl.addPreSearch(new EventContextMock());
            expect(this.lookupControl.preSearchHandlers.length).toBe(1);
        });
    });
});
