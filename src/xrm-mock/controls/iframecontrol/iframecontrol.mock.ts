import { ControlMock } from "../control/control.mock";

export class IframeControlMock extends ControlMock implements Xrm.Controls.IframeControl {
  public setVisible(visible: boolean): void {
    throw new Error("setVisible not implemented.");
  }
  public getObject(): any {
      throw new Error("getObject not implemented.");
  }
  public getContentWindow(): Promise<Window> {
      throw new Error("getContentWindow not implemented.");
  }
  public getSrc(): string {
      throw new Error("getSrc not implemented.");
  }
  public setSrc(src: string): void {
      throw new Error("setSrc not implemented.");
  }
  public getInitialUrl(): string {
    throw new Error("getInitialUrl not implemented.");
  }
  public getDisabled(): boolean {
    throw new Error("getDisabled not implemented.");
  }
  public setDisabled(value: boolean): void {
    throw new Error("setDisabled not implemented.");
  }
  public setFocus(): void {
    throw new Error("setFocus not implemented.");
  }
}
