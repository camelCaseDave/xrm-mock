import { DateAttributeMock } from "../../attributes/dateattribute/dateattribute.mock";
import { IAttStandardControlComponents,
         IStandardControlComponents,
         StandardControlMock } from "../standardcontrol/standardcontrol.mock";

export class DateControlMock extends StandardControlMock<DateControlMock, DateAttributeMock, Date>
                             implements Xrm.Controls.DateControl {

    private static defaultComponents(components: IDateControlComponents): IDateControlComponents {
        if (!("showTime" in components)) {
            components.showTime = components.attribute
                ? components.attribute.getFormat() === "datetime"
                : false;
        }

        return components;
    }

    public showTime: boolean;

    constructor(components: IDateControlComponents) {
        super(DateControlMock.defaultComponents(components));
        this.showTime = components.showTime;
    }

    public getShowTime(): boolean {
        return this.showTime;
    }

    public setShowTime(showTime: boolean): void {
        // TODO: Does the Attribute format need to get updated as well?
        this.showTime = showTime;
    }
}

export interface IDateControlComponents extends IAttDateControlComponents,
                                                IStandardControlComponents<DateControlMock, DateAttributeMock, Date> {
    name: string;
}

export interface IAttDateControlComponents
        extends IAttStandardControlComponents<DateControlMock, DateAttributeMock, Date> {
    showTime?: boolean;
}
