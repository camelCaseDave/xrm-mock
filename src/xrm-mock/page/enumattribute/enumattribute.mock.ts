import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";
import { ControlMock } from "../control/control.mock";

export class EnumAttributeMock<TControl extends ControlMock,
                               TValue extends number | boolean>
                               extends AttributeMock<TControl, TValue> implements Xrm.Page.EnumAttribute {
    public initialValue: TValue;

    constructor(components: IEnumAttributeComponents<TControl, TValue>) {
        super(components);
        this.initialValue = "initialValue" in components
            ? components.initialValue
            : components.value;
    }

    public getInitialValue(): TValue {
        return this.initialValue;
    }
}

export interface IEnumAttributeComponents<TControl extends ControlMock,
                                          TValue extends number | boolean>
                                          extends IAttributeComponents<TControl, TValue> {
    initialValue?: TValue;
}
