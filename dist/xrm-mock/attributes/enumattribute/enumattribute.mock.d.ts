import { ControlMock } from "../../page/control/control.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";
export declare class EnumAttributeMock<TControl extends ControlMock, TValue extends number | boolean> extends AttributeMock<TControl, TValue> implements Xrm.Page.EnumAttribute {
    initialValue: TValue;
    constructor(components: IEnumAttributeComponents<TControl, TValue>);
    getInitialValue(): TValue;
}
export interface IEnumAttributeComponents<TControl extends ControlMock, TValue extends number | boolean> extends IAttributeComponents<TControl, TValue> {
    initialValue?: TValue;
}
