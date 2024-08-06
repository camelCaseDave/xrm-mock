import { IGenericSaveEventContextComponents } from "./saveeventcontext/saveeventcontext.mock";
import { EventContextWithEventArgsMock } from "./eventcontextwitheventargs.mock";
import { SaveEventArgumentsAsyncMock } from "./saveeventargumentsasync.mock";

export class SaveEventContextAsyncMock extends EventContextWithEventArgsMock<Xrm.Events.SaveEventArgumentsAsync> implements Xrm.Events.SaveEventContextAsync {
  public asyncTimeoutDisabled: boolean = false;

  constructor(components?: ISaveEventContextAsyncComponents) {
    if (components?.saveMode
      && components?.eventArgs){
      throw new Error("SaveEventContextAsyncMock.constructor: saveMode and eventArgs cannot both be defined");
    }

    super(components);

    this.eventArgs ??= new SaveEventArgumentsAsyncMock(components?.saveMode ?? XrmEnum.SaveMode.Save);
  }

  disableAsyncTimeout(): void {
    this.asyncTimeoutDisabled = true;
  }
}

export interface ISaveEventContextAsyncComponents extends IGenericSaveEventContextComponents<Xrm.Events.SaveEventArgumentsAsync> {
}