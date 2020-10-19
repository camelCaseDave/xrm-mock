/// <reference types="xrm" />
export declare class DateFormattingInfoMock implements Xrm.DateFormattingInfo {
    AmDesignator: string;
    AbbreviatedDayNames: string[];
    AbbreviatedMonthGenitiveNames: string[];
    AbbreviatedMonthNames: string[];
    CalendarWeekRule: number;
    Calendar: Xrm.Calendar;
    DateSeparator: string;
    DayNames: string[];
    FirstDayOfWeek: number;
    FullDateTimePattern: string;
    LongDatePattern: string;
    LongTimePattern: string;
    MonthDayPattern: string;
    MonthGenitiveNames: string[];
    MonthNames: string[];
    PmDesignator: string;
    ShortDatePattern: string;
    ShortTimePattern: string;
    ShortestDayNames: string[];
    SortableDateTimePattern: string;
    TimeSeparator: string;
    UniversalSortableDateTimePattern: string;
    YearMonthPattern: string;
    constructor(components: IDateFormattingInfoComponents);
}
export interface IDateFormattingInfoComponents {
    AmDesignator: string;
    AbbreviatedDayNames: string[];
    AbbreviatedMonthGenitiveNames: string[];
    AbbreviatedMonthNames: string[];
    CalendarWeekRule: number;
    Calendar: Xrm.Calendar;
    DateSeparator: string;
    DayNames: string[];
    FirstDayOfWeek: number;
    FullDateTimePattern: string;
    LongDatePattern: string;
    LongTimePattern: string;
    MonthDayPattern: string;
    MonthGenitiveNames: string[];
    MonthNames: string[];
    PmDesignator: string;
    ShortDatePattern: string;
    ShortTimePattern: string;
    ShortestDayNames: string[];
    SortableDateTimePattern: string;
    TimeSeparator: string;
    UniversalSortableDateTimePattern: string;
    YearMonthPattern: string;
}
