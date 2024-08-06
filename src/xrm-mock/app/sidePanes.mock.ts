export class SidePanesMock {
  public state: number;
  public createPane(paneOptions?: Xrm.App.PaneOptions): Xrm.Async.PromiseLike<Xrm.App.PaneObject>{
    throw new Error("Method not implemented.");
  };
  public getAllPanes(): Xrm.App.PaneObject[]{
    throw new Error("Method not implemented.");
  };
  public getPane(panelId: string): Xrm.App.PaneObject{
    throw new Error("Method not implemented.");
  };
  public getSelectedPane(): Xrm.App.PaneObject{
    throw new Error("Method not implemented.");
  };
}
