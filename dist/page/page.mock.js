"use strict";
/// <reference path="../../node_modules/@types/xrm/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var PageMock = (function () {
    function PageMock(data, context, ui) {
        this.context = context;
        this.data = data;
        this.ui = ui;
    }
    PageMock.prototype.getAttribute = function (param) {
        if (!arguments.length) {
            return this.data.entity.attributes.get();
        }
        else if (param && typeof param === 'string') {
            return this.data.entity.attributes.get(param);
        }
        else if (typeof param === 'number') {
            return this.data.entity.attributes.get()[param];
        }
        else if (param !== undefined) {
            throw ('Xrm.Page.getAttribute(delegate) not implemented');
        }
    };
    PageMock.prototype.getControl = function (param) {
        if (!arguments.length) {
            return this.ui.controls.get();
        }
        else if (param && typeof param === "string") {
            return this.ui.controls.get(function (item) { return item.getName() === param; })[0];
        }
        else if (param && typeof param === "number") {
            return this.ui.controls.get()[param];
        }
        else if (param !== undefined) {
            throw ('getControl not implemented');
        }
    };
    return PageMock;
}());
exports.PageMock = PageMock;
