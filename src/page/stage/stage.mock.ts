export class StageMock implements Xrm.Page.Stage {
    id: string;
    name: string;
    status: Xrm.Page.Status;
    category: XrmEnum.StageCategory;
    steps: Xrm.Page.Step[];

    constructor(id: string, name: string, status: Xrm.Page.Status, category?: XrmEnum.StageCategory, steps?: Xrm.Page.Step[]) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.category = category;
        this.steps = steps;
    }

    getCategory(): { getValue(): XrmEnum.StageCategory } {
        return { getValue(): XrmEnum.StageCategory {
            throw('get category value not implemented');
        } }; 
    }

    getEntityName(): string {
        throw('get entity name not implemented');
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getStatus(): Xrm.Page.Status {
        return this.status;
    }

    getSteps(): Xrm.Page.Step[] {
        return this.steps;
    }
}
