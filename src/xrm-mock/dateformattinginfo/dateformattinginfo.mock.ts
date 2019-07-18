export class DateFormattingInfoMock implements Xrm.DateFormattingInfo {
  public amDesignator: string;
  public abbreviatedDayNames: string[];
  public abbreviatedMonthGenitiveNames: string[];
  public abbreviatedMonthNames: string[];
  public calendarWeekRule: number;
  public calendar: Xrm.Calendar;
  public dateSeparator: string;
  public dayNames: string[];
  public firstDayOfWeek: number;
  public fullDateTimePattern: string;
  public longDatePattern: string;
  public longTimePattern: string;
  public monthDayPattern: string;
  public monthGenitiveNames: string[];
  public monthNames: string[];
  public pmDesignator: string;
  public shortDatePattern: string;
  public shortTimePattern: string;
  public shortestDayNames: string[];
  public sortableDateTimePattern: string;
  public timeSeparator: string;
  public universalSortableDateTimePattern: string;
  public yearMonthPattern: string;

  constructor(components: IDateFormattingInfoComponents) {
    this.amDesignator = components.amDesignator;
    this.abbreviatedDayNames = components.abbreviatedDayNames;
    this.abbreviatedMonthGenitiveNames = components.abbreviatedMonthGenitiveNames;
    this.abbreviatedMonthNames = components.abbreviatedMonthNames;
    this.calendarWeekRule = components.calendarWeekRule;
    this.calendar = components.calendar;
    this.dateSeparator = components.dateSeparator;
    this.dayNames = components.dayNames;
    this.firstDayOfWeek = components.firstDayOfWeek;
    this.fullDateTimePattern = components.fullDateTimePattern;
    this.longDatePattern = components.longDatePattern;
    this.longTimePattern = components.longTimePattern;
    this.monthDayPattern = components.monthDayPattern;
    this.monthGenitiveNames = components.monthGenitiveNames;
    this.monthNames = components.monthNames;
    this.pmDesignator = components.pmDesignator;
    this.shortDatePattern = components.shortDatePattern;
    this.shortTimePattern = components.shortTimePattern;
    this.shortestDayNames = components.shortestDayNames;
    this.sortableDateTimePattern = components.sortableDateTimePattern;
    this.timeSeparator = components.timeSeparator;
    this.universalSortableDateTimePattern = components.universalSortableDateTimePattern;
    this.yearMonthPattern = components.yearMonthPattern;
  }
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
