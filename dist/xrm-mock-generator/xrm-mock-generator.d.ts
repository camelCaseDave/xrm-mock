/// <reference types="xrm" />
import * as XrmMock from "../xrm-mock/index";
import Attribute from "./attribute";
import Context from "./context";
import Control from "./control";
import EventContext from "./eventcontext";
import Form from "./form";
import FormContext from "./formcontext";
import WebApi from "./webapi";
export declare class XrmMockGenerator {
    static EventContext: EventContext;
    static FormContenxt: FormContext;
    static Attribute: Attribute;
    static Context: Context;
    static Control: Control;
    static Form: Form;
    static WebApi: WebApi;
    static initialise(components?: IXrmGeneratorComponents): XrmMock.XrmStaticMock;
    static getEventContenxt(): Xrm.Events.EventContext;
    static getFormContext(): Xrm.FormContext;
}
export interface IXrmGeneratorComponents {
    entity?: XrmMock.IEntityComponents;
}
