/// <reference types="xrm" />
export declare class SaveEventArgumentsMock implements Xrm.Events.SaveEventArguments {
    preventDefaultOnError(): void;
    getSaveMode(): XrmEnum.SaveMode;
    isDefaultPrevented(): boolean;
    preventDefault(): void;
}
