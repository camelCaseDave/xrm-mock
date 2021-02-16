import { StageMock } from "../../../src/xrm-mock/processflow/stage/stage.mock";

describe("Xrm.Page.Stage Mock", () => {
    let stage: StageMock;

    beforeEach(() => {
        stage = new StageMock("5555", "Sales Pipeline", "active", 1);
    });

    it("should instantiate", () => {
        expect(stage).toBeDefined();
    });

    it("should have an id of 5555", () => {
        expect(stage.getId()).toBe("5555");
    });

    it("should have a category object", () => {
        expect(stage.getCategory).toEqual(jasmine.any(Function));
        expect(stage.getCategory().getValue).toEqual(jasmine.any(Function));
    });

    it("should be called Sales Pipeline", () => {
        expect(stage.getName()).toBe("Sales Pipeline");
    });

    it("should be active", () => {
        expect(stage.getStatus()).toBe("active");
    });
});
