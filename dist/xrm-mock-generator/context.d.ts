/// <reference types="xrm" />
import * as XrmMock from "../xrm-mock/index";
export default class Context {
    static createContext(client?: Xrm.Client): XrmMock.ContextMock;
}
