import * as XrmMock from "../xrm-mock/index";
import Attribute from "./attribute";
import Context from "./context";
import Control from "./control";
import Form from "./form";
import Ui from "./ui";

export class XrmMockGenerator {
  public static Attribute: Attribute = new Attribute();
  public static Context: Context = new Context();
  public static Control: Control = new Control();
  public static Form: Form = new Form();
  public static Ui: Ui = new Ui();

  public static initialise(): XrmMock.XrmStaticMock {
    const xrm = new XrmMock.XrmStaticMock({
      page: new XrmMock.PageMock({
        context: Context.createContext(),
        data: new XrmMock.DataMock(
          new XrmMock.EntityMock(
            "{00000000-0000-0000-0000-000000000000}",
            new XrmMock.ItemCollectionMock([]))),
        ui: Ui.createUi(),
      }),
    });

    (global as any).Xrm = xrm;
    return xrm;
  }
}
