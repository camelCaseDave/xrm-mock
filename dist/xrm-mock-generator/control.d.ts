import * as XrmMock from "../xrm-mock/index";
export default class Control {
    createOptionSet(components: XrmMock.IOptionSetControlComponents): XrmMock.OptionSetControlMock;
    createOptionSet(attribute: XrmMock.OptionSetAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.OptionSetControlMock;
    createString(components: XrmMock.IStringControlComponents): XrmMock.StringControlMock;
    createString(attribute: XrmMock.StringAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.StringControlMock;
    private addControl<T>(control);
}
