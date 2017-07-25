/// <reference types="xrm" />
export declare class SaveEventArgumentsMock implements Xrm.Page.SaveEventArguments {
    saveMode: XrmEnum.SaveMode;
    defaultPrevented: boolean;
    constructor(saveMode: XrmEnum.SaveMode);
    getSaveMode(): XrmEnum.SaveMode;
    isDefaultPrevented(): boolean;
    preventDefault(): void;
}
