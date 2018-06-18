import * as XrmMock from "../xrm-mock/index";
import Attribute from "./attribute";
import Context from "./context";
import Control from "./control";
import EventContext from "./eventcontext";
import Form from "./form";
import FormContext from "./formcontext";
import WebApi from "./webapi";

declare var global: any;

export class XrmMockGenerator {
  public static EventContext: EventContext = new EventContext();
  public static FormContenxt: FormContext = new FormContext();
  public static Attribute: Attribute = new Attribute();
  public static Context: Context = new Context();
  public static Control: Control = new Control();
  public static Form: Form = new Form();
  public static WebApi: WebApi = new WebApi();

  public static initialise(components?: IXrmGeneratorComponents): XrmMock.XrmStaticMock {
    components = components || {};

    const context = Context.createContext();
    const formContext = FormContext.createFormContext(components);

    const xrm = new XrmMock.XrmStaticMock({
      page: new XrmMock.PageMock(
        context,
        formContext,
      ),
      webApi: WebApi.createApi(context.client),
    });

    if (typeof global === "undefined") {
      window.Xrm = xrm;
    } else {
      global.Xrm = xrm;
    }
    return xrm;
  }

  public static getEventContenxt(): Xrm.Events.EventContext {
    return EventContext.createEventContext();
  }

  public static getFormContext(): Xrm.FormContext {
    return FormContext.createFormContext();
  }
}

export interface IXrmGeneratorComponents {
  entity?: XrmMock.IEntityComponents;
}
