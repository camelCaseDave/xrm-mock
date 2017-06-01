/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

class NumberAttributeMock implements Xrm.Page.NumberAttribute {
    min: number;
    max: number;
    precision: number;
    controls: Xrm.Collection.ItemCollection<Xrm.Page.NumberControl>
    integerAttributeFormat: Xrm.Page.IntegerAttributeFormat;
    attribute: Xrm.Page.Attribute;

    constructor(attribute: Xrm.Page.Attribute, controls?: Xrm.Collection.ItemCollection<Xrm.Page.NumberControl>, integerAttributeFormat?: Xrm.Page.IntegerAttributeFormat,
        min?: number, max?: number, precision?: number) {
        this.attribute = attribute;
        this.controls = controls;
        this.integerAttributeFormat = integerAttributeFormat;
        this.min = min;
        this.max = max;
        this.precision = precision;
    }

    getFormat(): Xrm.Page.IntegerAttributeFormat {
        return this.integerAttributeFormat;
    }

    getMax(): number {
        return this.max;
    }

    getMin(): number {
        return this.min;
    }

    getPrecision(): number {
        return this.precision;
    }

    getValue(): number {
        return this.attribute.getValue();
    }

    setValue(value: number): void {
        if (this.min !== null && this.min > value)
            throw ('value cannot be below the min of ' + this.min);

        else if (this.max && this.max < value)
            throw ('value cannot be above the max of ' + this.max);

        else
            this.attribute.setValue(value);
    }

    addOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.attribute.addOnChange(handler);
    }

    fireOnChange(): void {
        this.attribute.fireOnChange();
    }

    getAttributeType(): string {
        return this.attribute.getAttributeType();
    }

    getIsDirty(): boolean {
        return this.attribute.getIsDirty();
    }

    getName(): string {
        return this.attribute.getName();
    }


    getParent(): Xrm.Page.Entity {
        return this.attribute.getParent();
    }

    getRequiredLevel(): Xrm.Page.RequirementLevel {
        return this.attribute.getRequiredLevel();
    }

    getSubmitMode(): Xrm.Page.SubmitMode {
        return this.attribute.getSubmitMode();
    }

    getUserPrivilege(): Xrm.Page.Privilege {
        return this.attribute.getUserPrivilege();
    }

    removeOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.attribute.removeOnChange(handler);
    }

    setRequiredLevel(requirementLevel: Xrm.Page.RequirementLevel): void {
        this.attribute.setRequiredLevel(requirementLevel);
    }

    setSubmitMode(submitMode: Xrm.Page.SubmitMode): void {
        this.attribute.setSubmitMode(submitMode);
    }
}