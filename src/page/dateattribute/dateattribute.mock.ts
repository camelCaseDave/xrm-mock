export class DateAttributeMock implements Xrm.Page.Attribute {
    controls: Xrm.Collection.ItemCollection<Xrm.Page.DateControl>;
    attribute: Xrm.Page.Attribute;
    dateAttributeFormat: Xrm.Page.DateAttributeFormat;

    constructor(attribute: Xrm.Page.Attribute, dateAttributeFormat: Xrm.Page.DateAttributeFormat, controls?: Xrm.Collection.ItemCollection<Xrm.Page.DateControl>) {
        this.attribute = attribute;
        this.dateAttributeFormat = dateAttributeFormat;
        this.controls = controls;
    }

    getFormat(): Xrm.Page.DateAttributeFormat {
        return this.dateAttributeFormat;
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