/// <reference types="xrm" />
import * as XrmMock from "../xrm-mock/index";
export default class FormContext {
    static createFormContext(entity?: XrmMock.IEntityComponents, ui?: XrmMock.IUiComponents, process?: Xrm.ProcessFlow.ProcessManager): XrmMock.FormContextMock;
}
