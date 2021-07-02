/// <reference types="xrm" />
export declare class SaveOptionsMock implements Xrm.SaveOptions {
    UseSchedulingEngine?: boolean;
    saveMode: XrmEnum.SaveMode;
    constructor(components: ISaveOptionsComponents);
}
export interface ISaveOptionsComponents {
    UseSchedulingEngine?: boolean;
    saveMode: XrmEnum.SaveMode;
}
