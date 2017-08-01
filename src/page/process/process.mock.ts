export class ProcessMock implements Xrm.Page.Process {
    id: string;
    name: string;
    stages: Xrm.Collection.ItemCollection<Xrm.Page.Stage>;
    rendered: boolean;

    constructor(components: ProcessComponents) {
        this.id = components.id;
        this.name = components.name;
        this.stages = components.stages;
        this.rendered = components.rendered;
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getStages(): Xrm.Collection.ItemCollection<Xrm.Page.Stage> {
        return this.stages;
    }

    isRendered(): boolean {
        return this.rendered;
    }
}

export interface ProcessComponents {
    id: string;
    name: string;
    stages: Xrm.Collection.ItemCollection<Xrm.Page.Stage>;
    rendered: boolean;
}
