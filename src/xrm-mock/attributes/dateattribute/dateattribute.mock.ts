import { DateControlMock } from "../../page/datecontrol/datecontrol.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";

export class DateAttributeMock extends AttributeMock<DateControlMock, Date>
                               implements Xrm.Page.DateAttribute {
    public static create(name: string, value?: Date): DateAttributeMock {
        return new DateAttributeMock({ name, value });
    }

    private static defaultComponents(components: IDateAttributeComponents): IDateAttributeComponents {
        if (!components.format) {
            components.format = "date";
        }
        components.attributeType = "datetime";
        return components;
    }

    constructor(components: IDateAttributeComponents) {
        super(DateAttributeMock.defaultComponents(components));
    }

    public getFormat(): Xrm.Page.DateAttributeFormat {
        return super.getFormat() as Xrm.Page.DateAttributeFormat;
    }
}

export interface IDateAttributeComponents extends IAttributeComponents<DateControlMock, Date>  {
    format?: Xrm.Page.DateAttributeFormat;
}
