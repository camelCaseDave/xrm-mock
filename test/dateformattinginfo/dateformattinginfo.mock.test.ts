import { DateFormattingInfoMock } from "../../src/xrm-mock/";

describe("Xrm.Controls.DateFormattingInfoMock Mock", () => {
  beforeEach(() => {
    this.dateFormattingInfo = new DateFormattingInfoMock({
      abbreviatedDayNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
      abbreviatedMonthGenitiveNames: ["J", "F"],
      abbreviatedMonthNames: [],
      amDesignator: "a",
      calendar: null,
      calendarWeekRule: 0,
      dateSeparator: "",
      dayNames: [],
      firstDayOfWeek: 0,
      fullDateTimePattern: "",
      longDatePattern: "",
      longTimePattern: "",
      monthDayPattern: "",
      monthGenitiveNames: [],
      monthNames: [],
      pmDesignator: "",
      shortDatePattern: "",
      shortTimePattern: "",
      shortestDayNames: [],
      sortableDateTimePattern: "",
      timeSeparator: ".",
      universalSortableDateTimePattern: "yyyy/mm",
      yearMonthPattern: "yyyy/mm",
    });
  });

  it("should exist", () => {
    expect(this.dateFormattingInfo).toBeDefined();
  });
});
