import { ItemCollectionMock } from "../../../src/xrm-mock/collection/itemcollection/itemcollection.mock";
import { ProcessMock } from "../../../src/xrm-mock/processflow/process/process.mock";
import { StageMock } from "../../../src/xrm-mock/processflow/stage/stage.mock";
import { StepMock } from "../../../src/xrm-mock/processflow/step/step.mock";

describe("Xrm.ProcessFlow.Process Mock", () => {
    beforeEach(() => {
        const firstNameStep = new StepMock("First Name", "firstname", false);
        const lastNameStep = new StepMock("Last Name", "lastname", false);
        const stage1 = new StageMock("6001", "Start", "active", null, [firstNameStep]);
        const stage2 = new StageMock("6002", "Finish", "active", null, [lastNameStep]);

        this.process = new ProcessMock({
            id: "4444",
            name: "Sales Process",
            rendered: true,
            stages: new ItemCollectionMock<Xrm.ProcessFlow.Stage>([stage1, stage2]),
        });
    });

    it("should instantiate", () => {
        expect(this.process).toBeDefined();
    });

    it("should have an id of 4444", () => {
        expect(this.process.getId()).toBe("4444");
    });

    it("should be called Sales Process", () => {
        expect(this.process.getName()).toBe("Sales Process");
    });

    it("should be rendered", () => {
        expect(this.process.isRendered()).toBe(true);
    });

    it("should be toggled to not rendered", () => {
        expect(this.process.isRendered()).toBe(true);
    });

    it("should have 2 stages", () => {
        const stages = this.process.getStages();
        expect(stages).toBeDefined();
        expect(stages.getLength()).toBe(2);
    });
});
