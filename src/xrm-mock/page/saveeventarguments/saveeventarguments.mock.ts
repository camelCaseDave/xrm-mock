export class SaveEventArgumentsMock implements Xrm.Page.SaveEventArguments {
      public saveMode: XrmEnum.SaveMode;
      public defaultPrevented: boolean = false;

      constructor(saveMode: XrmEnum.SaveMode) {
            this.saveMode = saveMode;
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
