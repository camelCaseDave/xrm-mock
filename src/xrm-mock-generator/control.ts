import * as XrmMock from "../xrm-mock/index";

import Ui from "./ui";

export default class Control {
  public static createStringControl(name: string, label: string, isVisible: boolean, isDisabled: boolean,
                                    attribute: XrmMock.StringAttributeMock): void {
    const stringControl = new XrmMock.StringControlMock(
      new XrmMock.AutoLookupControlMock(
        new XrmMock.StandardControlMock({
          attribute,
          control: this.createControl(name, label, isVisible, "standard"),
        }),
        new XrmMock.UiKeyPressableMock()));

    this.addControl(stringControl);
  }
  private static createControl(name: string, label: string, isVisible?: boolean,
                               controlType?: Xrm.Page.ControlType): XrmMock.ControlMock {
    const control = new XrmMock.ControlMock({
      controlType: controlType || "standard",
      name,
      uiCanGetVisibleElement: Ui.createCanGetVisibleElement(isVisible || true),
      uiLabelElement: Ui.createLabelElement(label),
    });

    return control;
  }

  private static addControl(control: Xrm.Page.Control): void {
    (Xrm.Page.ui.controls as any).push(control);
  }
}
