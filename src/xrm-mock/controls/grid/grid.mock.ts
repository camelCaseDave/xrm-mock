export class GridMock implements Xrm.Controls.Grid {
  private rows: Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow>;

  constructor(rows: Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow>) {
    this.rows = rows;
  }

  public getRows(): Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow> {
    return this.rows;
  }

  public getSelectedRows(): Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow> {
    throw new Error("Not implemented.");
  }

  public getTotalRecordCount(): number {
    throw new Error("Not implemented.");
  }
}
