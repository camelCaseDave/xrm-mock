import { ExecuteResponseMock } from "../../src/xrm-mock/executeresponse/executeresponse.mock";

describe("ExecuteResponse Mock", () => {
    beforeEach(() => {
        this.executeResponse = new ExecuteResponseMock({});
    });
    it("should exist", () => {
        expect(this.executeResponse).toBeDefined();
    });
});
