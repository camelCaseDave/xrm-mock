/// <reference types="xrm" />
export declare class CalendarMock implements Xrm.Calendar {
    MinSupportedDateTime: Date;
    MaxSupportedDateTime: Date;
    AlgorithmType: number;
    CalendarType: number;
    Eras: number[];
    TwoDigitYearMax: number;
    IsReadOnly: boolean;
    constructor(components: ICalendarComponents);
}
export interface ICalendarComponents {
    MinSupportedDateTime: Date;
    MaxSupportedDateTime: Date;
    AlgorithmType: number;
    CalendarType: number;
    Eras: number[];
    TwoDigitYearMax: number;
    IsReadOnly: boolean;
}
