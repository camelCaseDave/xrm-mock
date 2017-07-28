import { EnumAttributeMock } from '../enumattribute/enumattribute.mock';

export class OptionSetAttributeMock implements Xrm.Page.OptionSetAttribute {
    controls: Xrm.Collection.ItemCollection<Xrm.Page.OptionSetControl>;
    enumAttribute: EnumAttributeMock;
    options: Xrm.Page.OptionSetValue[];
    selectedOption: Xrm.Page.OptionSetValue;
    optionSetAttributeFormat: Xrm.Page.OptionSetAttributeFormat;

    constructor(enumAttribute: EnumAttributeMock, options: Xrm.Page.OptionSetValue[], optionSetAttributeFormat: Xrm.Page.OptionSetAttributeFormat) {
        this.enumAttribute = enumAttribute;
        this.options = options;
        this.optionSetAttributeFormat = optionSetAttributeFormat;
        this.selectedOption = this.getOption(enumAttribute.getValue());
        this.enumAttribute.attribute.attributeFormat = optionSetAttributeFormat;
    }

    getFormat(): Xrm.Page.OptionSetAttributeFormat {
        return this.enumAttribute.getFormat() as Xrm.Page.OptionSetAttributeFormat;
    }

    getInitialValue(): number {
        return this.enumAttribute.getInitialValue() as number;
    }

    getOption(value: number): Xrm.Page.OptionSetValue;
    getOption(label: string): Xrm.Page.OptionSetValue;

    getOption(param: number | string): Xrm.Page.OptionSetValue {
        if (typeof param === 'string') {
            return this.options.filter((o) => { return o.text === param; })[0];
        }
        else if (typeof param === 'number') {
            return this.options.filter((o) => { return o.value === param; })[0];
        }
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
        return this.enumAttribute.getValue();
    }

    setValue(value: number): void {
        this.enumAttribute.setValue(value);
        this.selectedOption = this.getOption(value);
    }

    addOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.enumAttribute.addOnChange(handler);
    }

    fireOnChange(): void {
        this.enumAttribute.fireOnChange();
    }

    getAttributeType(): string {
        return this.enumAttribute.getAttributeType();
    }

    getIsDirty(): boolean {
        return this.enumAttribute.getIsDirty();
    }

    getName(): string {
        return this.enumAttribute.getName();
    }

    getParent(): Xrm.Page.Entity {
        return this.enumAttribute.getParent();
    }

    getRequiredLevel(): Xrm.Page.RequirementLevel {
        return this.enumAttribute.getRequiredLevel();
    }

    getSubmitMode(): Xrm.Page.SubmitMode {
        return this.enumAttribute.getSubmitMode();
    }

    getUserPrivilege(): Xrm.Page.Privilege {
        return this.enumAttribute.getUserPrivilege();
    }

    removeOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.enumAttribute.removeOnChange(handler);
    }

    setRequiredLevel(requirementLevel: Xrm.Page.RequirementLevel): void {
        this.enumAttribute.setRequiredLevel(requirementLevel);
    }

    setSubmitMode(submitMode: Xrm.Page.SubmitMode): void {
        this.enumAttribute.setSubmitMode(submitMode);
    }
}