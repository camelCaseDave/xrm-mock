/// <reference types="xrm" />
export declare class EnumAttributeMock implements Xrm.Page.EnumAttribute {
    controls: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    initialValue: number | boolean;
    attribute: Xrm.Page.Attribute;
    constructor(attribute: Xrm.Page.Attribute, controls?: Xrm.Collection.ItemCollection<Xrm.Page.Control>);
    getInitialValue(): number | boolean;
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
    getValue(): any;
    setValue(value: any): void;
}
