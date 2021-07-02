/// <reference types="xrm" />
import { ControlMock } from "../../controls/control/control.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";
export declare class EnumAttributeMock<TControl extends ControlMock, TValue extends number | boolean> extends AttributeMock<TControl, TValue> implements Xrm.Attributes.EnumAttribute<TValue> {
    initialValue: TValue;
    constructor(components: IEnumAttributeComponents<TControl, TValue>);
    getInitialValue(): TValue;
}
export interface IEnumAttributeComponents<TControl extends ControlMock, TValue extends number | boolean> extends IAttributeComponents<TControl, TValue> {
    initialValue?: TValue;
}
