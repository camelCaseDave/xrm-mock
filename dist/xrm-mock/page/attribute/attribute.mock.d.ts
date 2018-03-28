/// <reference types="xrm" />
export declare class AttributeMock implements Xrm.Page.Attribute {
    controls: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    isDirty: boolean;
    name: string;
    requiredLevel: Xrm.Page.RequirementLevel;
    submitMode: Xrm.Page.SubmitMode;
    value: any;
    attributeFormat: Xrm.Page.AttributeFormat;
    eventHandlers: Xrm.Page.ContextSensitiveHandler[];
    constructor(components: IAttributeComponents);
    addOnChange(handler: Xrm.Page.ContextSensitiveHandler): void;
    fireOnChange(): void;
    getAttributeType(): string;
    getFormat(): Xrm.Page.AttributeFormat;
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
export interface IAttributeComponents {
    name: string;
    value: any;
    isDirty?: boolean;
    requiredLevel?: Xrm.Page.RequirementLevel;
    submitMode?: Xrm.Page.SubmitMode;
    controls?: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
}
