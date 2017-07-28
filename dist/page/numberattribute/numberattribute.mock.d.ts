/// <reference types="xrm" />
import { AttributeMock } from '../attribute/attribute.mock';
export declare class NumberAttributeMock implements Xrm.Page.NumberAttribute {
    min: number;
    max: number;
    precision: number;
    controls: Xrm.Collection.ItemCollection<Xrm.Page.NumberControl>;
    integerAttributeFormat: Xrm.Page.IntegerAttributeFormat;
    attribute: AttributeMock;
    constructor(attribute: AttributeMock, controls?: Xrm.Collection.ItemCollection<Xrm.Page.NumberControl>, integerAttributeFormat?: Xrm.Page.IntegerAttributeFormat, min?: number, max?: number, precision?: number);
    getFormat(): Xrm.Page.IntegerAttributeFormat;
    getMax(): number;
    getMin(): number;
    getPrecision(): number;
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
