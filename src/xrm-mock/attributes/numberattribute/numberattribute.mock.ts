import { ControlMock } from "../../page/control/control.mock";
import { NumberControlMock } from "../../page/numbercontrol/numbercontrol.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";

export class NumberAttributeMock extends AttributeMock<NumberControlMock, number>
                                 implements Xrm.Page.NumberAttribute {

    private static defaultComponents(components: INumberAttributeComponents): INumberAttributeComponents {
        components.format = components.format || "none";
        components.precision = components.precision || 0;
        if (!components.attributeType) {
            components.attributeType = "decimal";
        }
        return components;
    }

    public min: number;
    public max: number;
    public precision: number;

    constructor(components: INumberAttributeComponents) {
        super(NumberAttributeMock.defaultComponents(components));
        this.min = components.min;
        this.max = components.max;
        this.precision = components.precision;
        this.validatePrecision();
    }

    public getFormat(): Xrm.Page.IntegerAttributeFormat {
        return super.getFormat() as Xrm.Page.IntegerAttributeFormat;
    }

    public getMax(): number {
        return this.max;
    }

    public getMin(): number {
        return this.min;
    }

    public getPrecision(): number {
        return this.precision;
    }

    public setValue(value: number): void {
        if ((this.min || this.min === 0) && this.min > value) {
            throw new Error(("value cannot be below the min of " + this.min));
        } else if ((this.max || this.max === 0) && this.max < value) {
            throw new Error(("value cannot be above the max of " + this.max));
        } else {
            super.setValue(value);
        }
    }

    private validatePrecision(): void {
        if (this.precision > 4) {
            throw new Error((`precision cannot be greater than 4, but was ${this.precision}`));
        } else if (this.precision < 0) {
            throw new Error((`precision cannot be less than 0, but was ${this.precision}`));
        }
    }
}

export interface INumberAttributeComponents extends IAttributeComponents<NumberControlMock, number> {
    min?: number;
    max?: number;
    precision?: number;
    format?: Xrm.Page.IntegerAttributeFormat;
}
