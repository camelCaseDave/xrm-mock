"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmMock = require("../xrm-mock/index");
var context_1 = require("./context");
var formcontext_1 = require("./formcontext");
var EventContext = /** @class */ (function () {
    function EventContext() {
    }
    EventContext.createEventContext = function (entity, client) {
        var eventContext = new XrmMock.EventContextMock({
            context: context_1.default.createContext(client),
            formContext: formcontext_1.default.createFormContext(entity),
        });
        return eventContext;
    };
    EventContext.Context = new context_1.default();
    EventContext.FormContext = new formcontext_1.default();
    return EventContext;
}());
exports.default = EventContext;
//# sourceMappingURL=eventcontext.js.map