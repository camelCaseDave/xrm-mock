import { LookupAttributeMock } from "../../../src/xrm-mock";
import { ILookupView, LookupControlMock } from "../../../src/xrm-mock/controls/lookupcontrol/lookupcontrol.mock";

describe("Xrm.Controls.LookupControl Mock", () => {
    let name: string;
    let lookupControl: LookupControlMock;

    beforeEach(() => {
        const filters = [{
            entityLogicalName: "account",
            filter: `<filter type="and">
                        <condition attribute="address1_city" operator="eq" value="Redmond" />
                    </filter>`,
        }];
        const views = [createView("1"), createView("2", false)];
        name = "parentaccountid";
        lookupControl = new LookupControlMock({
            attribute: new LookupAttributeMock({
                name,
                value: [{
                    entityType: "test",
                    id: "0",
                }],
            }),
            entityTypes: ["account"],
            filters,
            label: "Parent Account",
            name,
            views,
            visible: true,
        });

    });

    it("should exist", () => {
        expect(lookupControl).toBeDefined();
    });

    it("should add a custom filter", () => {
        expect(lookupControl.filters.length).toBe(1);
        lookupControl.addCustomFilter("", "account");
        expect(lookupControl.filters.length).toBe(2);
    });

    it("should add a custom view", () => {
        expect(lookupControl.views.length).toBe(2);
        lookupControl.addCustomView("3", "contact",  "Sales Contacts", "", "", false);
        expect(lookupControl.views.length).toBe(3);
    });

    it("should assert a default view exists when requested", () => {
        const lookup = new LookupControlMock({
            attribute: lookupControl.attribute,
            name,
        });

        lookup.views.push(createView("1", false));

        expect(() => { lookup.getDefaultView(); }).toThrowError("No default view was found!");
    });

    it("should default a custom view on create", () => {
        const lookup = new LookupControlMock({
            attribute: lookupControl.attribute,
            name,
            views: [createView("1", false), createView("2", false)],
        });

        expect(lookupControl.getDefaultView()).toBeDefined();
    });

    it("should not add more than 1 default view", () => {
        expect(() => { lookupControl.addCustomView("3", "contact",  "Sales Contacts", "", "", true); })
            .toThrowError("Lookup Control cannot have more than one default view.");

        expect(() => { const lookup = new LookupControlMock({
            attribute: lookupControl.attribute,
            name,
            views: [createView("1"), createView("2")],
        }); }).toThrowError("Lookup Control cannot have more than one default view.");
    });

    it("should return a default view Id of 1", () => {
        expect(lookupControl.getDefaultView()).toBe("1");
    });

    it("should set a default view", () => {
        expect(lookupControl.getDefaultView()).toBe("1");
        lookupControl.setDefaultView("2");
        expect(lookupControl.getDefaultView()).toBe("2");
    });

    describe("onLookupTagClick handler", () => {
        it("should add a onLookupTagClick handler", () => {
            expect(lookupControl.onLookupTagHandlers.length).toBe(0);
            lookupControl.addOnLookupTagClick(() => { /**/ });
            expect(lookupControl.onLookupTagHandlers.length).toBe(1);
        });

        it("should remove a onLookupTagClick handler", () => {
            const localFunc = () => { /**/ }
            expect(lookupControl.onLookupTagHandlers.length).toBe(0);
            lookupControl.addOnLookupTagClick(localFunc);
            lookupControl.addOnLookupTagClick(() => { /**/ });
            expect(lookupControl.onLookupTagHandlers.length).toBe(2);
            lookupControl.removeOnLookupTagClick(localFunc);
            expect(lookupControl.onLookupTagHandlers.length).toBe(1);
        });

        it("should fire onLookupTagClick handlers", () => {
            let fired = false;
            lookupControl.addOnLookupTagClick(() => { fired = true});
            lookupControl.fireOnLookupTagClick({} as unknown as Xrm.Events.EventContext);
            expect(fired).toBe(true);
        });
    });

    describe("preSearch handler", () => {
        it("should add a preSearch handler", () => {
            expect(lookupControl.preSearchHandlers.length).toBe(0);
            lookupControl.addPreSearch(() => { /**/ });
            expect(lookupControl.preSearchHandlers.length).toBe(1);
        });

        it("should remove a preSearch handler", () => {
            const localFunc = () => { /**/ }
            expect(lookupControl.preSearchHandlers.length).toBe(0);
            lookupControl.addPreSearch(localFunc);
            lookupControl.addPreSearch(() => { /**/ });
            expect(lookupControl.preSearchHandlers.length).toBe(2);
            lookupControl.removePreSearch(localFunc);
            expect(lookupControl.preSearchHandlers.length).toBe(1);
        });

        it("should fire preSearch handlers", () => {
            let fired = false;
            lookupControl.addPreSearch(() => { fired = true});
            lookupControl.firePreSearch({} as unknown as Xrm.Events.EventContext);
            expect(fired).toBe(true);
        });
    });

    describe("entity types", () => {
        it("should update read types from components", () => {
            const types = lookupControl.getEntityTypes();
            expect(types.length).toBe(1);
            expect(types[0]).toBe("account");
        });

        it("should allow for updates", () => {
            lookupControl.setEntityTypes(["contact", "lead"])
            const types = lookupControl.getEntityTypes();
            expect(types.length).toBe(2);
            expect(types[0]).toBe("contact");
            expect(types[1]).toBe("lead");
        });
    });
});

function createView(id: string, isDefault: boolean = true): ILookupView {
    return {
        entityName: "account",
        fetchXml: "",
        isDefault,
        layoutXml: "",
        viewDisplayName: "Inactive Accounts",
        viewId: id,
    };
}
