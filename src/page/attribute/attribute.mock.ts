export class AttributeMock implements Xrm.Page.Attribute {
    controls: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    public isDirty: boolean;
    name: string;
    requiredLevel: Xrm.Page.RequirementLevel;
    submitMode: Xrm.Page.SubmitMode;
    value: any;
    attributeFormat: Xrm.Page.AttributeFormat;
    eventHandlers: Xrm.Page.ContextSensitiveHandler[] = [];

    public constructor(components: AttributeComponents) {
        this.name = components.name;
        this.value = components.value;
        this.isDirty = components.isDirty;
        this.requiredLevel = components.requiredLevel;
        this.submitMode = components.submitMode;
        this.controls = components.controls;
    }

    addOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
       this.eventHandlers.push(handler);
    }

    fireOnChange(): void {
        if (this.eventHandlers.length) {
            for (var i =0; i < this.eventHandlers.length; i++) {
                //TODO test - also potentially accepts context as first and only parameter
                (this.eventHandlers[i] as Function).call(this);
            }
        }
    }

    getAttributeType(): string {
        return typeof this.value;
    }

    getFormat(): Xrm.Page.AttributeFormat {
        return this.attributeFormat;
    }

    getIsDirty(): boolean {
        return this.isDirty;
    }

    getName(): string {
        return this.name;
    }

    getParent(): Xrm.Page.Entity {
        throw ('getParent not implemented');
    }

    getRequiredLevel(): Xrm.Page.RequirementLevel {
        return this.requiredLevel;
    }

    getSubmitMode(): Xrm.Page.SubmitMode {
        return this.submitMode;
    }

    getUserPrivilege(): Xrm.Page.Privilege {
        throw ('getUserPrivilege not implemented');
    }

    removeOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        throw ('removeOnChange not implemented');
    }

    setRequiredLevel(requirementLevel: Xrm.Page.RequirementLevel): void {
        this.requiredLevel = requirementLevel;
    }

    setSubmitMode(submitMode: Xrm.Page.SubmitMode): void {
        this.submitMode = submitMode;
    }

    getValue(): any {        
        return this.value;
    }

    setValue(value: any): void {        
        this.value = value;
        this.fireOnChange();
        this.isDirty = true;
    }
}

export interface AttributeComponents {
    name: string;
    value: any;
    isDirty?: boolean;
    requiredLevel?: Xrm.Page.RequirementLevel;
    submitMode?: Xrm.Page.SubmitMode;
    controls?: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
}