export class SaveEventArgumentsMock implements Xrm.Events.SaveEventArguments {
  public preventDefaultOnError(): void {
    throw new Error("Method not implemented.");
  }

  public getSaveMode(): XrmEnum.SaveMode {
    throw new Error("Not implemented.");
  }

  public isDefaultPrevented(): boolean {
    throw new Error("Not implemented.");
  }

  public preventDefault(): void {
    throw new Error("Not implemented.");
  }
}
