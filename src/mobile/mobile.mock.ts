export class MobileMock implements Xrm.Mobile {
    offline: Xrm.MobileOffline;

    constructor(offline: Xrm.MobileOffline) {
        this.offline = offline;
    }
}