/// <reference types="xrm" />
import * as XrmMock from "../xrm-mock";
import Attribute from "./attribute";
import Context from "./context";
import Control from "./control";
import EventContext from "./eventcontext";
import Form from "./form";
import FormContext from "./formcontext";
import Navigation from "./navigation";
import Section from "./section";
import Tab from "./tab";
import WebApi from "./webapi";
export declare class XrmMockGenerator {
    static EventContext: EventContext;
    static FormContenxt: FormContext;
    static Attribute: Attribute;
    static Context: Context;
    static Control: Control;
    static Tab: Tab;
    static Section: Section;
    static Form: Form;
    static Navigation: Navigation;
    static WebApi: WebApi;
    static context: XrmMock.ContextMock;
    static formContext: XrmMock.FormContextMock;
    static eventContext: XrmMock.EventContextMock;
    static initialise(components?: IXrmGeneratorComponents): XrmMock.XrmStaticMock;
    static getEventContext(): XrmMock.EventContextMock;
    static getFormContext(): XrmMock.FormContextMock;
}
export interface IXrmGeneratorComponents {
    context?: XrmMock.ContextMock;
    ui?: XrmMock.IUiComponents;
    entity?: XrmMock.IEntityComponents;
    process?: Xrm.ProcessFlow.ProcessManager;
}
