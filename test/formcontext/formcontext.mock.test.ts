import { AttributeMock } from "../../src/xrm-mock/attributes/attribute/attribute.mock";
import { StringAttributeMock } from "../../src/xrm-mock/attributes/stringattribute/stringattribute.mock";
import { ItemCollectionMock } from "../../src/xrm-mock/collection/itemcollection/itemcollection.mock";
import { AutoLookupControlMock } from "../../src/xrm-mock/controls/autolookupcontrol/autolookupcontrol.mock";
import { ControlMock } from "../../src/xrm-mock/controls/control/control.mock";
import { StandardControlMock } from "../../src/xrm-mock/controls/standardcontrol/standardcontrol.mock";
import { StringControlMock } from "../../src/xrm-mock/controls/stringcontrol/stringcontrol.mock";
import { UiKeyPressableMock } from "../../src/xrm-mock/controls/uikeypressable/uikeypressable.mock";
import { DataMock } from "../../src/xrm-mock/data/data.mock";
import { EntityMock } from "../../src/xrm-mock/entity/entity.mock";
import { FormContextMock } from "../../src/xrm-mock/formcontext/formcontext.mock";
import { PageMock } from "../../src/xrm-mock/page/page.mock";
import { UiMock } from "../../src/xrm-mock/ui/ui.mock";
import { XrmStaticMock } from "../../src/xrm-mock/xrmstatic.mock";

describe("FormContext Mock", () => {
    let lastName: StringAttributeMock;
    let formContext: FormContextMock;

    beforeEach(() => {
        const attributes: Array<AttributeMock<StringControlMock, string>> = [];
        attributes.push(new AttributeMock<StringControlMock, string>({ name: "firstname", value: "Joe" }));
        attributes.push(new AttributeMock<StringControlMock, string>({ name: "description" }));
        lastName = new StringAttributeMock({
            isDirty: true,
            name: "lastname",
            requiredLevel: "recommended",
            submitMode: "always",
            value: "Bloggs",
        });
        attributes.push(lastName);
        const controls = [];
        controls.push(new StringControlMock({
            attribute: lastName,
            controlType: "standard",
            name: "lastname",
            uncommittedText: "Bloggs",
        }));
        controls.push(new StringControlMock({
            attribute: attributes[0] as any,
            controlType: "standard",
            name: "firstname",
            uncommittedText: "Bloggs",
        }));

        formContext = new FormContextMock(
            new DataMock(
                new EntityMock("{0}", new ItemCollectionMock<AttributeMock<StringControlMock, string>>(attributes))),
                new UiMock({
                    controls: new ItemCollectionMock<StringControlMock>(controls),
                },
        ));
    });

    it("should exist", () => {
        expect(formContext).toBeDefined();
    });

    describe("getAttribute", () => {
        it("should exist", () => {
            expect(formContext.getAttribute).toBeDefined();
        });

        it("should get all", () => {
            expect(formContext.getAttribute().length).toBe(3);
        });

        it("by string should return Bloggs for lastname", () => {
            expect(formContext.getAttribute("lastname")).toBe(lastName);
        });

        it("by index should return Bloggs for 2", () => {
            expect(formContext.getAttribute(2)).toBe(lastName);
        });

        it("should get attribute and value in one line", () => {
            expect(formContext.getAttribute("firstname").getValue()).toBe("Joe");
        });

        it("should return null if the attribute doesn't exist", () => {
            expect(formContext.getAttribute("doesntexist")).toBeNull();
        });

        it("by delegate", () => {
            expect(formContext.getAttribute((a) => a.getAttributeType() === "string").length).toBe(3);
            expect(formContext.getAttribute((a) => a.getName() === "firstname").length).toBe(1);
            expect(formContext.getAttribute((a) => a.getName() === "notExist").length).toBe(0);
        });

        it("should throw error", () => {
            expect(() => { formContext.getAttribute([] as any); }).toThrowError();
        });
    });

    describe("getControl", () => {
        it("should exist", () => {
            expect(formContext.getControl).toBeDefined();
        });

        it("should get all", () => {
            expect(formContext.getControl().length).toBe(2);
            expect(formContext.getControl().length).toBe(2);
        });

        it("should get by index", () => {
            expect(formContext.getControl(0)).toBeDefined();
        });

        it("should return Bloggs for the control's bound attribute value", () => {
            expect(formContext.getControl<StringControlMock>("lastname").getAttribute().getValue()).toBe("Bloggs");
        });

        it("by delegate", () => {
            expect(formContext.getControl((c) => c.getControlType() === "standard").length).toBe(2);
            expect(formContext.getControl((c) => c.getControlType() === "standard").length).toBe(2);
            expect(formContext.getControl((c) => c.getName() === "firstname").length).toBe(1);
            expect(formContext.getControl((c) => c.getName() === "notExist").length).toBe(0);
        });

        it("should throw error", () => {
            expect(() => { formContext.getControl([] as any); }).toThrowError();
        });
    });
});
