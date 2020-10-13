export class ViewSelectorMock implements Xrm.Controls.ViewSelector {
  private visible: boolean;
  private currentView: Xrm.LookupValue;

  constructor(isVisible: boolean) {
    this.visible = isVisible;
  }

  public getCurrentView(): Xrm.LookupValue {
    return this.currentView;
  }

  public setCurrentView(viewSelectorItem: Xrm.LookupValue): void {
    this.currentView = viewSelectorItem;
  }

  public isVisible(): boolean {
    return this.visible;
  }

}
