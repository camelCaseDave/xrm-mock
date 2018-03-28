import * as XrmMock from "../xrm-mock/index";
import Form from "./form";

export default class Ui {
  public static createUi(): XrmMock.UiMock {
    const ui = new XrmMock.UiMock({
      controls: new XrmMock.ItemCollectionMock([]),
      formSelector: new XrmMock.FormSelectorMock(new XrmMock.ItemCollectionMock([Form.createBlankForm()])),
    });
    return ui;
  }

  public static createLabelElement(label: string): XrmMock.UiLabelElementMock {
    return new XrmMock.UiLabelElementMock(label);
  }

  public static createCanGetVisibleElement(isVisible: boolean): XrmMock.UiCanGetVisibleElementMock {
    return new XrmMock.UiCanGetVisibleElementMock(isVisible);
  }

  public static createStandardElement(labelElement: Xrm.Page.UiLabelElement,
                                      visibleElement: Xrm.Page.UiCanGetVisibleElement) {
    return new XrmMock.UiStandardElementMock(labelElement, visibleElement);
  }
}
