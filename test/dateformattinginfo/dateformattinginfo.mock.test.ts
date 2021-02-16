import { DateFormattingInfoMock } from "../../src/xrm-mock/";

describe("Xrm.Controls.DateFormattingInfoMock Mock", () => {
  let dateFormattingInfo: DateFormattingInfoMock;

  beforeEach(() => {
    dateFormattingInfo = new DateFormattingInfoMock({
      AbbreviatedDayNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
      AbbreviatedMonthGenitiveNames: ["J", "F"],
      AbbreviatedMonthNames: [],
      AmDesignator: "a",
      Calendar: null,
      CalendarWeekRule: 0,
      DateSeparator: "",
      DayNames: [],
      FirstDayOfWeek: 0,
      FullDateTimePattern: "",
      LongDatePattern: "",
      LongTimePattern: "",
      MonthDayPattern: "",
      MonthGenitiveNames: [],
      MonthNames: [],
      PmDesignator: "",
      ShortDatePattern: "",
      ShortTimePattern: "",
      ShortestDayNames: [],
      SortableDateTimePattern: "",
      TimeSeparator: ".",
      UniversalSortableDateTimePattern: "yyyy/mm",
      YearMonthPattern: "yyyy/mm",
    });
  });

  it("should exist", () => {
    expect(dateFormattingInfo).toBeDefined();
  });
});
