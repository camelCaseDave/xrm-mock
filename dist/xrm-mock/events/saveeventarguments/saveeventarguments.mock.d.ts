/// <reference types="xrm" />
export declare class SaveEventArgumentsMock implements Xrm.Events.SaveEventArguments {
    getSaveMode(): XrmEnum.SaveMode;
    isDefaultPrevented(): boolean;
    preventDefault(): void;
}
