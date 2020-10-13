/// <reference types="xrm" />
import * as XrmMock from "../xrm-mock/index";
import App from "./app";
import Attribute from "./attribute";
import Context from "./context";
import Control from "./control";
import Device from "./device";
import EventContext from "./eventcontext";
import Form from "./form";
import FormContext from "./formcontext";
import Mobile from "./mobile";
import Navigation from "./navigation";
import Section from "./section";
import Tab from "./tab";
import Utility from "./utility";
import WebApi from "./webapi";
export declare class XrmMockGenerator {
    static EventContext: EventContext;
    static FormContext: FormContext;
    static Attribute: Attribute;
    static Context: Context;
    static Control: Control;
    static Device: Device;
    static Mobile: Mobile;
    static Tab: Tab;
    static Section: Section;
    static Form: Form;
    static Navigation: Navigation;
    static WebApi: WebApi;
    static Utility: Utility;
    static App: App;
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
