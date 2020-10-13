/// <reference types="xrm" />
export declare class StageMock implements Xrm.ProcessFlow.Stage {
    id: string;
    name: string;
    status: Xrm.ProcessFlow.StageStatus;
    category: XrmEnum.StageCategory;
    steps: Xrm.ProcessFlow.Step[];
    constructor(id: string, name: string, status: Xrm.ProcessFlow.StageStatus, category?: XrmEnum.StageCategory, steps?: Xrm.ProcessFlow.Step[]);
    getCategory(): {
        getValue(): XrmEnum.StageCategory;
    };
    getEntityName(): string;
    getId(): string;
    getName(): string;
    getStatus(): Xrm.ProcessFlow.StageStatus;
    getSteps(): Xrm.ProcessFlow.Step[];
    _setStatus(status: Xrm.ProcessFlow.StageStatus): void;
    getNavigationBehavior(): any;
}
