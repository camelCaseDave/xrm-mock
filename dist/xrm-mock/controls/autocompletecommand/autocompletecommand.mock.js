"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoCompleteCommandMock = void 0;
var AutoCompleteCommandMock = /** @class */ (function () {
    function AutoCompleteCommandMock(id, label, icon, action) {
        this.id = id;
        this.label = label;
        this.icon = icon;
        this.action = action;
    }
    AutoCompleteCommandMock.prototype.action = function () {
        throw new Error("Action not implemented.");
    };
    return AutoCompleteCommandMock;
}());
exports.AutoCompleteCommandMock = AutoCompleteCommandMock;
//# sourceMappingURL=autocompletecommand.mock.js.map