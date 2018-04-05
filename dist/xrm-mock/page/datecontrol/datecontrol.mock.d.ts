import { DateAttributeMock } from "../dateattribute/dateattribute.mock";
import { IAttStandardControlComponents, IStandardControlComponents, StandardControlMock } from "../standardcontrol/standardcontrol.mock";
export declare class DateControlMock extends StandardControlMock<DateControlMock, DateAttributeMock, Date> implements Xrm.Page.DateControl {
    private static defaultComponents(components);
    showTime: boolean;
    constructor(components: IDateControlComponents);
    getShowTime(): boolean;
    setShowTime(showTime: boolean): void;
}
export interface IDateControlComponents extends IAttDateControlComponents, IStandardControlComponents<DateControlMock, DateAttributeMock, Date> {
}
export interface IAttDateControlComponents extends IAttStandardControlComponents<DateControlMock, DateAttributeMock, Date> {
    showTime?: boolean;
}
