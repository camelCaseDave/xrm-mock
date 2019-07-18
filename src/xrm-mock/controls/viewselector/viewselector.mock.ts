export class ViewSelectorMock implements Xrm.Controls.ViewSelector {
  private visible: boolean;
  private currentView: Xrm.Controls.ViewSelectorItem;

  constructor(isVisible: boolean) {
    this.visible = isVisible;
  }

  public getCurrentView(): Xrm.Controls.ViewSelectorItem {
    return this.currentView;
  }
  public isVisible(): boolean {
    return this.visible;
  }
  public setCurrentView(viewSelectorItem: Xrm.Controls.ViewSelectorItem): void {
    this.currentView = viewSelectorItem;
  }
}
