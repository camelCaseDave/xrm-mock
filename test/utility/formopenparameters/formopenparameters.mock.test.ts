import { FormOpenParametersMock } from "../../../src/xrm-mock/utility/formopenparameters/formopenparameters.mock";

describe("Xrm.Utility.FormOpenParameters Mock", () => {
    beforeEach(() => {
        this.formOpenParameters = new FormOpenParametersMock("5555", "on", "true");
    });

    it("should instantiate", () => {
        expect(this.formOpenParameters).toBeDefined();
    });
});
