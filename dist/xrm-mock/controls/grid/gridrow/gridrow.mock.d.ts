/// <reference types="xrm" />
export declare class GridRowMock implements Xrm.Controls.Grid.GridRow {
    data: Xrm.Data;
    private gridRowData;
    constructor(data: Xrm.Data, gridRowData: Xrm.Controls.Grid.GridRowData);
    getData(): Xrm.Controls.Grid.GridRowData;
}
