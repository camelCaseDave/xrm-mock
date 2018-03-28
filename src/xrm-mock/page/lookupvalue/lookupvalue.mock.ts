export class LookupValueMock implements Xrm.Page.LookupValue {
    public id: string;
    public name?: string;
    public entityType: string;

    constructor(id: string, entityType: string, name?: string) {
        this.id = id;
        this.entityType = entityType;
        this.name = name;
    }
}
