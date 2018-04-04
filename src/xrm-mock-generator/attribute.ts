import * as XrmMock from "../xrm-mock/index";
import Control from "./control";

export default class Attribute {
  private Control = new Control();

  public createBool(name: string, value: boolean): Xrm.Page.BooleanAttribute {
    const attribute = this.createAttribute(name, value || false);
    const boolAttribute = new XrmMock.BooleanAttributeMock(new XrmMock.EnumAttributeMock(attribute));
    this.addAttribute(boolAttribute);
    return boolAttribute;
  }

  public createDate(name: string, value: Date, includeTime: boolean): Xrm.Page.DateAttribute {
    const attribute = this.createAttribute(name || "", value || false);
    const dateAttribute = new XrmMock.DateAttributeMock({
      attribute,
      dateAttributeFormat: !includeTime ? "date" : "datetime",
    });

    this.addAttribute(dateAttribute);
    return dateAttribute;
  }

  public createLookup(name: string, lookup: Xrm.Page.LookupValue): Xrm.Page.LookupAttribute {
    const attribute = this.createAttribute(name || "",
      [new XrmMock.LookupValueMock(lookup.id, lookup.entityType, lookup.name)]);
    const lookupAttribute = new XrmMock.LookupAttributeMock(attribute, false);

    this.addAttribute(lookupAttribute);
    return lookupAttribute;
  }

  public createNumber(name: string, value: number, min?: number, max?: number, precision?: number):
    Xrm.Page.NumberAttribute {
    // TODO validate precision <5
    const attribute = this.createAttribute(name || "", value || 0);
    const numberAttribute = new XrmMock.NumberAttributeMock(
      attribute, null, "none", min || 0, max || 0, precision || 1);

    this.addAttribute(numberAttribute);
    return numberAttribute;
  }

  public createOptionSet(name: string, options: Xrm.Page.OptionSetValue[]): Xrm.Page.OptionSetAttribute {
    const optionSetOptions = [];
    for (const option of options) {
      optionSetOptions.push(new XrmMock.OptionSetValueMock(option.text, option.value));
    }

    const attribute = this.createAttribute(name, options[0]);
    const enumAttribute = new XrmMock.EnumAttributeMock(attribute);
    const optionSetAttribute = new XrmMock.OptionSetAttributeMock(enumAttribute, optionSetOptions, "language");

    this.addAttribute(optionSetAttribute);
    return optionSetAttribute;
  }

  public createOptionSetOption(option: Xrm.Page.OptionSetValue) {
    return new XrmMock.OptionSetValueMock(option.text, option.value);
  }

  public createString(attComponents: XrmMock.IStringAttributeComponents,
                      controlComponents?: XrmMock.IAttStringControlComponents[] | XrmMock.IAttStringControlComponents):
                      XrmMock.StringAttributeMock;
  public createString(name: string, value?: string,
                      visible?: boolean, disabled?: boolean,
                      format?: Xrm.Page.StringAttributeFormat, maxLength?: number,
                      label?: string): XrmMock.StringAttributeMock;
  public createString(nameOrComponents: string | XrmMock.IStringAttributeComponents,
                      valueOrControlComponents: XrmMock.IAttStringControlComponents[]
                        | XrmMock.IAttStringControlComponents
                        | string = "",
                      visible: boolean = true, disabled: boolean = false,
                      format: Xrm.Page.StringAttributeFormat = "text", maxLength: number = 100,
                      label?: string): XrmMock.StringAttributeMock {
    let components: XrmMock.IStringAttributeComponents;
    let controls: XrmMock.IAttStringControlComponents[] = [];
    if (typeof(nameOrComponents) === "string") {
      components = {
        maxLength,
        name: nameOrComponents,
        stringAttributeFormat: format,
        value: valueOrControlComponents as string,
      };
      controls.push({
        disabled,
        label: label || nameOrComponents,
        name: nameOrComponents,
        visible,
      });
    } else {
      components = nameOrComponents;
      if (valueOrControlComponents) {
        controls = valueOrControlComponents instanceof Array
          ? valueOrControlComponents
          : [valueOrControlComponents as XrmMock.IAttStringControlComponents];
      } else {
        controls.push({ name: components.name });
      }
    }

    const attribute = new XrmMock.StringAttributeMock(components);
    this.addAttribute(attribute);
    controls.forEach((c) => {
      const component = (c as XrmMock.IStringControlComponents);
      component.attribute = attribute;
      this.Control.createString(component);
    });

    return attribute;
  }

  private createAttribute(name: string, value: any): any {
    const attribute = new XrmMock.AttributeMock({
      isDirty: false,
      name,
      submitMode: "dirty",
      value,
    });

    return attribute;
  }

  private addAttribute(attribute: Xrm.Page.Attribute) {
    (Xrm.Page.data.entity.attributes as any).push(attribute);
  }
}
