import * as XrmMock from "../xrm-mock/index";
export default class Control {
    static createStringControl(name: string, label: string, isVisible: boolean, isDisabled: boolean, attribute: XrmMock.StringAttributeMock): void;
    private static createControl(name, label, isVisible?, controlType?);
    private static addControl(control);
}
