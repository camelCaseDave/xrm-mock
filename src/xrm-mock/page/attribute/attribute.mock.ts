export class AttributeMock implements Xrm.Page.Attribute {
    public controls: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    public isDirty: boolean;
    public name: string;
    public requiredLevel: Xrm.Page.RequirementLevel;
    public submitMode: Xrm.Page.SubmitMode;
    public value: any;
    public attributeFormat: Xrm.Page.AttributeFormat;
    public eventHandlers: Xrm.Page.ContextSensitiveHandler[] = [];

    public constructor(components: IAttributeComponents) {
        this.name = components.name;
        this.value = components.value;
        this.isDirty = components.isDirty;
        this.requiredLevel = components.requiredLevel;
        this.submitMode = components.submitMode;
        this.controls = components.controls;
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
        throw new Error(("getParent not implemented"));
    }

    public getRequiredLevel(): Xrm.Page.RequirementLevel {
        return this.requiredLevel;
    }

    public getSubmitMode(): Xrm.Page.SubmitMode {
        return this.submitMode;
    }

    public getUserPrivilege(): Xrm.Page.Privilege {
        throw new Error(("getUserPrivilege not implemented"));
    }

    public removeOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        throw new Error(("removeOnChange not implemented"));
    }

    public setRequiredLevel(requirementLevel: Xrm.Page.RequirementLevel): void {
        this.requiredLevel = requirementLevel;
    }

    public setSubmitMode(submitMode: Xrm.Page.SubmitMode): void {
        this.submitMode = submitMode;
    }

    public getValue(): any {
        return this.value;
    }

    public setValue(value: any): void {
        this.value = value;
        this.fireOnChange();
        this.isDirty = true;
    }
}

export interface IAttributeComponents {
    name: string;
    value: any;
    isDirty?: boolean;
    requiredLevel?: Xrm.Page.RequirementLevel;
    submitMode?: Xrm.Page.SubmitMode;
    controls?: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
}
