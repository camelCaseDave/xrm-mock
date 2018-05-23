/// <reference types="xrm" />
import { DateControlMock } from "../../page/datecontrol/datecontrol.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";
export declare class DateAttributeMock extends AttributeMock<DateControlMock, Date> implements Xrm.Page.DateAttribute {
    static create(name: string, value?: Date): DateAttributeMock;
    private static defaultComponents(components);
    constructor(components: IDateAttributeComponents);
    getFormat(): Xrm.Page.DateAttributeFormat;
}
export interface IDateAttributeComponents extends IAttributeComponents<DateControlMock, Date> {
    format?: Xrm.Page.DateAttributeFormat;
}
