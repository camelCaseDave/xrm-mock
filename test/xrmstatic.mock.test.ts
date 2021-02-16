import { XrmStaticMock } from "../src/xrm-mock/xrmstatic.mock";

describe("XrmStatic Mock", () => {
    let xrmStaticMock;

    beforeEach(() => {
        xrmStaticMock = new XrmStaticMock({});
    });
    it("should exist", () => {
        expect(xrmStaticMock).toBeDefined();
    });
});
