export class LookupAttributeMock implements Xrm.Page.Attribute {
    controls: Xrm.Collection.ItemCollection<Xrm.Page.LookupControl>;
    attribute: Xrm.Page.Attribute;
    isPartyList: boolean;

    constructor(attribute: Xrm.Page.Attribute, isPartyList: boolean, controls?: Xrm.Collection.ItemCollection<Xrm.Page.LookupControl>) {
        this.attribute = attribute;
        this.controls = controls;
        this.isPartyList = isPartyList;
    }

    getFormat(): Xrm.Page.AttributeFormat {
        return this.attribute.getFormat();
    }

    getIsPartyList(): boolean {
        return this.isPartyList;
    }

    getValue(): Xrm.Page.LookupValue[] {
        return this.attribute.getValue();
    }

    setValue(value: Xrm.Page.LookupValue[]): void {
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