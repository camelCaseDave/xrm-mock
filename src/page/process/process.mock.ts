/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

class ProcessMock implements Xrm.Page.Process {
    id: string;
    name: string;
    stages: Xrm.Collection.ItemCollection<Xrm.Page.Stage>;
    rendered: boolean;

    constructor(id: string, name: string, stages: Xrm.Collection.ItemCollection<Xrm.Page.Stage>, rendered: boolean) {
        this.id = id;
        this.name = name;
        this.stages = stages;
        this.rendered = rendered;
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
