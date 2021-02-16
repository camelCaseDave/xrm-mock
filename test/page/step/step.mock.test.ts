import { StepMock } from "../../../src/xrm-mock/processflow/step/step.mock";

describe("Xrm.ProcessFlow.Step Mock", () => {
    let step: StepMock;

    beforeEach(() => {
        step = new StepMock("First Name", "firstname", true);
    });

    it("should instantiate", () => {
        expect(step).toBeDefined();
    });

    it("should be called First Name", () => {
        expect(step.getName()).toBe("First Name");
    });

    it("should have an attribute of firstname", () => {
        expect(step.getAttribute()).toBe("firstname");
    });

    it("should be required", () => {
        expect(step.isRequired()).toBe(true);
    });
});
