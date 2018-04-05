import * as XrmMock from "../xrm-mock/index";
import Ui from "./ui";

export type CreateMethods = "createDate" | "createString" | "createOptionSet";

export default class Control {

  public createDate(components: XrmMock.IDateControlComponents): XrmMock.DateControlMock;
  public createDate(attribute: XrmMock.DateAttributeMock,
                    name?: string,
                    visible?: boolean,
                    disabled?: boolean,
                    label?: string): XrmMock.DateControlMock;
  public createDate(attributeOrComponents: XrmMock.DateAttributeMock | XrmMock.IDateControlComponents,
                    name?: string,
                    visible: boolean = true,
                    disabled: boolean = false,
                    label?: string): XrmMock.DateControlMock {

    const components: XrmMock.IDateControlComponents =
      attributeOrComponents instanceof XrmMock.DateAttributeMock
      ? {
        attribute: attributeOrComponents,
        disabled,
        label: label || name,
        name,
        visible,
      }
      : attributeOrComponents;

    return this.addControl(new XrmMock.DateControlMock(components));
  }

  public createOptionSet(components: XrmMock.IOptionSetControlComponents): XrmMock.OptionSetControlMock;
  public createOptionSet(attribute: XrmMock.OptionSetAttributeMock,
                         name?: string,
                         visible?: boolean,
                         disabled?: boolean,
                         label?: string): XrmMock.OptionSetControlMock;
  public createOptionSet(attributeOrComponents: XrmMock.OptionSetAttributeMock | XrmMock.IOptionSetControlComponents,
                         name?: string,
                         visible: boolean = true,
                         disabled: boolean = false,
                         label?: string): XrmMock.OptionSetControlMock {

    const components: XrmMock.IOptionSetControlComponents =
      attributeOrComponents instanceof XrmMock.OptionSetAttributeMock
      ? {
        attribute: attributeOrComponents,
        disabled,
        label: label || name,
        name,
        visible,
      }
      : attributeOrComponents;

    return this.addControl(new XrmMock.OptionSetControlMock(components));
  }

  public createString(components: XrmMock.IStringControlComponents): XrmMock.StringControlMock;
  public createString(attribute: XrmMock.StringAttributeMock,
                      name?: string,
                      visible?: boolean,
                      disabled?: boolean, label?: string): XrmMock.StringControlMock;
  public createString(attributeOrComponents: XrmMock.StringAttributeMock | XrmMock.IStringControlComponents,
                      name?: string,
                      visible: boolean = true,
                      disabled: boolean = false,
                      label?: string): XrmMock.StringControlMock {

    const components: XrmMock.IStringControlComponents =
      attributeOrComponents instanceof XrmMock.StringAttributeMock
      ? {
        attribute: attributeOrComponents,
        disabled,
        label: label || name,
        name,
        visible,
      }
      : attributeOrComponents;

    return this.addControl(new XrmMock.StringControlMock(components));
  }

  private addControl<T extends Xrm.Page.Control>(control: T): T {
    (Xrm.Page.ui.controls as any).push(control);
    return control;
  }
}
