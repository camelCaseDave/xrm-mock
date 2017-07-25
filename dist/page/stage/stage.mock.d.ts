/// <reference types="xrm" />
export declare class StageMock implements Xrm.Page.Stage {
    id: string;
    name: string;
    status: Xrm.Page.Status;
    category: XrmEnum.StageCategory;
    steps: Xrm.Page.Step[];
    constructor(id: string, name: string, status: Xrm.Page.Status, category?: XrmEnum.StageCategory, steps?: Xrm.Page.Step[]);
    getCategory(): {
        getValue(): XrmEnum.StageCategory;
    };
    getEntityName(): string;
    getId(): string;
    getName(): string;
    getStatus(): Xrm.Page.Status;
    getSteps(): Xrm.Page.Step[];
}
