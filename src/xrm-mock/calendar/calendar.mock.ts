export class CalendarMock implements Xrm.Calendar {
  public MinSupportedDateTime: Date;
  public MaxSupportedDateTime: Date;
  public AlgorithmType: number;
  public CalendarType: number;
  public Eras: number[];
  public TwoDigitYearMax: number;
  public IsReadOnly: boolean;

  constructor(components: ICalendarComponents) {
    this.MinSupportedDateTime = components.MinSupportedDateTime;
    this.MaxSupportedDateTime = components.MaxSupportedDateTime;
    this.AlgorithmType = components.AlgorithmType;
    this.CalendarType = components.CalendarType;
    this.Eras = components.Eras;
    this.TwoDigitYearMax = components.TwoDigitYearMax;
    this.IsReadOnly = components.IsReadOnly;
  }
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
