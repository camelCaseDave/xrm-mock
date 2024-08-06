/// <reference types="xrm" />
export declare class PostSaveEventArgumentsMock implements Xrm.Events.PostSaveEventArguments {
    entityReference: Xrm.LookupValue;
    isSaveSuccess: boolean;
    saveErrorInfo: object;
    constructor(components?: IPostSaveEventArgumentsComponents);
    getEntityReference(): Xrm.LookupValue;
    getIsSaveSuccess(): boolean;
    getSaveErrorInfo(): object;
}
export interface IPostSaveEventArgumentsComponents {
    entityReference?: Xrm.LookupValue;
    isSaveSuccess?: boolean;
    saveErrorInfo?: object;
}
