export class StringAttributeMock implements Xrm.Page.StringAttribute {
    controls: Xrm.Collection.ItemCollection<Xrm.Page.StringControl>;
    stringAttributeFormat: Xrm.Page.StringAttributeFormat;
    maxLength: number;
    attribute: Xrm.Page.Attribute;

    constructor(attribute: Xrm.Page.Attribute, stringAttributeFormat: Xrm.Page.StringAttributeFormat, maxLength: number, controls?: Xrm.Collection.ItemCollection<Xrm.Page.StringControl>) {
        this.attribute = attribute;
        this.stringAttributeFormat = stringAttributeFormat;
        this.maxLength = maxLength;
        this.controls = controls;
    }

    getFormat(): Xrm.Page.StringAttributeFormat {
        return this.stringAttributeFormat;
    }

    getMaxLength(): number {
        return this.maxLength;
    }

    getValue(): string {
        return this.attribute.getValue();
    }

    setValue(value: string): void {
        if (this.maxLength && value.length > this.maxLength)
            throw ('value cannot be greater than ' + this.maxLength);
        else
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