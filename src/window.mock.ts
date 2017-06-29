import { ContextMock } from './context/context.mock';
import { XrmStaticMock } from './xrmstatic.mock';

export class WindowMock {
    Xrm: XrmStaticMock;

    constructor(xrm: XrmStaticMock) {
        this.Xrm = xrm;
    }

    GetGlobalContext(): ContextMock {
        throw 'not implemented';
    }
}