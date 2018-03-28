import { AttributeMock } from "./../attribute/attribute.mock";

export class EnumAttributeMock implements Xrm.Page.EnumAttribute {
    public controls: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    public initialValue: number | boolean;
    public attribute: AttributeMock;

    constructor(attribute: AttributeMock, controls?: Xrm.Collection.ItemCollection<Xrm.Page.Control>) {
        this.attribute = attribute;
        this.initialValue = attribute.getValue();
    }

    public getInitialValue(): number | boolean {
        return this.initialValue;
    }

    public getFormat(): Xrm.Page.AttributeFormat {
        return this.attribute.getFormat();
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

    public getValue(): any {
        return this.attribute.getValue();
    }

    public setValue(value: any): void {
        this.attribute.setValue(value);
    }
}
