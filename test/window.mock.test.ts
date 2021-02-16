import { WindowMock } from "../src/xrm-mock/window.mock";
import { XrmStaticMock } from "../src/xrm-mock/xrmstatic.mock";

describe("Window Mock", () => {
    let windowMock;
    beforeEach(() => {
        windowMock = new WindowMock(new XrmStaticMock({}));
    });
    it("should exist", () => {
        expect(windowMock).toBeDefined();
    });
});
