/// <reference types="xrm" />
import * as XrmMock from "../xrm-mock/index";
export declare type DateControlComponent = XrmMock.IAttDateControlComponents | XrmMock.IAttDateControlComponents[];
export declare type OptionSetControlComponent = XrmMock.IAttOptionSetControlComponents | XrmMock.IAttOptionSetControlComponents[];
export declare type StringControlComponent = XrmMock.IAttStringControlComponents | XrmMock.IAttStringControlComponents[];
export default class Attribute {
    private Control;
    createBool(name: string, value: boolean): Xrm.Page.BooleanAttribute;
    createDate(attComponents: XrmMock.IDateAttributeComponents, controlComponents?: DateControlComponent): Xrm.Page.DateAttribute;
    createDate(name: string, value?: Date): Xrm.Page.DateAttribute;
    createLookup(name: string, lookup: Xrm.Page.LookupValue): Xrm.Page.LookupAttribute;
    createNumber(name: string, value: number, min?: number, max?: number, precision?: number): Xrm.Page.NumberAttribute;
    createOptionSet(attComponents: XrmMock.IOptionSetAttributeComponents, controlComponents?: OptionSetControlComponent): Xrm.Page.OptionSetAttribute;
    createOptionSet(name: string, value?: string | number, options?: Xrm.Page.OptionSetValue[]): Xrm.Page.OptionSetAttribute;
    createString(attComponents: XrmMock.IStringAttributeComponents, controlComponents?: StringControlComponent): XrmMock.StringAttributeMock;
    createString(name: string, value?: string): XrmMock.StringAttributeMock;
    private createOptionSetFromParameters(name, value, options);
    private createOptionSetFromComponents(components, controls);
    private createStringFromParameters(name, value);
    private createAttribute(name, value);
    private addAttribute(attribute);
    /**
     * Creates the given attribute, as well as the controls for the attribute defined by the components
     * @param attribute The newly created attribute to be added to the page colleciton of attributes
     * @param controls Array of Control Components to create controls for the given attribute
     * @param controlCreateFunction the name of the Control function to call to create the correct type of control
     */
    private associateAttribute<TAtt>(attribute, controls, controlCreateFunction);
    private arrayify<T>(possibleArray);
}
