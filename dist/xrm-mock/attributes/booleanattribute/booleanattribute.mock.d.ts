/// <reference types="xrm" />
import { BooleanControlMock } from "../../controls/booleancontrol/booleancontrol.mock";
import { EnumAttributeMock, IEnumAttributeComponents } from "../enumattribute/enumattribute.mock";
export declare class BooleanAttributeMock extends EnumAttributeMock<BooleanControlMock, boolean> implements Xrm.Attributes.BooleanAttribute {
    static create(name: string, value?: boolean): BooleanAttributeMock;
    private static defaultComponents;
    constructor(components: IBooleanAttributeComponents);
}
export interface IBooleanAttributeComponents extends IEnumAttributeComponents<BooleanControlMock, boolean> {
}
