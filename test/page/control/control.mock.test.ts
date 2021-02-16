import { ControlMock } from "../../../src/xrm-mock/controls/control/control.mock";
import { StringControlMock } from "../../../src/xrm-mock/controls/stringcontrol/stringcontrol.mock";

describe("Xrm.Controls.Control Mock", () => {
    let control: ControlMock;

    beforeEach(() => {
        control = new ControlMock({
            controlType: "subgrid",
            label: "Main Subgrid",
            name: "Subgrid_Main",
            visible: true,
        });
    });

    it("should initialise", () => {
        expect(control).toBeDefined();
    });

    it("should be a subgrid", () => {
        expect(control.getControlType()).toBe("subgrid");
    });

    it("should be called Subgrid_Main", () => {
        expect(control.getName()).toBe("Subgrid_Main");
    });

    it("should have no parent", () => {
        expect(control.getParent).toBeDefined();
        expect(control.getParent()).toBeUndefined();
    });

    it("should be labeled Main Subgrid", () => {
        expect(control.getLabel()).toBe("Main Subgrid");
    });

    it("should be labeled Sub Subgrid", () => {
        expect(control.getLabel()).toBe("Main Subgrid");
        control.setLabel("Sub Subgrid");
        expect(control.getLabel()).toBe("Sub Subgrid");
    });

    it("should be visible", () => {
        expect(control.getVisible()).toBe(true);
    });

    it("should get a value even without an attribute", () => {
        const stringControl = new StringControlMock({
            attribute: undefined,
            name: "lastname",
            uncommittedText: "Bloggs",
        });

        expect(stringControl.getValue()).toBe("Bloggs");
    });
});
