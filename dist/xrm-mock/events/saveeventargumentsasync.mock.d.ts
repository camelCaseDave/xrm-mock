/// <reference types="xrm" />
import { SaveEventArgumentsMock } from "./saveeventarguments/saveeventarguments.mock";
export declare class SaveEventArgumentsAsyncMock extends SaveEventArgumentsMock implements Xrm.Events.SaveEventArgumentsAsync {
    asyncTimeoutDisabled: boolean;
    constructor(saveMode: XrmEnum.SaveMode);
    disableAsyncTimeout(): void;
}
