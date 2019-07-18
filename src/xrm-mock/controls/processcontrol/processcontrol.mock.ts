export class ProcessControlMock implements Xrm.Controls.ProcessControl {
  private displayState: Xrm.DisplayState;
  private getVisibleElement: Xrm.Controls.UiCanGetVisibleElement;
  private setVisibleElement: Xrm.Controls.UiCanSetVisibleElement;

  constructor(displayState: Xrm.DisplayState, getVisibleElement: Xrm.Controls.UiCanGetVisibleElement, setVisibleElement: Xrm.Controls.UiCanSetVisibleElement) {
    this.displayState = displayState;
    this.getVisibleElement = getVisibleElement;
    this.setVisibleElement = setVisibleElement;
  }

  public getVisible(): boolean {
    return this.getVisibleElement.getVisible();
  }

  public setVisible(visible: boolean) {
    return this.setVisibleElement.setVisible(visible);
  }

  public setDisplayState(displayState: Xrm.DisplayState): void {
    this.displayState = displayState;
  }

  public getDisplayState(): Xrm.DisplayState {
    return this.displayState;
  }

  public reflow(updateUI: boolean, parentStage: string, nextStage: string): void {
    throw new Error("Not implemented.");
  }
}
