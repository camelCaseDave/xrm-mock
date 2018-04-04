import * as XrmMock from "../xrm-mock/index";
export default class Control {
    createString(components: XrmMock.IStringControlComponents): XrmMock.StringControlMock;
    createString(attribute: XrmMock.StringAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.StringControlMock;
    private addControl<T>(control);
}
