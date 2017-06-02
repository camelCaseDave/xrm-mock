/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

class EnumAttributeMock implements Xrm.Page.EnumAttribute {
    controls: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    initialValue: number | boolean;
    attribute: Xrm.Page.Attribute;

    constructor(attribute: Xrm.Page.Attribute, controls?: Xrm.Collection.ItemCollection<Xrm.Page.Control>) {
        this.attribute = attribute;
        this.initialValue = attribute.getValue();
    }

    getInitialValue(): number | boolean {
        return this.initialValue;
    }

    getFormat(): Xrm.Page.AttributeFormat {
        return this.attribute.getFormat();
    }

   addOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.attribute.addOnChange(handler);
    }

    fireOnChange(): void {
        this.attribute.fireOnChange();
    }

    getAttributeType(): string {
        return this.attribute.getAttributeType();
    }

    getIsDirty(): boolean {
        return this.attribute.getIsDirty();
    }

    getName(): string {
        return this.attribute.getName();
    }

    getParent(): Xrm.Page.Entity {
        return this.attribute.getParent();
    }

    getRequiredLevel(): Xrm.Page.RequirementLevel {
        return this.attribute.getRequiredLevel();
    }

    getSubmitMode(): Xrm.Page.SubmitMode {
        return this.attribute.getSubmitMode();
    }

    getUserPrivilege(): Xrm.Page.Privilege {
        return this.attribute.getUserPrivilege();
    }

    removeOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.attribute.removeOnChange(handler);
    }

    setRequiredLevel(requirementLevel: Xrm.Page.RequirementLevel): void {
        this.attribute.setRequiredLevel(requirementLevel);
    }

    setSubmitMode(submitMode: Xrm.Page.SubmitMode): void {
        this.attribute.setSubmitMode(submitMode);
    }  

    getValue(): any {
        return this.attribute.getValue();
    }

    setValue(value: any): void {
        this.attribute.setValue(value);
    }
}