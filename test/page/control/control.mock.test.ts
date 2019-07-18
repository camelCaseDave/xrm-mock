import { ControlMock } from "../../../src/xrm-mock/controls/control/control.mock";
import { StringControlMock } from "../../../src/xrm-mock/controls/stringcontrol/stringcontrol.mock";

describe("Xrm.Controls.Control Mock", () => {
    beforeEach(() => {
        this.control = new ControlMock({
            controlType: "subgrid",
            label: "Main Subgrid",
            name: "Subgrid_Main",
            visible: true,
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

    it("should be labeled Main Subgrid", () => {
        expect(this.control.getLabel()).toBe("Main Subgrid");
    });

    it("should be labeled Sub Subgrid", () => {
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
