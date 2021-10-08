/// <reference types="xrm" />
export declare class SaveOptionsMock implements Xrm.SaveOptions {
    UseSchedulingEngine?: boolean;
    saveMode: XrmEnum.SaveMode;
    constructor(UseSchedulingEngine?: boolean);
}
