import { AttributeMock } from "./../attribute/attribute.mock";
import { DateControlMock } from "./../datecontrol/datecontrol.mock";

export class DateAttributeMock implements Xrm.Page.Attribute {
    public controls: Xrm.Collection.ItemCollection<Xrm.Page.DateControl>;
    public attribute: any; // TODO - AttributeMock;
    public dateAttributeFormat: Xrm.Page.DateAttributeFormat;

    constructor(components: IDateAttributeComponents) {
        this.attribute = components.attribute;
        this.dateAttributeFormat = components.dateAttributeFormat;
        this.controls = components.controls;
        this.attribute.attributeFormat = components.dateAttributeFormat;
    }

    public getFormat(): Xrm.Page.DateAttributeFormat {
        return this.attribute.getFormat() as Xrm.Page.DateAttributeFormat;
    }

    public getValue(): Date {
        return this.attribute.getValue() as Date;
    }

    public setValue(value: Date): void {
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

export interface IDateAttributeComponents {
    attribute: any; // TODO - AttributeMock;
    dateAttributeFormat: Xrm.Page.DateAttributeFormat;
    controls?: Xrm.Collection.ItemCollection<Xrm.Page.DateControl>;
}
