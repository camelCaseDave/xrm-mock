/// <reference types="xrm" />
export declare class GridEntityMock implements Xrm.Controls.Grid.GridEntity {
    private reference;
    constructor(reference: Xrm.LookupValue);
    getEntityName(): string;
    getEntityReference(): Xrm.LookupValue;
    getId(): string;
    getPrimaryAttributeValue(): string;
}
