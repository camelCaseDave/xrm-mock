export class OpenQuickCreateSuccessCallbackObjectMock implements Xrm.Async.OpenQuickCreateSuccessCallbackObject {
    public savedEntityReference: Xrm.Page.LookupValue;

    constructor(savedEntityReference: Xrm.Page.LookupValue) {
        this.savedEntityReference = savedEntityReference;
    }
}
