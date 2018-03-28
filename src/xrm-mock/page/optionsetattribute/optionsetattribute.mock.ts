import { EnumAttributeMock } from "../enumattribute/enumattribute.mock";

export class OptionSetAttributeMock implements Xrm.Page.OptionSetAttribute {
    public controls: Xrm.Collection.ItemCollection<Xrm.Page.OptionSetControl>;
    public enumAttribute: EnumAttributeMock;
    public options: Xrm.Page.OptionSetValue[];
    public selectedOption: Xrm.Page.OptionSetValue;
    public optionSetAttributeFormat: Xrm.Page.OptionSetAttributeFormat;

    constructor(enumAttribute: EnumAttributeMock, options: Xrm.Page.OptionSetValue[],
                optionSetAttributeFormat: Xrm.Page.OptionSetAttributeFormat) {
        this.enumAttribute = enumAttribute;
        this.options = options;
        this.optionSetAttributeFormat = optionSetAttributeFormat;
        this.selectedOption = this.getOption(enumAttribute.getValue());
        this.enumAttribute.attribute.attributeFormat = optionSetAttributeFormat;
    }

    public getFormat(): Xrm.Page.OptionSetAttributeFormat {
        return this.enumAttribute.getFormat() as Xrm.Page.OptionSetAttributeFormat;
    }

    public getInitialValue(): number {
        return this.enumAttribute.getInitialValue() as number;
    }

    public getOption(param: number | string): Xrm.Page.OptionSetValue {
        if (typeof param === "string") {
            return this.options.filter((o) => o.text === param)[0];
        } else if (typeof param === "number") {
            return this.options.filter((o) => o.value === param)[0];
        }
    }

    public getOptions(): Xrm.Page.OptionSetValue[] {
        return this.options;
    }

    public getSelectedOption(): Xrm.Page.OptionSetValue {
        return this.selectedOption;
    }

    public getText(): string {
        return this.selectedOption.text;
    }

    public getValue(): number {
        return this.enumAttribute.getValue();
    }

    public setValue(value: number): void {
        this.enumAttribute.setValue(value);
        this.selectedOption = this.getOption(value);
    }

    public addOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.enumAttribute.addOnChange(handler);
    }

    public fireOnChange(): void {
        this.enumAttribute.fireOnChange();
    }

    public getAttributeType(): string {
        return this.enumAttribute.getAttributeType();
    }

    public getIsDirty(): boolean {
        return this.enumAttribute.getIsDirty();
    }

    public getName(): string {
        return this.enumAttribute.getName();
    }

    public getParent(): Xrm.Page.Entity {
        return this.enumAttribute.getParent();
    }

    public getRequiredLevel(): Xrm.Page.RequirementLevel {
        return this.enumAttribute.getRequiredLevel();
    }

    public getSubmitMode(): Xrm.Page.SubmitMode {
        return this.enumAttribute.getSubmitMode();
    }

    public getUserPrivilege(): Xrm.Page.Privilege {
        return this.enumAttribute.getUserPrivilege();
    }

    public removeOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.enumAttribute.removeOnChange(handler);
    }

    public setRequiredLevel(requirementLevel: Xrm.Page.RequirementLevel): void {
        this.enumAttribute.setRequiredLevel(requirementLevel);
    }

    public setSubmitMode(submitMode: Xrm.Page.SubmitMode): void {
        this.enumAttribute.setSubmitMode(submitMode);
    }
}
