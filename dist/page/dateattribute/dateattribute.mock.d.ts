/// <reference types="xrm" />
import { AttributeMock } from './../attribute/attribute.mock';
export declare class DateAttributeMock implements Xrm.Page.Attribute {
    controls: Xrm.Collection.ItemCollection<Xrm.Page.DateControl>;
    attribute: AttributeMock;
    dateAttributeFormat: Xrm.Page.DateAttributeFormat;
    constructor(components: DateAttributeComponents);
    getFormat(): Xrm.Page.DateAttributeFormat;
    getValue(): Date;
    setValue(value: Date): void;
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
export interface DateAttributeComponents {
    attribute: AttributeMock;
    dateAttributeFormat: Xrm.Page.DateAttributeFormat;
    controls?: Xrm.Collection.ItemCollection<Xrm.Page.DateControl>;
}
