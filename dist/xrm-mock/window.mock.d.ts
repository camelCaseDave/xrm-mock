import { ContextMock } from "./globalcontext/context.mock";
import { XrmStaticMock } from "./xrmstatic.mock";
export declare class WindowMock {
    Xrm: XrmStaticMock;
    constructor(xrm: XrmStaticMock);
    GetGlobalContext(): ContextMock;
}
