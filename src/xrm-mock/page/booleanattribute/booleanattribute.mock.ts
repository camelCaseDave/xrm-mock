import { ControlMock } from "./../control/control.mock";
import { EnumAttributeMock, IEnumAttributeComponents } from "./../enumattribute/enumattribute.mock";

export class BooleanAttributeMock extends EnumAttributeMock<ControlMock, boolean> implements Xrm.Page.BooleanAttribute {
    public static create(name: string, value: boolean = false): BooleanAttributeMock {
        return new BooleanAttributeMock({ name, value }  as any as IBooleanAttributeComponents);
    }

    constructor(components: IBooleanAttributeComponents) {
        super(components);
    }
}

export interface IBooleanAttributeComponents extends IEnumAttributeComponents<ControlMock, boolean> {
}
