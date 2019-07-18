/// <reference types="xrm" />
import { DateAttributeMock } from "../../attributes/dateattribute/dateattribute.mock";
import { IAttStandardControlComponents, IStandardControlComponents, StandardControlMock } from "../standardcontrol/standardcontrol.mock";
export declare class DateControlMock extends StandardControlMock<DateControlMock, DateAttributeMock, Date> implements Xrm.Controls.DateControl {
    private static defaultComponents;
    showTime: boolean;
    constructor(components: IDateControlComponents);
    getShowTime(): boolean;
    setShowTime(showTime: boolean): void;
}
export interface IDateControlComponents extends IAttDateControlComponents, IStandardControlComponents<DateControlMock, DateAttributeMock, Date> {
    name: string;
}
export interface IAttDateControlComponents extends IAttStandardControlComponents<DateControlMock, DateAttributeMock, Date> {
    showTime?: boolean;
}
