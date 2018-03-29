/// <reference types="xrm" />
export declare class BooleanAttributeMock implements Xrm.Page.BooleanAttribute {
    controls: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    attribute: Xrm.Page.EnumAttribute;
    initialValue: boolean;
    constructor(attribute: Xrm.Page.EnumAttribute, controls?: Xrm.Collection.ItemCollection<Xrm.Page.Control>);
    getInitialValue(): boolean;
    getValue(): boolean;
    setValue(value: boolean): void;
    getFormat(): Xrm.Page.AttributeFormat;
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
