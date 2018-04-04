import { AutoLookupControlMock } from "../../../src/xrm-mock/page/autolookupcontrol/autolookupcontrol.mock";
import { ControlMock } from "../../../src/xrm-mock/page/control/control.mock";
import * as Visible from "../../../src/xrm-mock/page/uicangetvisibleelement/uicangetvisibleelement.mock";
import { UiKeyPressableMock } from "../../../src/xrm-mock/page/uikeypressable/uikeypressable.mock";
import { UiLabelElementMock } from "../../../src/xrm-mock/page/uilabelelement/uilabelelement.mock";
import { AttributeMock } from "./../../../src/xrm-mock/page/attribute/attribute.mock";
import { StandardControlMock } from "./../../../src/xrm-mock/page/standardcontrol/standardcontrol.mock";
import { StringAttributeMock } from "./../../../src/xrm-mock/page/stringattribute/stringattribute.mock";
import { StringControlMock } from "./../../../src/xrm-mock/page/stringcontrol/stringcontrol.mock";

describe("Xrm.Page.Control Mock", () => {
    beforeEach(() => {
        this.control = new ControlMock({
            controlType: "subgrid",
            name: "Subgrid_Main",
            uiCanGetVisibleElement: new Visible.UiCanGetVisibleElementMock(true),
            uiLabelElement: new UiLabelElementMock("Main Subgrid"),
        });
    });

    it("should initialise", () => {
        expect(this.control).toBeDefined();
    });

    it("should be a subgrid", () => {
        expect(this.control.getControlType()).toBe("subgrid");
    });

    it("should be called Subgrid_Main", () => {
        expect(this.control.getName()).toBe("Subgrid_Main");
    });

    it("should have no parent", () => {
        expect(this.control.getParent).toBeDefined();
        expect(this.control.getParent()).toBeUndefined();
    });

    it("should be labelled Main Subgrid", () => {
        expect(this.control.getLabel()).toBe("Main Subgrid");
    });

    it("should be labelled Sub Subgrid", () => {
        expect(this.control.getLabel()).toBe("Main Subgrid");
        this.control.setLabel("Sub Subgrid");
        expect(this.control.getLabel()).toBe("Sub Subgrid");
    });

    it("should be visible", () => {
        expect(this.control.getVisible()).toBe(true);
    });

    it("should get a value even without an attribute", () => {
        const control = new StringControlMock({
            attribute: undefined,
            name: "lastname",
            uncommittedText: "Bloggs",
        });

        expect(control.getValue()).toBe("Bloggs");
    });
});
