import { ItemCollectionMock } from "../../../src/xrm-mock/collection/itemcollection/itemcollection.mock";
import { ProcessManagerMock } from "../../../src/xrm-mock/data/processmanager/processmanager.mock";
import { StageMock } from "../../../src/xrm-mock/page/stage/stage.mock";
import { StepMock } from "../../../src/xrm-mock/page/step/step.mock";
import { ProcessMock } from "../../../src/xrm-mock/processflow/process/process.mock";

describe("Xrm.Page.data.ProcessManager Mock", () => {
    beforeEach(() => {
        const firstNameStep = new StepMock("First Name", "firstname", false);
        const lastNameStep = new StepMock("Last Name", "lastname", false);
        this.stage1 = new StageMock("6001", "Start", "active", null, [firstNameStep]);
        this.stage2 = new StageMock("6002", "Finish", "inactive", null, [lastNameStep]);

        this.process1 = new ProcessMock({
            id: "4444",
            name: "Sales Process",
            rendered: true,
            stages: new ItemCollectionMock<Xrm.Page.Stage>([this.stage1, this.stage2]),
        });
        this.process2 = new ProcessMock({
            id: "5555",
            name: "Service Process",
            rendered: false,
            stages: new ItemCollectionMock<Xrm.Page.Stage>([this.stage1, this.stage2]),
        });
        this.processManager = new ProcessManagerMock([this.process1, this.process2]);
    });

    it("should initialise", () => {
        expect(this.processManager).toBeDefined();
    });

    it("should have Sales Process active", () => {
        expect(this.processManager.getActiveProcess()).toBe(this.process1);
        expect(this.processManager.getActiveProcess()).not.toBe(this.process2);
    });

    it("should set Service Process active", () => {
        expect(this.processManager.getActiveProcess()).toBe(this.process1);
        expect(this.processManager.getActiveProcess()).not.toBe(this.process2);

        this.processManager.setActiveProcess("5555");
        expect(this.processManager.getActiveProcess()).toBe(this.process2);
        expect(this.processManager.getActiveProcess()).not.toBe(this.process1);
    });

    it("should get instance id of the active process", () => {
        expect(this.processManager.getInstanceId()).toBe("4444");
    });

    it("should get instance name of the active process", () => {
        expect(this.processManager.getInstanceName()).toBe("Sales Process");
    });

    it("should get the active stage", () => {
        const activeStage = this.processManager.getActiveStage();
        expect(activeStage).toBe(this.stage1);
    });

});
