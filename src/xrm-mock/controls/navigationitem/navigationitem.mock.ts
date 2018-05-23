export class NavigationItemMock implements Xrm.Controls.NavigationItem {
  private id: string;
  private standardElement: Xrm.Controls.UiStandardElement;
  private focusable: Xrm.Controls.UiFocusable;

  constructor(id: string, standardElement: Xrm.Controls.UiStandardElement, focusable: Xrm.Controls.UiFocusable) {
    this.id = id;
    this.standardElement = standardElement;
    this.focusable = focusable;
  }

  public setVisible(visible: boolean): void {
    return this.standardElement.setVisible(visible);
  }

  public getVisible(): boolean {
    return this.standardElement.getVisible();
  }

  public getLabel(): string {
    return this.standardElement.getLabel();
  }

  public setLabel(label: string): void {
    return this.standardElement.setLabel(label);
  }

  public setFocus(): void {
    return this.focusable.setFocus();
  }

  public getId(): string {
    return this.id;
  }
}
