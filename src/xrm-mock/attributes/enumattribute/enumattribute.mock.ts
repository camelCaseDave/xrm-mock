import { StandardControlMock } from "../../controls/standardcontrol/standardcontrol.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";

export class EnumAttributeMock<TControl extends StandardControlMock<TControl, TAttribute, TValue>,
                               TAttribute extends EnumAttributeMock<TControl, TAttribute, TValue>,
                               TValue extends number | boolean>
                               extends AttributeMock<TControl, TAttribute, TValue> implements Xrm.Attributes.EnumAttribute<TValue> {
    public initialValue: TValue;

    constructor(components: IEnumAttributeComponents<TControl, TAttribute, TValue>) {
        super(components);
        this.initialValue = "initialValue" in components
            ? components.initialValue
            : components.value;
    }

    public getInitialValue(): TValue {
        return this.initialValue;
    }
}

export interface IEnumAttributeComponents<
        TControl extends StandardControlMock<TControl, TAttribute, TValue>,
        TAttribute extends EnumAttributeMock<TControl, TAttribute, TValue>,
        TValue extends number | boolean>
        extends IAttributeComponents<TControl, TAttribute, TValue> {
    initialValue?: TValue;
}
