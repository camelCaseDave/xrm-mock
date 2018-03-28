/// <reference types="xrm" />
export declare class StageMock implements Xrm.Page.Stage {
    id: string;
    name: string;
    status: Xrm.Page.StageStatus;
    category: XrmEnum.StageCategory;
    steps: Xrm.Page.Step[];
    constructor(id: string, name: string, status: Xrm.Page.StageStatus, category?: XrmEnum.StageCategory, steps?: Xrm.Page.Step[]);
    getCategory(): {
        getValue(): XrmEnum.StageCategory;
    };
    getEntityName(): string;
    getId(): string;
    getName(): string;
    getStatus(): Xrm.Page.StageStatus;
    getSteps(): Xrm.Page.Step[];
    _setStatus(status: Xrm.Page.StageStatus): void;
}
