import * as XrmMock from "../xrm-mock/index";
import Ui from "./ui";

export type CreateMethods = "createBoolean" | "createDate" |  "createLookup" | "createNumber" | "createOptionSet" |  "createString";

export default class Control {

  public createBoolean(components: XrmMock.IBooleanControlComponents): XrmMock.BooleanControlMock;
  public createBoolean(attribute: XrmMock.BooleanAttributeMock,
                       name?: string,
                       visible?: boolean,
                       disabled?: boolean, label?: string): XrmMock.BooleanControlMock;
  public createBoolean(attributeOrComponents: XrmMock.BooleanAttributeMock | XrmMock.IBooleanControlComponents,
                       name?: string,
                       visible: boolean = true,
                       disabled: boolean = false,
                       label?: string): XrmMock.BooleanControlMock {
    const components: XrmMock.IBooleanControlComponents =
      this.createStandardComponent(attributeOrComponents, name, visible, disabled, label);

    return this.addControl(new XrmMock.BooleanControlMock(components));
  }

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

  public createGrid(components: XrmMock.IGridControlComponents): XrmMock.GridControlMock;
  public createGrid(name?: string,
                    visible?: boolean,
                    label?: string): XrmMock.GridControlMock;
  public createGrid(nameOrComponents: XrmMock.IGridControlComponents | string,
                    visible: boolean = true,
                    label?: string): XrmMock.GridControlMock {
    const components: XrmMock.IGridControlComponents = (nameOrComponents as XrmMock.IGridControlComponents).name
      ? nameOrComponents as XrmMock.IGridControlComponents
      : {
        label,
        name: nameOrComponents as string,
        visible };

    return this.addControl(new XrmMock.GridControlMock(components));
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

  public createNumber(components: XrmMock.INumberControlComponents): XrmMock.NumberControlMock;
  public createNumber(attribute: XrmMock.NumberAttributeMock,
                      name?: string,
                      visible?: boolean,
                      disabled?: boolean,
                      label?: string): XrmMock.NumberControlMock;
  public createNumber(attributeOrComponents: XrmMock.NumberAttributeMock | XrmMock.INumberControlComponents,
                      name?: string,
                      visible: boolean = true,
                      disabled: boolean = false,
                      label?: string): XrmMock.NumberControlMock {
    const components: XrmMock.INumberControlComponents =
      this.createStandardComponent(attributeOrComponents, name, visible, disabled, label);

    return this.addControl(new XrmMock.NumberControlMock(components));
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

  private addControl<T extends Xrm.Controls.Control>(control: T): T {
    (Xrm.Page.ui.controls as XrmMock.ItemCollectionMock<Xrm.Controls.Control>).push(control);
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
