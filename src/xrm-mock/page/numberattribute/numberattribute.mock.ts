import { AttributeMock } from "../attribute/attribute.mock";

export class NumberAttributeMock implements Xrm.Page.NumberAttribute {
    public min: number;
    public max: number;
    public precision: number;
    public controls: Xrm.Collection.ItemCollection<Xrm.Page.NumberControl>;
    public integerAttributeFormat: Xrm.Page.IntegerAttributeFormat;
    public attribute: AttributeMock;

    constructor(attribute: AttributeMock, controls?: Xrm.Collection.ItemCollection<Xrm.Page.NumberControl>,
                integerAttributeFormat?: Xrm.Page.IntegerAttributeFormat,
                min?: number, max?: number, precision?: number) {
        this.attribute = attribute;
        this.controls = controls;
        this.integerAttributeFormat = integerAttributeFormat;
        this.min = min;
        this.max = max;
        this.precision = precision;
        this.attribute.attributeFormat = integerAttributeFormat;
    }

    public getFormat(): Xrm.Page.IntegerAttributeFormat {
        return this.attribute.getFormat() as Xrm.Page.IntegerAttributeFormat;
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

    public getValue(): number {
        return this.attribute.getValue();
    }

    public setValue(value: number): void {
        if (this.min !== null && this.min > value) {
            throw new Error(("value cannot be below the min of " + this.min));
        } else if (this.max && this.max < value) {
            throw new Error(("value cannot be above the max of " + this.max));
             } else {
            this.attribute.setValue(value);
             }
    }

    public addOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.attribute.addOnChange(handler);
    }

    public fireOnChange(): void {
        this.attribute.fireOnChange();
    }

    public getAttributeType(): string {
        return this.attribute.getAttributeType();
    }

    public getIsDirty(): boolean {
        return this.attribute.getIsDirty();
    }

    public getName(): string {
        return this.attribute.getName();
    }

    public getParent(): Xrm.Page.Entity {
        return this.attribute.getParent();
    }

    public getRequiredLevel(): Xrm.Page.RequirementLevel {
        return this.attribute.getRequiredLevel();
    }

    public getSubmitMode(): Xrm.Page.SubmitMode {
        return this.attribute.getSubmitMode();
    }

    public getUserPrivilege(): Xrm.Page.Privilege {
        return this.attribute.getUserPrivilege();
    }

    public removeOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.attribute.removeOnChange(handler);
    }

    public setRequiredLevel(requirementLevel: Xrm.Page.RequirementLevel): void {
        this.attribute.setRequiredLevel(requirementLevel);
    }

    public setSubmitMode(submitMode: Xrm.Page.SubmitMode): void {
        this.attribute.setSubmitMode(submitMode);
    }
}
