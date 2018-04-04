import { ItemCollectionMock } from "../../collection/itemcollection/itemcollection.mock";
import { StringControlMock } from "../../page/stringcontrol/stringcontrol.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";
import { ControlMock } from "../control/control.mock";

export class StringAttributeMock extends AttributeMock<StringControlMock, string>
                                 implements Xrm.Page.StringAttribute {

    public static create(name: string, value?: string): StringAttributeMock {
        return new StringAttributeMock({ name, value }  as any as IStringAttributeComponents);
    }

    public maxLength: number;

    constructor(components: IStringAttributeComponents) {
        super(components);
        this.format = components.format || "text";
        this.maxLength = components.maxLength || 100;
    }

    public getFormat(): Xrm.Page.StringAttributeFormat {
        return super.getFormat() as Xrm.Page.StringAttributeFormat;
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
    format?: Xrm.Page.StringAttributeFormat;
    maxLength?: number;
}
