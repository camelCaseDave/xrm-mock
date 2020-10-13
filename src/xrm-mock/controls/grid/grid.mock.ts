export class GridMock implements Xrm.Controls.Grid {
  private rows: Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow>;
  private selectedRows: Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow>;

  constructor(rows: Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow>, selectedRows: Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow>) {
    this.rows = rows;
    this.selectedRows = selectedRows;
  }

  public getRows(): Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow> {
    return this.rows;
  }

  public getSelectedRows(): Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow> {
    return this.selectedRows;
  }

  public getTotalRecordCount(): number {
    return this.rows.getLength();
  }
}
