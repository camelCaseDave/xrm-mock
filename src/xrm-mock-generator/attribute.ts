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

  public createOptionSet(attComponents: XrmMock.IOptionSetAttributeComponents,
                         controlComponents?: XrmMock.IAttOptionSetControlComponents[]
                                           | XrmMock.IAttOptionSetControlComponents): Xrm.Page.OptionSetAttribute;
  public createOptionSet(name: string,
                         value?: string | number,
                         options?: Xrm.Page.OptionSetValue[]): Xrm.Page.OptionSetAttribute;
  public createOptionSet(nameOrComponents: string | XrmMock.IOptionSetAttributeComponents,
                         valueOrControlComponents?: string
                          | number
                          | XrmMock.IAttOptionSetControlComponents[]
                          | XrmMock.IAttOptionSetControlComponents,
                         options?: Xrm.Page.OptionSetValue[]): Xrm.Page.OptionSetAttribute {
    let components: XrmMock.IOptionSetAttributeComponents;
    let controls: XrmMock.IAttOptionSetControlComponents[] = [];
    if (typeof(nameOrComponents) === "string") {
      const value = valueOrControlComponents as number | string;
      let num: number;
      if (value !== null
          && value !== undefined) {
        if (!options) {
          options = [ typeof value === "string"
            ? { text: value, value: 0 }
            : { text: value.toString(), value }];
        }

        if (typeof value === "string") {
          const option = options.filter((o) => o.text === value)[0];
          num = option.value;
        } else {
          num = value;
        }
      } else {
        num = undefined;
      }

      components = {
        name,
        options,
      };

      if (num || num === 0) {
        components.value = num;
      }

      controls.push({
        name,
        options,
      });
    } else {
      components = nameOrComponents;
      if (valueOrControlComponents) {
        controls = valueOrControlComponents instanceof Array
          ? valueOrControlComponents
          : [valueOrControlComponents as XrmMock.IAttOptionSetControlComponents];
      } else {
        controls.push({ name: components.name });
      }
      if (components.options && components.options.length > 0) {
        controls.filter((c) => !c.options)
                .forEach((c) => {
                  c.options = components.options;
                });
      }
    }

    const attribute = new XrmMock.OptionSetAttributeMock(components);
    this.addAttribute(attribute);
    controls.forEach((c) => {
      const component = (c as XrmMock.IOptionSetControlComponents);
      component.attribute = attribute;
      this.Control.createOptionSet(component);
    });
    return attribute;
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
        format,
        maxLength,
        name: nameOrComponents,
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

  private addAttribute(attribute: Xrm.Page.Attribute): void {
    (Xrm.Page.data.entity.attributes as any).push(attribute);
  }
}
