export class SaveEventArgumentsMock implements Xrm.Events.SaveEventArguments {
  protected saveMode: XrmEnum.SaveMode;
  protected defaultPrevented: boolean = false;
  public preventOnError: boolean = false;

  public constructor(saveMode: XrmEnum.SaveMode) {
    this.saveMode = saveMode;
  }

  public preventDefaultOnError(): void {
    this.preventOnError = true;
  }

  public getSaveMode(): XrmEnum.SaveMode {
    return this.saveMode;
  }

  public isDefaultPrevented(): boolean {
    return this.defaultPrevented;
  }

  public preventDefault(): void {
    this.defaultPrevented = true;
  }
}