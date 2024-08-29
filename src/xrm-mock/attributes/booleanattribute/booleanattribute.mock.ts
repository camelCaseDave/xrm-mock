import { BooleanControlMock } from "../../controls/booleancontrol/booleancontrol.mock";
import { EnumAttributeMock, IEnumAttributeComponents } from "../enumattribute/enumattribute.mock";

export class BooleanAttributeMock extends EnumAttributeMock<BooleanControlMock, BooleanAttributeMock, boolean>
                                  implements Xrm.Attributes.BooleanAttribute {
    public static create(name: string, value: boolean = false): BooleanAttributeMock {
        return new BooleanAttributeMock({ name, value }  as any as IBooleanAttributeComponents);
    }

    private static defaultComponents(components: IBooleanAttributeComponents): IBooleanAttributeComponents {
        components.attributeType = "boolean";
        components.value = components.value === true;
        return components;
    }

    constructor(components: IBooleanAttributeComponents) {
        super(BooleanAttributeMock.defaultComponents(components));
    }

    /**
     * Gets the attribute format.
     * @returns the string "boolean"
     */
    getAttributeType(): "boolean" { return "boolean"; }
}

export interface IBooleanAttributeComponents extends IEnumAttributeComponents<BooleanControlMock, BooleanAttributeMock, boolean> {
}
