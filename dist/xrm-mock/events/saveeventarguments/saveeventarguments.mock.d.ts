/// <reference types="xrm" />
export declare class SaveEventArgumentsMock implements Xrm.Events.SaveEventArguments {
    protected saveMode: XrmEnum.SaveMode;
    protected defaultPrevented: boolean;
    preventOnError: boolean;
    constructor(saveMode: XrmEnum.SaveMode);
    preventDefaultOnError(): void;
    getSaveMode(): XrmEnum.SaveMode;
    isDefaultPrevented(): boolean;
    preventDefault(): void;
}
