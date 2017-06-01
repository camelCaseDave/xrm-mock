/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

class AttributeMock implements Xrm.Page.Attribute {    
    controls: Xrm.Collection.ItemCollection<Xrm.Page.Control>;

    isDirty: boolean;
    name: string;
    requiredLevel: Xrm.Page.RequirementLevel;
    submitMode: Xrm.Page.SubmitMode;
    value: any;

    constructor(name: string, value: any, isDirty?: boolean, requiredLevel?: Xrm.Page.RequirementLevel, submitMode?: Xrm.Page.SubmitMode, controls?: Xrm.Collection.ItemCollection<Xrm.Page.Control>) {
        this.name = name;
        this.value = value;
        this.isDirty = isDirty;
        this.requiredLevel = requiredLevel;
        this.submitMode = submitMode;
        this.controls = controls;
    }

    addOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        throw ('addOnChange not implemented');
    }
    
    fireOnChange(): void {
        throw ('fireOnChange not implemented');
    }

    getAttributeType(): string {
        return typeof this.value;
    }

    getFormat(): Xrm.Page.AttributeFormat {
        throw ('getFormat not implemented');
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
        this.isDirty = true;
    }
}