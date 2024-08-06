/// <reference types="xrm" />
import { BooleanControlMock } from "../../controls/booleancontrol/booleancontrol.mock";
import { EnumAttributeMock, IEnumAttributeComponents } from "../enumattribute/enumattribute.mock";
export declare class BooleanAttributeMock extends EnumAttributeMock<BooleanControlMock, BooleanAttributeMock, boolean> implements Xrm.Attributes.BooleanAttribute {
    static create(name: string, value?: boolean): BooleanAttributeMock;
    private static defaultComponents;
    constructor(components: IBooleanAttributeComponents);
    /**
     * Gets the attribute format.
     * @returns the string "boolean"
     */
    getAttributeType(): "boolean";
}
export interface IBooleanAttributeComponents extends IEnumAttributeComponents<BooleanControlMock, BooleanAttributeMock, boolean> {
}
