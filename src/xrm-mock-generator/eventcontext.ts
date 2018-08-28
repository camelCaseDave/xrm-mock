import * as XrmMock from "../xrm-mock/index";
import Context from "./context";
import FormContext from "./formcontext";
import Ui from "./ui";

export default class EventContext {
  public static Context: Context = new Context();
  public static FormContext: FormContext = new FormContext();

  public static createEventContext(entity?: XrmMock.IEntityComponents, context?: Xrm.GlobalContext, ui?: XrmMock.IUiComponents,
                                   process?: Xrm.ProcessFlow.ProcessManager): XrmMock.EventContextMock    {
    const eventContext = new XrmMock.EventContextMock({
      context: context || Context.createContext(),
      formContext: FormContext.createFormContext(entity, ui, process),
    });
    return eventContext;
  }
}
