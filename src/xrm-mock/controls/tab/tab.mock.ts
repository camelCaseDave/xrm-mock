export class TabMock implements Xrm.Controls.Tab {
  public sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section>;

  private uiStandardElement: Xrm.Controls.UiStandardElement;
  private uiFocusableElement: Xrm.Controls.UiFocusable;
  private name: string;
  private parent: Xrm.Ui;
  private displayState: Xrm.DisplayState;

  constructor(components: ITabComponents) {
    this.uiStandardElement = components.uiStandardElement;
    this.uiFocusableElement = components.uiFocusableElement;
    this.name = components.name;
    this.parent = components.parent;
    this.displayState = components.displayState;
    this.sections = components.sections;
  }

  public getDisplayState(): Xrm.DisplayState {
    return this.displayState;
  }
  public getName(): string {
    return this.name;
  }

  public getParent(): Xrm.Ui {
    return this.parent;
  }

  public setDisplayState(displayState: Xrm.DisplayState): void {
    this.displayState = displayState;
  }

  public setVisible(visible: boolean): void {
    return this.uiStandardElement.setVisible(visible);
  }

  public getVisible(): boolean {
    return this.uiStandardElement.getVisible();
  }

  public getLabel(): string {
    return this.uiStandardElement.getLabel();
  }

  public setLabel(label: string): void {
    return this.uiStandardElement.setLabel(label);
  }

  public setFocus(): void {
    return this.uiFocusableElement.setFocus();
  }
}

export interface ITabComponents {
  uiStandardElement?: Xrm.Controls.UiStandardElement;
  uiFocusableElement?: Xrm.Controls.UiFocusable;
  name?: string;
  parent?: Xrm.Ui;
  displayState?: Xrm.DisplayState;
  sections?: Xrm.Collection.ItemCollection<Xrm.Controls.Section>;
}
