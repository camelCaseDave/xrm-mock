export class BooleanAttributeMock implements Xrm.Page.BooleanAttribute {
    public controls: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    public attribute: Xrm.Page.EnumAttribute;
    public initialValue: boolean;

    constructor(attribute: Xrm.Page.EnumAttribute, controls?: Xrm.Collection.ItemCollection<Xrm.Page.Control>) {
        this.attribute = attribute;
        this.initialValue = attribute.getValue();
    }

    public getInitialValue(): boolean {
        return this.initialValue;
    }

    public getValue(): boolean {
        return this.attribute.getValue() as boolean;
    }

    public setValue(value: boolean): void {
        this.attribute.setValue(value);
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
}
