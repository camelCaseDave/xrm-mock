/// <reference types="xrm" />
export declare class DateFormattingInfoMock implements Xrm.DateFormattingInfo {
    amDesignator: string;
    abbreviatedDayNames: string[];
    abbreviatedMonthGenitiveNames: string[];
    abbreviatedMonthNames: string[];
    calendarWeekRule: number;
    calendar: Xrm.Calendar;
    dateSeparator: string;
    dayNames: string[];
    firstDayOfWeek: number;
    fullDateTimePattern: string;
    longDatePattern: string;
    longTimePattern: string;
    monthDayPattern: string;
    monthGenitiveNames: string[];
    monthNames: string[];
    pmDesignator: string;
    shortDatePattern: string;
    shortTimePattern: string;
    shortestDayNames: string[];
    sortableDateTimePattern: string;
    timeSeparator: string;
    universalSortableDateTimePattern: string;
    yearMonthPattern: string;
    constructor(components: IDateFormattingInfoComponents);
}
export interface IDateFormattingInfoComponents {
    amDesignator: string;
    abbreviatedDayNames: string[];
    abbreviatedMonthGenitiveNames: string[];
    abbreviatedMonthNames: string[];
    calendarWeekRule: number;
    calendar: Xrm.Calendar;
    dateSeparator: string;
    dayNames: string[];
    firstDayOfWeek: number;
    fullDateTimePattern: string;
    longDatePattern: string;
    longTimePattern: string;
    monthDayPattern: string;
    monthGenitiveNames: string[];
    monthNames: string[];
    pmDesignator: string;
    shortDatePattern: string;
    shortTimePattern: string;
    shortestDayNames: string[];
    sortableDateTimePattern: string;
    timeSeparator: string;
    universalSortableDateTimePattern: string;
    yearMonthPattern: string;
}
