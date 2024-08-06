import { SaveEventArgumentsMock } from "./saveeventarguments/saveeventarguments.mock";

export class SaveEventArgumentsAsyncMock extends SaveEventArgumentsMock
                                       implements Xrm.Events.SaveEventArgumentsAsync {
  public asyncTimeoutDisabled: boolean = false;

  constructor(saveMode: XrmEnum.SaveMode) {
    super(saveMode);
  }

  disableAsyncTimeout(): void {
    this.asyncTimeoutDisabled = true;
  }
}