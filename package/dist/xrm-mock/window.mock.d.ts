import { ContextMock } from "./context/context.mock";
import { XrmStaticMock } from "./xrmstatic.mock";
export declare class WindowMock {
    Xrm: XrmStaticMock;
    constructor(xrm: XrmStaticMock);
    GetGlobalContext(): ContextMock;
}
