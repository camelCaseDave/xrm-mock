import { ContextMock } from "./globalcontext/context.mock";
import { XrmStaticMock } from "./xrmstatic.mock";
import { XrmMockGenerator } from "../xrm-mock-generator/xrm-mock-generator";

export class WindowMock {
    public Xrm: XrmStaticMock;

    constructor(xrm: XrmStaticMock) {
        this.Xrm = xrm;
    }

    public GetGlobalContext(): Xrm.GlobalContext {
        return XrmMockGenerator.context;
    }
}
