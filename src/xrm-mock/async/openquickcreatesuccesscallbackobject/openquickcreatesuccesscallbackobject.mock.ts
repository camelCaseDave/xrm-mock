export class OpenQuickCreateSuccessCallbackObjectMock implements Xrm.Async.OpenQuickCreateSuccessCallbackObject {
    public savedEntityReference: Xrm.LookupValue;

    constructor(savedEntityReference: Xrm.LookupValue) {
        this.savedEntityReference = savedEntityReference;
    }
}
