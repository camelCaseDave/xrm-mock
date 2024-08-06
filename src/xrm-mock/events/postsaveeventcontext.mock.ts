import { PostSaveEventArgumentsMock } from "./postsaveeventarguments.mock";
import { EventContextWithEventArgsMock, IGenericEventContextComponents } from "./eventcontextwitheventargs.mock";

export class PostSaveEventContextMock extends EventContextWithEventArgsMock<Xrm.Events.PostSaveEventArguments> implements Xrm.Events.PostSaveEventContext {
  constructor(components?: IPostSaveEventContextComponents) {
    super(components);

    this.eventArgs ??= new PostSaveEventArgumentsMock();
  }
}

export interface IPostSaveEventContextComponents extends IGenericEventContextComponents<Xrm.Events.PostSaveEventArguments> {
  eventArgs?: Xrm.Events.PostSaveEventArguments;
}
