/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

class OptionSetAttributeMock implements Xrm.Page.OptionSetAttribute {
    controls: Xrm.Collection.ItemCollection<Xrm.Page.OptionSetControl>;
    attribute: Xrm.Page.EnumAttribute;
    options: Xrm.Page.OptionSetValue[];
    selectedOption: Xrm.Page.OptionSetValue;
    optionSetAttributeFormat: Xrm.Page.OptionSetAttributeFormat;

    constructor(attribute: Xrm.Page.EnumAttribute, options: Xrm.Page.OptionSetValue[], optionSetAttributeFormat: Xrm.Page.OptionSetAttributeFormat) {
        this.attribute = attribute;
        this.options = options;
        this.optionSetAttributeFormat = optionSetAttributeFormat;
        this.selectedOption = this.getOption(attribute.getValue());
    }

    getFormat(): Xrm.Page.OptionSetAttributeFormat {
        return this.optionSetAttributeFormat;
    }

    getInitialValue(): number {
        return this.attribute.getInitialValue() as number;
    }

    getOption(value: number): Xrm.Page.OptionSetValue;
    getOption(label: string): Xrm.Page.OptionSetValue;

    getOption(param: number | string): Xrm.Page.OptionSetValue {
        if (typeof param === 'string')
            return this.options.filter((o) => { return o.text === param; })[0];
        else if (typeof param === 'number')
            return this.options.filter((o) => { return o.value === param; })[0];
    }

    getOptions(): Xrm.Page.OptionSetValue[] {
        return this.options;
    }

    getSelectedOption(): Xrm.Page.OptionSetValue {
        return this.selectedOption;
    }

    getText(): string {
        return this.selectedOption.text;
    }

    getValue(): number {
        return this.attribute.getValue();
    }

    setValue(value: number): void {
        this.attribute.setValue(value);
        this.selectedOption = this.getOption(value);
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