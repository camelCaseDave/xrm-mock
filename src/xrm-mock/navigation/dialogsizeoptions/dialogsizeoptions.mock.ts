export class DialogSizeOptionsMock implements Xrm.Navigation.DialogSizeOptions {
  public height: number;
  public width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }
}
