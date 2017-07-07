export class PrivilegeMock implements Xrm.Page.Privilege {
    canRead: boolean;
    canUpdate: boolean;
    canCreate: boolean;

    constructor(canRead: boolean, canUpdate: boolean, canCreate: boolean) {
        this.canRead = canRead;
        this.canUpdate = canUpdate;
        this.canCreate = canCreate;
    }
}