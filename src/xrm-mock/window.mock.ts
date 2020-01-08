import { XrmMockGenerator } from "../xrm-mock-generator/xrm-mock-generator";
import { XrmStaticMock } from "./xrmstatic.mock";

export class WindowMock {
    public Xrm: XrmStaticMock;

    constructor(xrm: XrmStaticMock) {
        this.Xrm = xrm;
    }

    public GetGlobalContext(): Xrm.GlobalContext {
        return XrmMockGenerator.context;
    }
}
