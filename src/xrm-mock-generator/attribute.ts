import * as XrmMock from "../xrm-mock/index";
import Control, { CreateMethods as ControlCreateMethods } from "./control";

export type BooleanControlComponent = XrmMock.IAttBooleanControlComponents | XrmMock.IAttBooleanControlComponents[];
export type DateControlComponent = XrmMock.IAttDateControlComponents | XrmMock.IAttDateControlComponents[];
export type LookupControlComponent = XrmMock.IAttLookupControlComponents | XrmMock.IAttLookupControlComponents[];
export type NumberControlComponent = XrmMock.IAttNumberControlComponents | XrmMock.IAttNumberControlComponents[];
export type OptionSetControlComponent = XrmMock.IAttOptionSetControlComponents | XrmMock.IAttOptionSetControlComponents[];
export type StringControlComponent = XrmMock.IAttStringControlComponents | XrmMock.IAttStringControlComponents[];

export default class Attribute {

  private Control = new Control();

  public createBoolean(attComponents: XrmMock.IBooleanAttributeComponents, controlComponents?: BooleanControlComponent): XrmMock.BooleanAttributeMock;
  public createBoolean(name: string, value?: boolean): XrmMock.BooleanAttributeMock;
  public createBoolean(nameOrComponents: string | XrmMock.IBooleanAttributeComponents,
                       valueOrControlComponents: BooleanControlComponent | boolean): XrmMock.BooleanAttributeMock {
    if (typeof(nameOrComponents) === "string") {
      const components = { name: nameOrComponents, value: valueOrControlComponents as boolean };
      const controls = [{name: nameOrComponents}];
      return this.associateAttribute(new XrmMock.BooleanAttributeMock(components), controls, "createBoolean");
    } else {
      return this.associateAttribute(new XrmMock.BooleanAttributeMock(nameOrComponents),
                                    this.arrayify(valueOrControlComponents as BooleanControlComponent),
                                    "createBoolean");
    }
  }

  public createDate(attComponents: XrmMock.IDateAttributeComponents, controlComponents?: DateControlComponent): XrmMock.DateAttributeMock;
  public createDate(name: string, value?: Date): XrmMock.DateAttributeMock;
  public createDate(nameOrComponents: string | XrmMock.IDateAttributeComponents,
                    valueOrControlComponents?: Date | DateControlComponent): XrmMock.DateAttributeMock {
    if (typeof(nameOrComponents) === "string") {
      const components = { name: nameOrComponents, value: valueOrControlComponents as Date };
      const controls = [{name: nameOrComponents}];

      return this.associateAttribute(new XrmMock.DateAttributeMock(components), controls, "createDate");
    } else {
      return this.associateAttribute(new XrmMock.DateAttributeMock(nameOrComponents),
                                     this.arrayify(valueOrControlComponents as StringControlComponent),
                                    "createDate");
    }
  }

  public createLookup(attComponents: XrmMock.ILookupAttributeComponents, controlComponents?: LookupControlComponent): XrmMock.LookupAttributeMock;
  public createLookup(name: string, lookup: Xrm.LookupValue | Xrm.LookupValue[]): XrmMock.LookupAttributeMock;
  public createLookup(nameOrComponents: string | XrmMock.ILookupAttributeComponents,
                      valueOrControlComponents?: Xrm.LookupValue | Xrm.LookupValue[] | LookupControlComponent): XrmMock.LookupAttributeMock {
    if (typeof(nameOrComponents) === "string") {
      const components: XrmMock.ILookupAttributeComponents = {
        isPartyList: valueOrControlComponents && Array.isArray(valueOrControlComponents),
        name: nameOrComponents,
        value: this.arrayify(valueOrControlComponents as Xrm.LookupValue) };
      const controls = [{name: nameOrComponents}];

      return this.associateAttribute(new XrmMock.LookupAttributeMock(components), controls, "createLookup");
    } else {
      return this.associateAttribute(new XrmMock.LookupAttributeMock(nameOrComponents),
                                     this.arrayify(valueOrControlComponents as LookupControlComponent),
                                    "createLookup");
    }
  }

  public createNumber(attComponents: XrmMock.INumberAttributeComponents, controlComponents?: NumberControlComponent): XrmMock.NumberAttributeMock;
  public createNumber(name: string, value?: number): XrmMock.NumberAttributeMock;
  public createNumber(nameOrComponents: string | XrmMock.INumberAttributeComponents,
                      valueOrControlComponents: NumberControlComponent | number): XrmMock.NumberAttributeMock {
    if (typeof(nameOrComponents) === "string") {
      const components = { name: nameOrComponents, value: valueOrControlComponents as number };
      const controls = [{name: nameOrComponents}];
      return this.associateAttribute(new XrmMock.NumberAttributeMock(components), controls, "createNumber");
    } else {
      return this.associateAttribute(new XrmMock.NumberAttributeMock(nameOrComponents),
                                    this.arrayify(valueOrControlComponents as NumberControlComponent),
                                    "createNumber");
    }
  }

