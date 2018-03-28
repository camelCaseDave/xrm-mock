import { AttributeMock } from "./../attribute/attribute.mock";

export class StringAttributeMock implements Xrm.Page.StringAttribute {
    public controls: Xrm.Collection.ItemCollection<Xrm.Page.StringControl>;
    public stringAttributeFormat: Xrm.Page.StringAttributeFormat;
    public maxLength: number;
    public attribute: AttributeMock;

    constructor(attribute: AttributeMock, stringAttributeFormat: Xrm.Page.StringAttributeFormat,
                maxLength: number, controls?: Xrm.Collection.ItemCollection<Xrm.Page.StringControl>) {
        this.attribute = attribute;
        this.stringAttributeFormat = stringAttributeFormat;
        this.maxLength = maxLength;
        this.controls = controls;
        attribute.attributeFormat = stringAttributeFormat;
    }

    public getFormat(): Xrm.Page.StringAttributeFormat {
        return this.attribute.getFormat() as Xrm.Page.StringAttributeFormat;
    }

    public getMaxLength(): number {
        return this.maxLength;
    }

    public getValue(): string {
        return this.attribute.getValue();
    }

    public setValue(value: string): void {
        if (this.maxLength && value.length > this.maxLength) {
            throw new Error(("value cannot be greater than " + this.maxLength));
        } else {
            this.attribute.setValue(value);
        }
    }

    public addOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.attribute.addOnChange(handler);
    }

    public fireOnChange(): void {
        this.attribute.fireOnChange();
    }

    public getAttributeType(): string {
        return this.attribute.getAttributeType();
    }

    public getIsDirty(): boolean {
        return this.attribute.getIsDirty();
    }

    public getName(): string {
        return this.attribute.getName();
    }

    public getParent(): Xrm.Page.Entity {
        return this.attribute.getParent();
    }

    public getRequiredLevel(): Xrm.Page.RequirementLevel {
        return this.attribute.getRequiredLevel();
    }

    public getSubmitMode(): Xrm.Page.SubmitMode {
        return this.attribute.getSubmitMode();
    }

    public getUserPrivilege(): Xrm.Page.Privilege {
        return this.attribute.getUserPrivilege();
    }

    public removeOnChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.attribute.removeOnChange(handler);
    }

    public setRequiredLevel(requirementLevel: Xrm.Page.RequirementLevel): void {
        this.attribute.setRequiredLevel(requirementLevel);
    }

    public setSubmitMode(submitMode: Xrm.Page.SubmitMode): void {
        this.attribute.setSubmitMode(submitMode);
    }
}
