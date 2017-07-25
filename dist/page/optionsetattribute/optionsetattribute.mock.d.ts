/// <reference types="xrm" />
export declare class OptionSetAttributeMock implements Xrm.Page.OptionSetAttribute {
    controls: Xrm.Collection.ItemCollection<Xrm.Page.OptionSetControl>;
    attribute: Xrm.Page.EnumAttribute;
    options: Xrm.Page.OptionSetValue[];
    selectedOption: Xrm.Page.OptionSetValue;
    optionSetAttributeFormat: Xrm.Page.OptionSetAttributeFormat;
    constructor(attribute: Xrm.Page.EnumAttribute, options: Xrm.Page.OptionSetValue[], optionSetAttributeFormat: Xrm.Page.OptionSetAttributeFormat);
    getFormat(): Xrm.Page.OptionSetAttributeFormat;
    getInitialValue(): number;
    getOption(value: number): Xrm.Page.OptionSetValue;
    getOption(label: string): Xrm.Page.OptionSetValue;
    getOptions(): Xrm.Page.OptionSetValue[];
    getSelectedOption(): Xrm.Page.OptionSetValue;
    getText(): string;
    getValue(): number;
    setValue(value: number): void;
    addOnChange(handler: Xrm.Page.ContextSensitiveHandler): void;
    fireOnChange(): void;
    getAttributeType(): string;
    getIsDirty(): boolean;
    getName(): string;
    getParent(): Xrm.Page.Entity;
    getRequiredLevel(): Xrm.Page.RequirementLevel;
    getSubmitMode(): Xrm.Page.SubmitMode;
    getUserPrivilege(): Xrm.Page.Privilege;
    removeOnChange(handler: Xrm.Page.ContextSensitiveHandler): void;
    setRequiredLevel(requirementLevel: Xrm.Page.RequirementLevel): void;
    setSubmitMode(submitMode: Xrm.Page.SubmitMode): void;
}
