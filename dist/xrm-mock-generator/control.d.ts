import * as XrmMock from "../xrm-mock/index";
export default class Control {
    createString(attribute: XrmMock.StringAttributeMock, name?: string, isVisible?: boolean, isDisabled?: boolean, label?: string): XrmMock.StringControlMock;
    private createControl(name, label, isVisible?, controlType?);
    private addControl(control);
}
