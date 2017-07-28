/// <reference types="xrm" />
import { AttributeMock } from './../attribute/attribute.mock';
export declare class StringAttributeMock implements Xrm.Page.StringAttribute {
    controls: Xrm.Collection.ItemCollection<Xrm.Page.StringControl>;
    stringAttributeFormat: Xrm.Page.StringAttributeFormat;
    maxLength: number;
    attribute: AttributeMock;
    constructor(attribute: AttributeMock, stringAttributeFormat: Xrm.Page.StringAttributeFormat, maxLength: number, controls?: Xrm.Collection.ItemCollection<Xrm.Page.StringControl>);
    getFormat(): Xrm.Page.StringAttributeFormat;
    getMaxLength(): number;
    getValue(): string;
    setValue(value: string): void;
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
