/// <reference types="xrm" />
export declare class GridRowDataMock implements Xrm.Controls.Grid.GridRowData {
    private entity;
    constructor(entity: Xrm.Controls.Grid.GridEntity);
    getEntity(): Xrm.Controls.Grid.GridEntity;
}
