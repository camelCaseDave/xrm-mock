import { ItemCollectionMock } from "../../collection/itemcollection/itemcollection.mock";
import { ControlMock } from "../control/control.mock";

export type AttributeReturnType = boolean | Date | number | Xrm.Page.LookupValue[] | string;

export class AttributeMock<TControl extends ControlMock,
                           TValue extends AttributeReturnType>
                           implements Xrm.Page.Attribute {
    public attributeType: Xrm.Attributes.AttributeType;
    public controls: ItemCollectionMock<TControl>;
    public isDirty: boolean;
    public name: string;
    public requiredLevel: Xrm.Page.RequirementLevel;
    public submitMode: Xrm.Page.SubmitMode;
    public value: TValue;
    public format: Xrm.Page.AttributeFormat;
    public eventHandlers: Xrm.Page.ContextSensitiveHandler[];

    public constructor(components: IAttributeComponents<TControl, TValue>) {
        this.attributeType = components.attributeType || "string";
        this.format = components.format;
        this.name = components.name;
        this.value = components.value;
        this.isDirty = components.isDirty === true ? true : false;
        this.requiredLevel = components.requiredLevel || "none";
        this.submitMode = components.submitMode || "dirty";
        this.controls = components.controls || new ItemCollectionMock<TControl>();
        this.eventHandlers = components.eventHandlers || [] as Xrm.Page.ContextSensitiveHandler[];
    }

    public addOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
       this.eventHandlers.push(handler);
    }

    public fireOnChange(): void {
        if (this.eventHandlers.length) {
            for (const handler of this.eventHandlers) {
                handler.call(this);
            }
        }
    }

    public getAttributeType(): Xrm.Page.AttributeType {
        return this.attributeType;
    }

    public getFormat(): Xrm.Page.AttributeFormat {
        return this.format;
    }

    public getIsDirty(): boolean {
        return this.isDirty;
    }

    public getName(): string {
        return this.name;
    }

    public getParent(): Xrm.Page.Entity {
        throw new Error("getParent not implemented");
    }

    public getRequiredLevel(): Xrm.Page.RequirementLevel {
        return this.requiredLevel;
    }

    public getSubmitMode(): Xrm.Page.SubmitMode {
        return this.submitMode;
    }

    public getUserPrivilege(): Xrm.Page.Privilege {
        throw new Error("getUserPrivilege not implemented");
    }

    public removeOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        throw new Error("removeOnChange not implemented");
    }

    public setRequiredLevel(requirementLevel: Xrm.Page.RequirementLevel): void {
        this.requiredLevel = requirementLevel;
    }

    public setSubmitMode(submitMode: Xrm.Page.SubmitMode): void {
        this.submitMode = submitMode;
    }

    public getValue(): TValue {
        return this.value;
    }

    public setValue(value: TValue): void {
        this.value = value;
        this.isDirty = true;
    }
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
