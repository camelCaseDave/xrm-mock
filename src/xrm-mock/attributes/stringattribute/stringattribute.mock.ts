import { ItemCollectionMock } from "../../collection/itemcollection/itemcollection.mock";
import { ControlMock } from "../../controls/control/control.mock";
import { StringControlMock } from "../../controls/stringcontrol/stringcontrol.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";

export class StringAttributeMock extends AttributeMock<StringControlMock, string>
                                 implements Xrm.Attributes.StringAttribute {

    public static create(name: string, value?: string): StringAttributeMock {
        return new StringAttributeMock({ name, value }  as any as IStringAttributeComponents);
    }

    private static defaultComponents(components: IStringAttributeComponents): IStringAttributeComponents {
        components.attributeType = "string";
        return components;
    }

    public maxLength: number;

    constructor(components: IStringAttributeComponents) {
        super(StringAttributeMock.defaultComponents(components));
        this.format = components.format || "text";
        this.maxLength = components.maxLength || 100;
    }

    public getFormat(): Xrm.Attributes.StringAttributeFormat {
        return super.getFormat() as Xrm.Attributes.StringAttributeFormat;
    }

    public getMaxLength(): number {
        return this.maxLength;
    }

    public setValue(value: string): void {
        if (this.maxLength && value.length > this.maxLength) {
            throw new Error(("value cannot be greater than " + this.maxLength));
        } else {
            super.setValue(value);
        }
    }
}

export interface IStringAttributeComponents extends IAttributeComponents<StringControlMock, string> {
    format?: Xrm.Attributes.StringAttributeFormat;
    maxLength?: number;
}
