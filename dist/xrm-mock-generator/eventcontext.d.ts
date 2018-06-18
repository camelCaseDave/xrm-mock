/// <reference types="xrm" />
import * as XrmMock from "../xrm-mock/index";
import Context from "./context";
import FormContext from "./formcontext";
export default class EventContext {
    static Context: Context;
    static FormContext: FormContext;
    static createEventContext(client?: Xrm.Client, components?: any): XrmMock.EventContextMock;
}
