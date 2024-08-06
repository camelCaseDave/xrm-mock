/// <reference types="xrm" />
import { StandardControlMock } from "../../controls/standardcontrol/standardcontrol.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";
export declare class EnumAttributeMock<TControl extends StandardControlMock<TControl, TAttribute, TValue>, TAttribute extends EnumAttributeMock<TControl, TAttribute, TValue>, TValue extends number | boolean> extends AttributeMock<TControl, TAttribute, TValue> implements Xrm.Attributes.EnumAttribute<TValue> {
    initialValue: TValue;
    constructor(components: IEnumAttributeComponents<TControl, TAttribute, TValue>);
    getInitialValue(): TValue;
}
export interface IEnumAttributeComponents<TControl extends StandardControlMock<TControl, TAttribute, TValue>, TAttribute extends EnumAttributeMock<TControl, TAttribute, TValue>, TValue extends number | boolean> extends IAttributeComponents<TControl, TAttribute, TValue> {
    initialValue?: TValue;
}
