import { AttributeMock } from './../attribute/attribute.mock';

export class DateAttributeMock implements Xrm.Page.Attribute {
    controls: Xrm.Collection.ItemCollection<Xrm.Page.DateControl>;
    attribute: AttributeMock
    dateAttributeFormat: Xrm.Page.DateAttributeFormat;

    constructor(components: DateAttributeComponents) {
        this.attribute = components.attribute;
        this.dateAttributeFormat = components.dateAttributeFormat;
        this.controls = components.controls;
        this.attribute.attributeFormat = components.dateAttributeFormat;
    }

    getFormat(): Xrm.Page.DateAttributeFormat {
        return this.attribute.getFormat() as Xrm.Page.DateAttributeFormat;
    }

    getValue(): Date {
        return this.attribute.getValue() as Date;
    }

    setValue(value: Date): void {
        this.attribute.setValue(value);
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
}

export interface DateAttributeComponents {
    attribute: AttributeMock;
    dateAttributeFormat: Xrm.Page.DateAttributeFormat;
    controls?: Xrm.Collection.ItemCollection<Xrm.Page.DateControl>;
}