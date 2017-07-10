"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PrivilegeMock = (function () {
    function PrivilegeMock(canRead, canUpdate, canCreate) {
        this.canRead = canRead;
        this.canUpdate = canUpdate;
        this.canCreate = canCreate;
    }
    return PrivilegeMock;
}());
exports.PrivilegeMock = PrivilegeMock;
