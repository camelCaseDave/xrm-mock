export class MobileMock implements Xrm.Mobile {
    public offline: Xrm.MobileOffline;

    constructor(offline: Xrm.MobileOffline) {
        this.offline = offline;
    }
}
