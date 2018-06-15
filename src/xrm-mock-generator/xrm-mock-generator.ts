import * as XrmMock from "../xrm-mock/index";
import Attribute from "./attribute";
import Context from "./context";
import Control from "./control";
import Form from "./form";
import Ui from "./ui";
import WebApi from "./webapi";

declare var global: any;

export class XrmMockGenerator {
  public static Attribute: Attribute = new Attribute();
  public static Context: Context = new Context();
  public static Control: Control = new Control();
  public static Form: Form = new Form();
  public static Ui: Ui = new Ui();
  public static WebApi: WebApi = new WebApi();

  public static initialise(components?: IXrmGeneratorComponents): XrmMock.XrmStaticMock {
    components = components || {};

    const context = Context.createContext();
    const formContext = new XrmMock.FormContextMock(
      new XrmMock.DataMock(
        new XrmMock.EntityMock(components.entity)),
      Ui.createUi(),
    );

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
}

export interface IXrmGeneratorComponents {
  entity?: XrmMock.IEntityComponents;
}
