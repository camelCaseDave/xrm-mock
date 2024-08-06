export class PostSaveEventArgumentsMock implements Xrm.Events.PostSaveEventArguments {
    public entityReference: Xrm.LookupValue;
    public isSaveSuccess: boolean;
    public saveErrorInfo: object;

    constructor(components?: IPostSaveEventArgumentsComponents) {
      this.entityReference = components.entityReference;
      this.isSaveSuccess = components.isSaveSuccess;
      this.saveErrorInfo = components.saveErrorInfo;
    }

    getEntityReference(): Xrm.LookupValue {
      return this.entityReference;
    }

    getIsSaveSuccess(): boolean {
      return this.isSaveSuccess;
    }

    getSaveErrorInfo(): object {
      return this.saveErrorInfo;
    }
}

export interface IPostSaveEventArgumentsComponents {
    entityReference?: Xrm.LookupValue,
    isSaveSuccess?: boolean,
    saveErrorInfo?: object
}