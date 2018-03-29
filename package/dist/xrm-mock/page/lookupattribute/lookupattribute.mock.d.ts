/// <reference types="xrm" />
export declare class LookupAttributeMock implements Xrm.Page.Attribute {
    controls: Xrm.Collection.ItemCollection<Xrm.Page.LookupControl>;
    attribute: Xrm.Page.Attribute;
    isPartyList: boolean;
    constructor(attribute: Xrm.Page.Attribute, isPartyList: boolean, controls?: Xrm.Collection.ItemCollection<Xrm.Page.LookupControl>);
    getFormat(): Xrm.Page.AttributeFormat;
    getIsPartyList(): boolean;
    getValue(): Xrm.Page.LookupValue[];
    setValue(value: Xrm.Page.LookupValue[]): void;
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
