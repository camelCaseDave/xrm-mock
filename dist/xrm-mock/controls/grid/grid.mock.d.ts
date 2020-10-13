/// <reference types="xrm" />
export declare class GridMock implements Xrm.Controls.Grid {
    private rows;
    private selectedRows;
    constructor(rows: Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow>, selectedRows: Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow>);
    getRows(): Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow>;
    getSelectedRows(): Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow>;
    getTotalRecordCount(): number;
}
