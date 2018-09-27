/// <reference types="xrm" />
import * as XrmMock from "../xrm-mock";
export default class Context {
    static createContext(client?: Xrm.Client): XrmMock.ContextMock;
}
