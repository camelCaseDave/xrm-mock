/// <reference types="xrm" />
import { ItemCollectionMock } from "../../collection/itemcollection/itemcollection.mock";
import { ControlMock } from "../../controls/control/control.mock";
export declare type AttributeReturnType = boolean | Date | number | Xrm.LookupValue[] | string;
export declare class AttributeMock<TControl extends ControlMock, TValue extends AttributeReturnType> implements Xrm.Attributes.Attribute {
    attributeType: Xrm.Attributes.AttributeType;
    controls: ItemCollectionMock<TControl>;
    isDirty: boolean;
    name: string;
    requiredLevel: Xrm.Attributes.RequirementLevel;
    submitMode: Xrm.SubmitMode;
    value: TValue;
    format: Xrm.Attributes.AttributeFormat;
    eventHandlers: Xrm.Events.ContextSensitiveHandler[];
    constructor(components: IAttributeComponents<TControl, TValue>);
    addOnChange(handler: Xrm.Events.ContextSensitiveHandler): void;
    fireOnChange(): void;
    getAttributeType(): Xrm.Attributes.AttributeType;
    getFormat(): Xrm.Attributes.AttributeFormat;
    getIsDirty(): boolean;
    getName(): string;
    getParent(): Xrm.Entity;
    getRequiredLevel(): Xrm.Attributes.RequirementLevel;
    getSubmitMode(): Xrm.SubmitMode;
    getUserPrivilege(): Xrm.Privilege;
    removeOnChange(handler: Xrm.Events.ContextSensitiveHandler): void;
    setRequiredLevel(requirementLevel: Xrm.Attributes.RequirementLevel): void;
    setSubmitMode(submitMode: Xrm.SubmitMode): void;
    getValue(): TValue;
    setValue(value: TValue): void;
    isValid(): boolean;
    setIsValid(valid: boolean, message: string): void;
}
export interface IAttributeComponents<T extends ControlMock, TValue extends AttributeReturnType> {
    attributeType?: Xrm.Attributes.AttributeType;
    controls?: ItemCollectionMock<T>;
    eventHandlers?: Xrm.Events.ContextSensitiveHandler[];
    format?: Xrm.Attributes.AttributeFormat;
    isDirty?: boolean;
    name: string;
    requiredLevel?: Xrm.Attributes.RequirementLevel;
    submitMode?: Xrm.SubmitMode;
    value?: TValue;
}
