export class PanelMock implements Xrm.Panel {
  public loadPanel(url: string, title: string): void {
    throw new Error("Not implemented.");
  }
}
