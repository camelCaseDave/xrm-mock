/// <reference types="xrm" />
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";
import { DateControlMock } from "../datecontrol/datecontrol.mock";
export declare class DateAttributeMock extends AttributeMock<DateControlMock, Date> implements Xrm.Page.DateAttribute {
    static create(name: string, value?: Date): DateAttributeMock;
    private static defaultComponents(components);
    constructor(components: IDateAttributeComponents);
    getFormat(): Xrm.Page.DateAttributeFormat;
}
export interface IDateAttributeComponents extends IAttributeComponents<DateControlMock, Date> {
    format?: Xrm.Page.DateAttributeFormat;
}
