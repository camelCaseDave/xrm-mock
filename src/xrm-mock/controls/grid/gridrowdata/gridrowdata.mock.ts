export class GridRowDataMock implements Xrm.Controls.Grid.GridRowData {
  private entity: Xrm.Controls.Grid.GridEntity;

  constructor(entity: Xrm.Controls.Grid.GridEntity) {
    this.entity = entity;
  }

  public getEntity(): Xrm.Controls.Grid.GridEntity {
    return this.entity;
  }
}
