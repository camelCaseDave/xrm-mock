export class LookupAttributeMock implements Xrm.Page.Attribute {
    public controls: Xrm.Collection.ItemCollection<Xrm.Page.LookupControl>;
    public attribute: Xrm.Page.Attribute;
    public isPartyList: boolean;

    constructor(attribute: Xrm.Page.Attribute, isPartyList: boolean,
                controls?: Xrm.Collection.ItemCollection<Xrm.Page.LookupControl>) {
        this.attribute = attribute;
        this.controls = controls;
        this.isPartyList = isPartyList;
    }

    public getFormat(): Xrm.Page.AttributeFormat {
        return this.attribute.getFormat();
    }

    public getIsPartyList(): boolean {
        return this.isPartyList;
    }

    public getValue(): Xrm.Page.LookupValue[] {
        return this.attribute.getValue();
    }

    public setValue(value: Xrm.Page.LookupValue[]): void {
        this.attribute.setValue(value);
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
