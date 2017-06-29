export class LookupValueMock implements Xrm.Page.LookupValue {
    id: string;
    name?: string;
    entityType: string;

    constructor(id: string, entityType: string, name?: string) {
        this.id = id;
        this.entityType = entityType;
        this.name = name;
    }
}