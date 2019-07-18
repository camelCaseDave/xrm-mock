"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CalendarMock = /** @class */ (function () {
    function CalendarMock(components) {
        this.MinSupportedDateTime = components.MinSupportedDateTime;
        this.MaxSupportedDateTime = components.MaxSupportedDateTime;
        this.AlgorithmType = components.AlgorithmType;
        this.CalendarType = components.CalendarType;
        this.Eras = components.Eras;
        this.TwoDigitYearMax = components.TwoDigitYearMax;
        this.IsReadOnly = components.IsReadOnly;
    }
    return CalendarMock;
}());
exports.CalendarMock = CalendarMock;
//# sourceMappingURL=calendar.mock.js.map