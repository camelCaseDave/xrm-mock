import * as XrmMock from "../xrm-mock/index";
import Ui from "./ui";

export type CreateMethods = "createDate" | "createLookup" | "createOptionSet" |  "createString";

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
      this.createStandardComponent(attributeOrComponents, name, visible, disabled, label);

    return this.addControl(new XrmMock.DateControlMock(components));
  }

  public createLookup(components: XrmMock.ILookupControlComponents): XrmMock.LookupControlMock;
  public createLookup(attribute: XrmMock.LookupAttributeMock,
                      name?: string,
                      visible?: boolean,
                      disabled?: boolean,
                      label?: string): XrmMock.LookupControlMock;
  public createLookup(attributeOrComponents: XrmMock.LookupAttributeMock | XrmMock.ILookupControlComponents,
                      name?: string,
                      visible: boolean = true,
                      disabled: boolean = false,
                      label?: string): XrmMock.LookupControlMock {
    const components: XrmMock.ILookupControlComponents =
    this.createStandardComponent(attributeOrComponents, name, visible, disabled, label);

    return this.addControl(new XrmMock.LookupControlMock(components));
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
        this.createStandardComponent(attributeOrComponents, name, visible, disabled, label);

      return this.addControl(new XrmMock.OptionSetControlMock(components));
  }

  public createString(components: XrmMock.IStringControlComponents): XrmMock.StringControlMock;
  public createString(attribute: XrmMock.StringAttributeMock,
                      name?: string,
                      visible?: boolean,
                      disabled?: boolean, label?: string): XrmMock.StringControlMock;
  public createString(attributeOrComponents: XrmMock.StringAttributeMock | XrmMock.IStringControlComponents,
                      name?: string,
                      visible?: boolean,
                      disabled?: boolean,
                      label?: string): XrmMock.StringControlMock {
    const components: XrmMock.IStringControlComponents =
      this.createStandardComponent(attributeOrComponents, name, visible, disabled, label);

    return this.addControl(new XrmMock.StringControlMock(components));
  }

  private addControl<T extends Xrm.Page.Control>(control: T): T {
    (Xrm.Page.ui.controls as any).push(control);
    return control;
  }

  private createStandardComponent<TControl extends XrmMock.StandardControlMock<TControl, TAttribute, TValue>,
                                  TAttribute extends XrmMock.AttributeMock<TControl, TValue>,
                                  TValue extends XrmMock.AttributeReturnType,
                                  TComponent extends XrmMock.IStandardControlComponents<TControl, TAttribute, TValue>>(
                                    attributeOrComponents: TAttribute | TComponent,
                                    name?: string,
                                    visible?: boolean,
                                    disabled?: boolean,
                                    label?: string): TComponent {
    const att = attributeOrComponents as TAttribute;
    return att.controls && att.eventHandlers
    ? {
      attribute: attributeOrComponents as TAttribute,
      disabled,
      label: label || name,
      name,
      visible,
    } as any
    : attributeOrComponents as TComponent;
  }
}
