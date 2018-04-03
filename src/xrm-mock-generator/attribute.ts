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

  public createString(name: string, value: string= "", isVisible: boolean = true, isDisabled: boolean = false,
                      format: Xrm.Page.StringAttributeFormat = "text", maxLength: number = 100, label?: string) {
    const attribute = this.createAttribute(name, value);
    const stringAttribute = new XrmMock.StringAttributeMock(attribute, format || "text", maxLength || 100);

    this.addAttribute(stringAttribute);
    this.Control.createString(stringAttribute, name, isVisible, isDisabled, label);

    return stringAttribute;
  }

  private createAttribute(name: string, value: any): XrmMock.AttributeMock {
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
