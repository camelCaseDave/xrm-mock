"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AutoCompleteCommandMock = (function () {
    function AutoCompleteCommandMock(id, label, icon, action) {
        this.id = id;
        this.label = label;
        this.icon = icon;
        this.action = action;
    }
    AutoCompleteCommandMock.prototype.action = function () { };
    return AutoCompleteCommandMock;
}());
exports.AutoCompleteCommandMock = AutoCompleteCommandMock;
