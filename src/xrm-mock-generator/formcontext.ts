import * as XrmMock from "../xrm-mock/index";
import { UiMock } from "../xrm-mock/ui/ui.mock";
import Ui from "./ui";

export default class FormContext {
    // [Yagasoft | 2018-08-15 | Added] Process Mock
    // [Yagasoft | 2018-08-09 | Added] UI Mock as param to be able to inject the full model
    public static createFormContext(entity?: XrmMock.IEntityComponents, ui?: XrmMock.IUiComponents,
                                    process?: Xrm.ProcessFlow.ProcessManager): XrmMock.FormContextMock
    {
    return new XrmMock.FormContextMock(
      new XrmMock.DataMock(
        new XrmMock.EntityMock(entity), process),
        (ui as UiMock) || Ui.createUi(),
    );
  }
}
