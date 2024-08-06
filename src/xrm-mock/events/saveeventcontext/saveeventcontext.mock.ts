import { EventContextWithEventArgsMock, IGenericEventContextComponents } from "../eventcontextwitheventargs.mock";
import { SaveEventArgumentsMock } from "../saveeventarguments/saveeventarguments.mock";

export class SaveEventContextMock extends EventContextWithEventArgsMock<Xrm.Events.SaveEventArguments> implements Xrm.Events.SaveEventContext {
  constructor(components?: ISaveEventContextComponents) {
    if (components?.saveMode
      && components?.eventArgs){
      throw new Error("SaveEventContextMock.constructor: saveMode and eventArgs cannot both be defined");
    }

    super(components);

    this.eventArgs ??= new SaveEventArgumentsMock(components?.saveMode ?? XrmEnum.SaveMode.Save);
  }
}

export interface IGenericSaveEventContextComponents<TArgs extends Xrm.Events.SaveEventArguments> extends IGenericEventContextComponents<TArgs> {
  saveMode?: XrmEnum.SaveMode;
}

export interface ISaveEventContextComponents extends IGenericSaveEventContextComponents<Xrm.Events.SaveEventArguments> {
}

