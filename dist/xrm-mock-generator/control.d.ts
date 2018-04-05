import * as XrmMock from "../xrm-mock/index";
export declare type CreateMethods = "createDate" | "createLookup" | "createOptionSet" | "createString";
export default class Control {
    createDate(components: XrmMock.IDateControlComponents): XrmMock.DateControlMock;
    createDate(attribute: XrmMock.DateAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.DateControlMock;
    createLookup(components: XrmMock.ILookupControlComponents): XrmMock.LookupControlMock;
    createLookup(attribute: XrmMock.LookupAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.LookupControlMock;
    createOptionSet(components: XrmMock.IOptionSetControlComponents): XrmMock.OptionSetControlMock;
    createOptionSet(attribute: XrmMock.OptionSetAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.OptionSetControlMock;
    createString(components: XrmMock.IStringControlComponents): XrmMock.StringControlMock;
    createString(attribute: XrmMock.StringAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.StringControlMock;
    private addControl<T>(control);
    private createStandardComponent<TControl, TAttribute, TValue, TComponent>(attributeOrComponents, name?, visible?, disabled?, label?);
}
