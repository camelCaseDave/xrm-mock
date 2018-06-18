import * as XrmMock from "../xrm-mock/index";
import Context from "./context";
import FormContext from "./formcontext";
import Ui from "./ui";

export default class EventContext {
  public static Context: Context = new Context();
  public static FormContext: FormContext = new FormContext();

  public static createEventContext(entity?: XrmMock.IEntityComponents, client?: Xrm.Client): XrmMock.EventContextMock {
    const eventContext = new XrmMock.EventContextMock({
      context: Context.createContext(client),
      formContext: FormContext.createFormContext(entity),
    });
    return eventContext;
  }
}
