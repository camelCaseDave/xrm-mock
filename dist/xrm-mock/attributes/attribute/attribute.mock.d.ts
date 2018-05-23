/// <reference types="xrm" />
import { ItemCollectionMock } from "../../collection/itemcollection/itemcollection.mock";
import { ControlMock } from "../../page/control/control.mock";
export declare type AttributeReturnType = boolean | Date | number | Xrm.Page.LookupValue[] | string;
export declare class AttributeMock<TControl extends ControlMock, TValue extends AttributeReturnType> implements Xrm.Page.Attribute {
    attributeType: Xrm.Attributes.AttributeType;
    controls: ItemCollectionMock<TControl>;
    isDirty: boolean;
    name: string;
    requiredLevel: Xrm.Page.RequirementLevel;
    submitMode: Xrm.Page.SubmitMode;
    value: TValue;
    format: Xrm.Page.AttributeFormat;
    eventHandlers: Xrm.Page.ContextSensitiveHandler[];
    constructor(components: IAttributeComponents<TControl, TValue>);
    addOnChange(handler: Xrm.Page.ContextSensitiveHandler): void;
    fireOnChange(): void;
    getAttributeType(): Xrm.Page.AttributeType;
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
    getValue(): TValue;
    setValue(value: TValue): void;
}
export interface IAttributeComponents<T extends ControlMock, TValue extends AttributeReturnType> {
    attributeType?: Xrm.Attributes.AttributeType;
    controls?: ItemCollectionMock<T>;
    eventHandlers?: Xrm.Page.ContextSensitiveHandler[];
    format?: Xrm.Page.AttributeFormat;
    isDirty?: boolean;
    name: string;
    requiredLevel?: Xrm.Page.RequirementLevel;
    submitMode?: Xrm.Page.SubmitMode;
    value?: TValue;
}