  public createOptionSet(attComponents: XrmMock.IOptionSetAttributeComponents, controlComponents?: OptionSetControlComponent): XrmMock.OptionSetAttributeMock;
  public createOptionSet(name: string, value?: string | number, options?: Xrm.OptionSetValue[]): XrmMock.OptionSetAttributeMock;
  public createOptionSet(nameOrComponents: string | XrmMock.IOptionSetAttributeComponents,
                         valueOrControlComponents?: string | number | OptionSetControlComponent,
                         options?: Xrm.OptionSetValue[]): XrmMock.OptionSetAttributeMock {
    return typeof(nameOrComponents) === "string"
      ? this.createOptionSetFromParameters(nameOrComponents, valueOrControlComponents as string | number, options)
      : this.createOptionSetFromComponents(nameOrComponents,
          this.arrayify(valueOrControlComponents as OptionSetControlComponent));
  }

  public createString(attComponents: XrmMock.IStringAttributeComponents, controlComponents?: StringControlComponent): XrmMock.StringAttributeMock;
  public createString(name: string, value?: string): XrmMock.StringAttributeMock;
  public createString(nameOrComponents: string | XrmMock.IStringAttributeComponents,
                      valueOrControlComponents: StringControlComponent | string = ""): XrmMock.StringAttributeMock {
    if (typeof(nameOrComponents) === "string") {
      const components = { name: nameOrComponents, value: valueOrControlComponents as string };
      const controls = [{name: nameOrComponents}];

      return this.associateAttribute(new XrmMock.StringAttributeMock(components), controls, "createString");
    } else {
      return this.associateAttribute(new XrmMock.StringAttributeMock(nameOrComponents),
                                     this.arrayify(valueOrControlComponents as StringControlComponent),
                                    "createString");
    }
  }

  private createOptionSetFromParameters(name: string,
                                        value: string | number,
                                        options: Xrm.OptionSetValue[]): XrmMock.OptionSetAttributeMock {
    let num: number;
    if (value !== null
      && value !== undefined) {
      if (!options) {
        options = [typeof value === "string"
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

    const components: XrmMock.IOptionSetAttributeComponents = {
      name,
      options,
    };

    if (num || num === 0) {
      components.value = num;
    }

    const controls = [{ name, options }];
    return this.associateAttribute(new XrmMock.OptionSetAttributeMock(components), controls, "createOptionSet");
  }

  private createOptionSetFromComponents(components: XrmMock.IOptionSetAttributeComponents,
                                        controls: XrmMock.IAttOptionSetControlComponents[])
                                        : XrmMock.OptionSetAttributeMock {
    if (components.options && components.options.length > 0) {
      controls.filter((c) => !c.options)
        .forEach((c) => {
          c.options = components.options;
        });
    }
    return this.associateAttribute(new XrmMock.OptionSetAttributeMock(components), controls, "createOptionSet");
  }

  private createStringFromParameters(name: string, value: string): XrmMock.StringAttributeMock {
      const components = { name, value };
      const controls = [{name}];

      return this. associateAttribute(new XrmMock.StringAttributeMock(components), controls, "createString");
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

  private addAttribute(attribute: Xrm.Attributes.Attribute): void {
    (Xrm.Page.data.entity as XrmMock.EntityMock).attributes.push(attribute);
  }

  /**
   * Creates the given attribute, as well as the controls for the attribute defined by the components
   * @param attribute The newly created attribute to be added to the page colleciton of attributes
   * @param controls Array of Control Components to create controls for the given attribute
   * @param controlCreateFunction the name of the Control function to call to create the correct type of control
   */
  private associateAttribute<TAtt extends Xrm.Attributes.Attribute>(attribute: TAtt,
                                                                    controls: any[],
                                                                    controlCreateFunction: ControlCreateMethods): TAtt {
      this.addAttribute(attribute);
      controls.forEach((c) => {
        c.attribute = attribute;
        this.defaultName(c, attribute);

        (this.Control[controlCreateFunction] as any)(c);
      });
      return attribute;
  }

  private defaultName(control: any, attribute: Xrm.Attributes.Attribute) {
    const names: string[] = [];
    attribute.controls.forEach((c) => {
      names.push(c.getName());
    });

    if (!control.name) {
      control.name = attribute.getName();
    } else if (names.indexOf(control.name) >= 0) {
      throw new Error(`Name ${control.name} has already been defined for a control for attribute ${attribute.getName()}`);
    }

    let i = 1;
    while (names.indexOf(control.name) >= 0) {
      control.name = attribute.getName() + i++;
    }
  }

  private arrayify<T>(possibleArray: T[] | T): T[] {
    if (!possibleArray) {
      return [];
    } else if (possibleArray instanceof Array) {
      return possibleArray;
    } else {
      return [possibleArray];
    }
  }
}
