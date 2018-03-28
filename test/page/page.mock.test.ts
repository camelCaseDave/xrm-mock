import { StringControlMock } from "../../src/xrm-mock/page/stringcontrol/stringcontrol.mock";
import { UiKeyPressableMock } from "../../src/xrm-mock/page/uikeypressable/uikeypressable.mock";
import { UiMock } from "../../src/xrm-mock/ui/ui.mock";
import { AutoLookupControlMock } from "./../../src/xrm-mock/page/autolookupcontrol/autolookupcontrol.mock";
import { ControlMock } from "./../../src/xrm-mock/page/control/control.mock";
import { StandardControlMock } from "./../../src/xrm-mock/page/standardcontrol/standardcontrol.mock";
/// <reference path="../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { ItemCollectionMock } from "../../src/xrm-mock/collection/itemcollection/itemcollection.mock";
import { DataMock } from "../../src/xrm-mock/data/data.mock";
import { AttributeMock } from "../../src/xrm-mock/page/attribute/attribute.mock";
import { EntityMock } from "../../src/xrm-mock/page/entity/entity.mock";
import { PageMock } from "../../src/xrm-mock/page/page.mock";
import { XrmStaticMock } from "../../src/xrm-mock/xrmstatic.mock";

describe("Xrm.Page Mock", () => {
    beforeEach(() => {
        const attributes: AttributeMock[] = [];
        attributes.push(new AttributeMock({ name: "firstname", value: "Joe", isDirty: false, requiredLevel: "none" }));
        attributes.push(new AttributeMock({ name: "description", value: "" }));
        this.lastName = new AttributeMock({
            isDirty: true,
            name: "lastname",
            requiredLevel: "recommended",
            submitMode: "always",
            value: "Bloggs",
        });
        attributes.push(this.lastName);

        this.xrmPageMock = new PageMock({
            data: new DataMock(
                new EntityMock("{0}",
                    new ItemCollectionMock<AttributeMock>(attributes))),
            ui: new UiMock({
                controls: new ItemCollectionMock<StringControlMock>([
                    new StringControlMock(new AutoLookupControlMock(new StandardControlMock({
                        attribute: this.lastName,
                        control: new ControlMock({
                            controlType: "standard",
                            name: "lastname",
                        }),
                    }), new UiKeyPressableMock())),
                ]),
            }),
        });
    });

    it("should exist", () => {
        expect(this.xrmPageMock).toBeDefined();
    });

    describe("getAttribute", () => {
        it("should exist", () => {
            expect(this.xrmPageMock.getAttribute).toBeDefined();
        });

        it("by string should return Bloggs for lastname", () => {
            expect(this.xrmPageMock.getAttribute("lastname")).toBe(this.lastName);
        });

        it("by index should return Bloggs for 2", () => {
            expect(this.xrmPageMock.getAttribute(2)).toBe(this.lastName);
        });

        it("should get attribute and value in one line", () => {
            expect(this.xrmPageMock.getAttribute("firstname").getValue()).toBe("Joe");
        });
    });

    describe("getControl", () => {
        it("should exist", () => {
            expect(this.xrmPageMock.getControl).toBeDefined();
        });

        it("should get by index", () => {
            expect(this.xrmPageMock.getControl(0)).toBeDefined();
        });

        it("should return Bloggs for the control's bound attribute value", () => {
            expect(this.xrmPageMock.getControl("lastname").getValue()).toBe("Bloggs");
        });
    });
});
