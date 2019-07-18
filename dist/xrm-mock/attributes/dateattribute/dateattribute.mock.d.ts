/// <reference types="xrm" />
import { DateControlMock } from "../../controls/datecontrol/datecontrol.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";
export declare class DateAttributeMock extends AttributeMock<DateControlMock, Date> implements Xrm.Attributes.DateAttribute {
    static create(name: string, value?: Date): DateAttributeMock;
    private static defaultComponents;
    constructor(components: IDateAttributeComponents);
    getFormat(): Xrm.Attributes.DateAttributeFormat;
}
export interface IDateAttributeComponents extends IAttributeComponents<DateControlMock, Date> {
    format?: Xrm.Attributes.DateAttributeFormat;
}
