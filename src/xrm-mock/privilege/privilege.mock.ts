export class PrivilegeMock implements Xrm.Privilege {
    public canRead: boolean;
    public canUpdate: boolean;
    public canCreate: boolean;

    constructor(canRead: boolean, canUpdate: boolean, canCreate: boolean) {
        this.canRead = canRead;
        this.canUpdate = canUpdate;
        this.canCreate = canCreate;
    }
}
