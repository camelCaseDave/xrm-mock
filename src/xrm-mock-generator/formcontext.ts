import * as XrmMock from "../xrm-mock/index";
import { UiMock } from "../xrm-mock/ui/ui.mock";
import Ui from "./ui";

export default class FormContext {
    public static createFormContext(entity?: XrmMock.IEntityComponents, ui?: XrmMock.IUiComponents,
                                    process?: Xrm.ProcessFlow.ProcessManager): XrmMock.FormContextMock {
    return new XrmMock.FormContextMock(
      new XrmMock.DataMock(
        new XrmMock.EntityMock(entity), process),
        (ui as UiMock) || Ui.createUi(),
    );
  }
}
