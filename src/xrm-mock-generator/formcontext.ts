import * as XrmMock from "../xrm-mock/index";
import Ui from "./ui";

export default class FormContext {
  public static createFormContext(entity?: XrmMock.IEntityComponents): XrmMock.FormContextMock {
    return new XrmMock.FormContextMock(
      new XrmMock.DataMock(
        new XrmMock.EntityMock(entity)),
      Ui.createUi(),
    );
  }
}
