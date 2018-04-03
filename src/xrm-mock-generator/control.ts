import * as XrmMock from "../xrm-mock/index";
import Ui from "./ui";

export default class Control {
  public createString(attribute: XrmMock.StringAttributeMock, name?: string, isVisible: boolean = true, isDisabled: boolean = false, label?: string): void {
    const stringControl = new XrmMock.StringControlMock(
      new XrmMock.AutoLookupControlMock(
        new XrmMock.StandardControlMock({
          attribute,
          control: this.createControl(name, label, isVisible),
          uiStandardElement: XrmMock.UiStandardElementMock.create(label,isVisible)
          })));

    this.addControl(stringControl);
  }
  private createControl(name: string, label: string, isVisible?: boolean,
                               controlType: Xrm.Page.ControlType = "standard"): XrmMock.ControlMock {
    const control = new XrmMock.ControlMock({
      controlType: controlType || "standard",
      name,
      uiCanGetVisibleElement: Ui.createCanGetVisibleElement(isVisible || true),
      uiLabelElement: Ui.createLabelElement(label || name),
    });

    return control;
  }

  private addControl(control: Xrm.Page.Control): void {
    (Xrm.Page.ui.controls as any).push(control);
  }
}
