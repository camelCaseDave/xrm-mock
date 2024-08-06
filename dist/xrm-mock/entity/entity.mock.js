"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityMock = void 0;
var xrm_mock_generator_1 = require("../../xrm-mock-generator");
var itemcollection_mock_1 = require("../collection/itemcollection/itemcollection.mock");
var eventcontext_mock_1 = require("../events/eventcontext/eventcontext.mock");
var postsaveeventarguments_mock_1 = require("../events/postsaveeventarguments.mock");
var postsaveeventcontext_mock_1 = require("../events/postsaveeventcontext.mock");
var saveeventcontextasync_mock_1 = require("../events/saveeventcontextasync.mock");
var EntityMock = /** @class */ (function () {
    function EntityMock(components) {
        var _a;
        components = components !== null && components !== void 0 ? components : {};
        this.id = components.id || "{deadbeef-dead-beef-dead-beefdeadbeaf}";
        this.entityName = components.entityName || "contact";
        this.primaryValue = components.primaryValue || "Default Contact";
        this.attributes = (_a = components.attributes) !== null && _a !== void 0 ? _a : new itemcollection_mock_1.ItemCollectionMock();
        this.postSaveEventHandlers = [];
        this.saveEventHandlers = [];
    }
    EntityMock.prototype.addOnPostSave = function (handler) {
        this.postSaveEventHandlers.push(handler);
    };
    EntityMock.prototype.addOnSave = function (handler) {
        this.saveEventHandlers.push(handler);
    };
    EntityMock.prototype.getEntityName = function () {
        return this.entityName;
    };
    EntityMock.prototype.getDataXml = function () {
        throw new Error(("getDataXml not implemented"));
    };
    EntityMock.prototype.getEntityReference = function () {
        return {
            entityType: this.entityName,
            id: this.id,
            name: this.primaryValue,
        };
    };
    EntityMock.prototype.getId = function () {
        return this.id;
    };
    EntityMock.prototype.getIsDirty = function () {
        var isDirty = false;
        if (this.attributes) {
            for (var i = 0; i < this.attributes.getLength(); i++) {
                var attr = this.attributes.get(i);
                if (attr.getIsDirty()) {
                    isDirty = true;
                    break;
                }
            }
        }
        return isDirty;
    };
    EntityMock.prototype.getPrimaryAttributeValue = function () {
        return this.primaryValue;
    };
    EntityMock.prototype.isValid = function () {
        throw new Error("isValid not implemented.");
    };
    EntityMock.prototype.removeOnPostSave = function (handler) {
        var index = this.postSaveEventHandlers.indexOf(handler);
        this.postSaveEventHandlers.splice(index);
    };
    EntityMock.prototype.removeOnSave = function (handler) {
        var index = this.saveEventHandlers.indexOf(handler);
        this.saveEventHandlers.splice(index);
    };
    EntityMock.prototype.save = function (saveMode) {
        var _a;
        var context = this.getSaveContext(saveMode);
        for (var _i = 0, _b = this.saveEventHandlers; _i < _b.length; _i++) {
            var handler = _b[_i];
            context.setDepth(this.saveEventHandlers.indexOf(handler));
            handler(context);
        }
        if (context.getEventArgs().isDefaultPrevented()) {
            return;
        }
        if (!(((_a = this.postSaveEventHandlers) === null || _a === void 0 ? void 0 : _a.length) > 0)) {
            return;
        }
        var postContext = this.getPostSaveContext();
        for (var _c = 0, _d = this.postSaveEventHandlers; _c < _d.length; _c++) {
            var handler = _d[_c];
            postContext.setDepth(this.postSaveEventHandlers.indexOf(handler));
            handler(postContext);
        }
    };
    EntityMock.prototype.getSaveContext = function (saveMode) {
        var _a;
        var eventContext = (_a = xrm_mock_generator_1.XrmMockGenerator.getEventContext()) !== null && _a !== void 0 ? _a : new eventcontext_mock_1.EventContextMock({});
        eventContext.depth = 0;
        var mode;
        switch (saveMode) {
            case "saveandclose":
                mode = 2 /* XrmEnum.SaveMode.SaveAndClose */;
                break;
            case "saveandnew":
                mode = 59 /* XrmEnum.SaveMode.SaveAndNew */;
                break;
            default:
                mode = typeof saveMode === "number"
                    ? saveMode
                    : 1 /* XrmEnum.SaveMode.Save */;
                break;
        }
        return new saveeventcontextasync_mock_1.SaveEventContextAsyncMock({
            context: eventContext.context,
            depth: eventContext.depth,
            saveMode: mode,
            eventSource: eventContext.eventSource,
            formContext: eventContext.formContext,
            sharedVariables: eventContext.sharedVariables
        });
    };
    EntityMock.prototype.getPostSaveContext = function () {
        var _a;
        var eventContext = (_a = xrm_mock_generator_1.XrmMockGenerator.getEventContext()) !== null && _a !== void 0 ? _a : new eventcontext_mock_1.EventContextMock({});
        return new postsaveeventcontext_mock_1.PostSaveEventContextMock({
            context: eventContext.context,
            depth: eventContext.depth,
            eventArgs: new postsaveeventarguments_mock_1.PostSaveEventArgumentsMock({
                entityReference: this.getEntityReference(),
                isSaveSuccess: true,
                saveErrorInfo: undefined
            }),
            eventSource: eventContext.eventSource,
            formContext: eventContext.formContext,
            sharedVariables: eventContext.sharedVariables
        });
    };
    return EntityMock;
}());
exports.EntityMock = EntityMock;
//# sourceMappingURL=entity.mock.js.map