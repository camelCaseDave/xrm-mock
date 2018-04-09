import { WindowMock } from "../src/xrm-mock/window.mock";
import { XrmStaticMock } from "../src/xrm-mock/xrmstatic.mock";

describe("Window Mock", () => {
    beforeEach(() => {
        this.windowMock = new WindowMock(new XrmStaticMock({}));
    });
    it("should exist", () => {
        expect(this.windowMock).toBeDefined();
    });
});
