import { ItemCollectionMock } from "../../collection/itemcollection/itemcollection.mock";
import { ControlMock } from "../control/control.mock";

export type AttributeReturnType = boolean | Date | number | Xrm.Page.LookupValue[] | Xrm.Page.OptionSetValue | string;

export class AttributeMock<TControl extends ControlMock,
                           TValue extends AttributeReturnType>
                           implements Xrm.Page.Attribute {
    public controls: ItemCollectionMock<TControl>;
    public isDirty: boolean;
    public name: string;
    public requiredLevel: Xrm.Page.RequirementLevel;
    public submitMode: Xrm.Page.SubmitMode;
    public value: TValue;
    public attributeFormat: Xrm.Page.AttributeFormat;
    public eventHandlers: Xrm.Page.ContextSensitiveHandler[] = [];

    public constructor(components: IAttributeComponents<TControl, TValue>) {
        this.name = components.name;
        this.value = components.value;
        this.isDirty = components.isDirty === true ? true : false;
        this.requiredLevel = components.requiredLevel || "none";
        this.submitMode = components.submitMode || "dirty";
        this.controls = components.controls || new ItemCollectionMock<TControl>();
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

    public getAttributeType(): string {
        return typeof this.value;
    }

    public getFormat(): Xrm.Page.AttributeFormat {
        return this.attributeFormat;
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
    name: string;
    value?: TValue;
    isDirty?: boolean;
    requiredLevel?: Xrm.Page.RequirementLevel;
    submitMode?: Xrm.Page.SubmitMode;
    controls?: ItemCollectionMock<T>;
}
