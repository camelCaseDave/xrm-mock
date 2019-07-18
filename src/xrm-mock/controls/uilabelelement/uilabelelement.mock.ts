export class UiLabelElementMock implements Xrm.Controls.UiLabelElement {
  constructor(private label: string) { }

  public getLabel(): string {
      return this.label;
  }

  public setLabel(label: string): void {
      this.label = label;
  }
}
