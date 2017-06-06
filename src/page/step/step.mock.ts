/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

class StepMock implements Xrm.Page.Step {
    required: boolean;
    name: string;
    attribute: string;
    
    constructor(name: string, attribute: string, required: boolean) {
        this.name = name;
        this.attribute = attribute;
        this.required = required;
    }

    getAttribute(): string {
        return this.attribute;
    }
   
    getName(): string {
        return this.name;
    }

    isRequired(): boolean{
        return this.required;
    }
}
