import { ExecuteResponseMock } from "../../src/xrm-mock/executeresponse/executeresponse.mock";

describe("ExecuteResponse Mock", () => {
    let executeResponse: ExecuteResponseMock;

    beforeEach(() => {
        executeResponse = new ExecuteResponseMock({});
    });
    it("should exist", () => {
        expect(executeResponse).toBeDefined();
    });
});
