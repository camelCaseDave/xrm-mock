export class GridRowMock implements Xrm.Controls.Grid.GridRow {
  public data: Xrm.Data;
  private gridRowData: Xrm.Controls.Grid.GridRowData;

  constructor(data: Xrm.Data, gridRowData: Xrm.Controls.Grid.GridRowData) {
    this.data = data;
    this.gridRowData = gridRowData;
  }

  public getData(): Xrm.Controls.Grid.GridRowData {
    return this.gridRowData;
  }
}
