/// <reference types="xrm" />
import { XrmStaticMock } from "./xrmstatic.mock";
export declare class WindowMock {
    Xrm: XrmStaticMock;
    constructor(xrm: XrmStaticMock);
    GetGlobalContext(): Xrm.GlobalContext;
}
