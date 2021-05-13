import {
    AttributeMock,
    ControlMock,
    DataMock,
    EntityMock,
    ItemCollectionMock
} from "../../src/xrm-mock";


describe("Xrm.Data Mock", () => {
    const id = "{B05EC7CE-5D51-DF11-97E0-00155DB232D0}";
    const attributes: Array<AttributeMock<ControlMock, string>> = [];
    let entityMock: EntityMock;
    let dataMock: DataMock;

    beforeEach(() => {
        attributes.push(new AttributeMock({ name: "firstname", value: "Joe", isDirty: false, requiredLevel: "none" }));
        attributes.push(new AttributeMock({ name: "description", value: "" }));

        entityMock = new EntityMock({
            attributes: new ItemCollectionMock(attributes),
            id,
        });
        dataMock = new DataMock(entityMock);
    });

    it("should initialise", () => {
        expect(dataMock).toBeDefined();
    });

    it("should equals 0", () => {
        expect(dataMock.loadEventHandlers.length).toBe(0);
    });
});
