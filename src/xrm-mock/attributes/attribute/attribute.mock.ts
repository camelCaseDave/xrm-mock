import { findIndex } from "../../../xrm-mock-generator/helpers/array.helper";
import { XrmMockGenerator } from "../../../xrm-mock-generator/xrm-mock-generator";
import { ItemCollectionMock } from "../../collection/itemcollection/itemcollection.mock";
import { ControlMock } from "../../controls/control/control.mock";
import { EventContextMock } from "../../events/eventcontext/eventcontext.mock";

export type AttributeReturnType = boolean | Date | number | Xrm.LookupValue[] | string;

export class AttributeMock<TControl extends ControlMock,
    TValue extends AttributeReturnType>
    implements Xrm.Attributes.Attribute {
    public attributeType: Xrm.Attributes.AttributeType;
    public controls: ItemCollectionMock<TControl>;
    public isDirty: boolean;
    public name: string;
    public requiredLevel: Xrm.Attributes.RequirementLevel;
    public submitMode: Xrm.SubmitMode;
    public value: TValue;
    public format: Xrm.Attributes.AttributeFormat;
    public eventHandlers: Xrm.Events.ContextSensitiveHandler[];

    public constructor(components: IAttributeComponents<TControl, TValue>) {
        this.attributeType = components.attributeType || "string";
        this.format = components.format;
        this.name = components.name;
        this.value = components.value;
        this.isDirty = components.isDirty === true ? true : false;
        this.requiredLevel = components.requiredLevel || "none";
        this.submitMode = components.submitMode || "dirty";
        this.controls = components.controls || new ItemCollectionMock<TControl>();
        this.eventHandlers = components.eventHandlers || [] as Xrm.Events.ContextSensitiveHandler[];
    }

    public addOnChange(handler: Xrm.Events.ContextSensitiveHandler): void {
        this.eventHandlers.push(handler);
    }

    public fireOnChange(): void {
        if (this.eventHandlers.length) {
            const globalContext = XrmMockGenerator.getEventContext();
            const context = new EventContextMock({
                ...globalContext,
                depth: globalContext.depth ? globalContext.depth + 1 : 1,
                eventSource: this,
            });
            for (const handler of this.eventHandlers) {
                handler.call(this, context);
            }
        }
    }

    public getAttributeType(): Xrm.Attributes.AttributeType {
        return this.attributeType;
    }

    public getFormat(): Xrm.Attributes.AttributeFormat {
        return this.format;
    }

    public getIsDirty(): boolean {
        return this.isDirty;
    }

    public getName(): string {
        return this.name;
    }

    public getParent(): Xrm.Entity {
        throw new Error("getParent not implemented");
    }

    public getRequiredLevel(): Xrm.Attributes.RequirementLevel {
        return this.requiredLevel;
    }

    public getSubmitMode(): Xrm.SubmitMode {
        return this.submitMode;
    }

    public getUserPrivilege(): Xrm.Privilege {
        throw new Error("getUserPrivilege not implemented");
    }

    public removeOnChange(handler: Xrm.Events.ContextSensitiveHandler): void {
        const index: number = findIndex(this.eventHandlers, handler);
        this.eventHandlers.splice(index, 1);
    }

    public setRequiredLevel(requirementLevel: Xrm.Attributes.RequirementLevel): void {
        this.requiredLevel = requirementLevel;
    }

    public setSubmitMode(submitMode: Xrm.SubmitMode): void {
        this.submitMode = submitMode;
    }

    public getValue(): TValue {
        return this.value;
    }

    public setValue(value: TValue): void {
        this.value = value;
        this.isDirty = true;
    }

    public isValid(): boolean {
        throw new Error("isValid not implemented");
    }

    public setIsValid(valid: boolean, message: string): void {
        throw new Error("setIsValid not implemented");
    }
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
