import {
    AttributeMock,
    DataMock,
    EntityMock,
    FormContextMock,
    ItemCollectionMock,
    PageMock,
    StringAttributeMock,
    StringControlMock,
    UiMock
} from "../../src/xrm-mock";


describe("Xrm.Page Mock", () => {
    let lastName: StringAttributeMock;
    let xrmPageMock: PageMock;
    let formContext: FormContextMock;

    beforeEach(() => {
        const attributes: Array<AttributeMock<StringControlMock, string>> = [];
        attributes.push(new AttributeMock<StringControlMock, string>({ name: "firstname", value: "Joe" }));
        attributes.push(new AttributeMock<StringControlMock, string>({ name: "description" }));
        lastName = new StringAttributeMock({
            isDirty: true,
            name: "lastname",
            requiredLevel: "recommended",
            submitMode: "always",
            value: "Bloggs",
        });
        attributes.push(lastName);
        const controls = [];
        controls.push(new StringControlMock({
            attribute: lastName,
            controlType: "standard",
            name: "lastname",
            uncommittedText: "Bloggs",
        }));
        controls.push(new StringControlMock({
            attribute: attributes[0] as any,
            controlType: "standard",
            name: "firstname",
            uncommittedText: "Bloggs",
        }));

        formContext = new FormContextMock(
            new DataMock(
            new EntityMock({ attributes: new ItemCollectionMock<AttributeMock<StringControlMock, string>>(attributes)})),
            new UiMock({
                controls: new ItemCollectionMock<StringControlMock>(controls),
            },
            ));
        xrmPageMock = new PageMock(null, formContext);
    });

    it("should exist", () => {
        expect(xrmPageMock).toBeDefined();
    });

    describe("getAttribute", () => {
        it("should exist", () => {
            expect(xrmPageMock.getAttribute).toBeDefined();
        });

        it("should get all", () => {
            expect(xrmPageMock.getAttribute().length).toBe(3);
        });

        it("by string should return Bloggs for lastname", () => {
            expect(xrmPageMock.getAttribute("lastname")).toBe(lastName);
        });

        it("by index should return Bloggs for 2", () => {
            expect(xrmPageMock.getAttribute(2)).toBe(lastName);
        });

        it("should get attribute and value in one line", () => {
            expect(xrmPageMock.getAttribute("firstname").getValue()).toBe("Joe");
        });

        it("should return null if the attribute doesn't exist", () => {
            expect(xrmPageMock.getAttribute("doesntexist")).toBeNull();
        });

        it("by delegate", () => {
            expect(xrmPageMock.getAttribute((a) => a.getAttributeType() === "string").length).toBe(3);
            expect(xrmPageMock.getAttribute((a) => a.getName() === "firstname").length).toBe(1);
            expect(xrmPageMock.getAttribute((a) => a.getName() === "notExist").length).toBe(0);
        });

        it("should throw error", () => {
            expect(() => { xrmPageMock.getAttribute([] as any); }).toThrowError();
        });
    });

    describe("getControl", () => {
        it("should exist", () => {
            expect(xrmPageMock.getControl).toBeDefined();
        });

        it("should get all", () => {
            expect(xrmPageMock.getControl().length).toBe(2);
            expect(xrmPageMock.getControl().length).toBe(2);
        });

        it("should get by index", () => {
            expect(xrmPageMock.getControl(0)).toBeDefined();
        });

        it("should return Bloggs for the control's bound attribute value", () => {
            expect(xrmPageMock.getControl<StringControlMock>("lastname").getAttribute().getValue()).toBe("Bloggs");
        });

        it("by delegate", () => {
            expect(xrmPageMock.getControl((c) => c.getControlType() === "standard").length).toBe(2);
            expect(xrmPageMock.getControl((c) => c.getControlType() === "standard").length).toBe(2);
            expect(xrmPageMock.getControl((c) => c.getName() === "firstname").length).toBe(1);
            expect(xrmPageMock.getControl((c) => c.getName() === "notExist").length).toBe(0);
        });

        it("should throw error", () => {
            expect(() => { xrmPageMock.getControl([] as any); }).toThrowError();
        });
    });
});
