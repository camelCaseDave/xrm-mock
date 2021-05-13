import {
    AttributeMock,
    ControlMock,
    DataMock,
    EntityMock,
    FormContextMock,
    ItemCollectionMock,
    PageMock
} from "../../../src/xrm-mock";

describe("Xrm.Entity Mock", () => {
    const id = "{0}";
    const entityName = "contact"
    const attributes: Xrm.Attributes.Attribute[] = [];
    const lastName: AttributeMock<ControlMock, string> = new AttributeMock({
        isDirty: false,
        name: "lastname",
        requiredLevel: "recommended",
        submitMode: "always",
        value: "Bloggs",
    });
    let entityMock: EntityMock;
    let formContext: FormContextMock;
    let xrmPageMock: PageMock;

    beforeEach(() => {
        attributes.push(new AttributeMock({ name: "firstname", value: "Joe", isDirty: false, requiredLevel: "none" }));
        attributes.push(new AttributeMock({ name: "description", value: "" }));
        attributes.push(lastName);

        formContext = new FormContextMock(new DataMock(entityMock), null);
        entityMock = new EntityMock({ id, entityName, attributes: new ItemCollectionMock<Xrm.Attributes.Attribute>(attributes) });
        xrmPageMock = new PageMock(null, formContext);
    });

    it("should exist", () => {
        expect(entityMock).toBeDefined();
    });

    it("should not be dirty", () => {
        expect(entityMock.getIsDirty()).toBe(false);
    });

    it("should be dirty when an attribute value changes", () => {
        expect(entityMock.getIsDirty()).toBe(false);
        lastName.setValue("Lasty");
        expect(lastName.getValue()).toBe("Lasty");
        expect(lastName.getIsDirty()).toBe(true);
        expect(entityMock.getIsDirty()).toBe(true);
    });

    it("should get an id of 0", () => {
        expect(entityMock.getId()).toBe(id);
    });

    it("should get an entityName of contact", () => {
        expect(entityMock.getEntityName()).toBe(entityName);
    });

    it("should add and execute onSave event", () => {
        let depth: number;

        function onSave(context: Xrm.Events.SaveEventContext) {
            depth = context.getDepth();
        }

        entityMock.addOnSave(onSave);

        expect(entityMock.saveEventHandlers.length).toBe(1);

        entityMock.save();

        expect(depth).toBe(0);
    });

    it("should remove an onSave event", () => {
        // tslint:disable-next-line:no-empty
        function onSave(context: Xrm.Events.SaveEventContext) {
        }

        entityMock.addOnSave(onSave);
        entityMock.removeOnSave(onSave);

        expect(entityMock.saveEventHandlers.length).toBe(0);
    });
});
