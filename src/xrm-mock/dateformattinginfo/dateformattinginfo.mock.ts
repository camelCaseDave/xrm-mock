export class DateFormattingInfoMock implements Xrm.DateFormattingInfo {
  public AmDesignator: string;
  public AbbreviatedDayNames: string[];
  public AbbreviatedMonthGenitiveNames: string[];
  public AbbreviatedMonthNames: string[];
  public CalendarWeekRule: number;
  public Calendar: Xrm.Calendar;
  public DateSeparator: string;
  public DayNames: string[];
  public FirstDayOfWeek: number;
  public FullDateTimePattern: string;
  public LongDatePattern: string;
  public LongTimePattern: string;
  public MonthDayPattern: string;
  public MonthGenitiveNames: string[];
  public MonthNames: string[];
  public PmDesignator: string;
  public ShortDatePattern: string;
  public ShortTimePattern: string;
  public ShortestDayNames: string[];
  public SortableDateTimePattern: string;
  public TimeSeparator: string;
  public UniversalSortableDateTimePattern: string;
  public YearMonthPattern: string;

  constructor(components: IDateFormattingInfoComponents) {
    this.AmDesignator = components.AmDesignator;
    this.AbbreviatedDayNames = components.AbbreviatedDayNames;
    this.AbbreviatedMonthGenitiveNames = components.AbbreviatedMonthGenitiveNames;
    this.AbbreviatedMonthNames = components.AbbreviatedMonthNames;
    this.CalendarWeekRule = components.CalendarWeekRule;
    this.Calendar = components.Calendar;
    this.DateSeparator = components.DateSeparator;
    this.DayNames = components.DayNames;
    this.FirstDayOfWeek = components.FirstDayOfWeek;
    this.FullDateTimePattern = components.FullDateTimePattern;
    this.LongDatePattern = components.LongDatePattern;
    this.LongTimePattern = components.LongTimePattern;
    this.MonthDayPattern = components.MonthDayPattern;
    this.MonthGenitiveNames = components.MonthGenitiveNames;
    this.MonthNames = components.MonthNames;
    this.PmDesignator = components.PmDesignator;
    this.ShortDatePattern = components.ShortDatePattern;
    this.ShortTimePattern = components.ShortTimePattern;
    this.ShortestDayNames = components.ShortestDayNames;
    this.SortableDateTimePattern = components.SortableDateTimePattern;
    this.TimeSeparator = components.TimeSeparator;
    this.UniversalSortableDateTimePattern = components.UniversalSortableDateTimePattern;
    this.YearMonthPattern = components.YearMonthPattern;
  }
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
