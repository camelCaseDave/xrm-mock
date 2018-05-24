import { ControlMock } from "../../controls/control/control.mock";
import { EnumAttributeMock, IEnumAttributeComponents } from "../enumattribute/enumattribute.mock";
export declare class BooleanAttributeMock extends EnumAttributeMock<ControlMock, boolean> implements Xrm.Attributes.BooleanAttribute {
    static create(name: string, value?: boolean): BooleanAttributeMock;
    private static defaultComponents(components);
    constructor(components: IBooleanAttributeComponents);
}
export interface IBooleanAttributeComponents extends IEnumAttributeComponents<ControlMock, boolean> {
}
