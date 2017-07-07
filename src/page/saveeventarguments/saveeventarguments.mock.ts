export class SaveEventArgumentsMock implements Xrm.Page.SaveEventArguments {
      saveMode: XrmEnum.SaveMode;
      defaultPrevented: boolean = false;

      constructor(saveMode: XrmEnum.SaveMode) {
            this.saveMode = saveMode;
      }

      getSaveMode(): XrmEnum.SaveMode {
            return this.saveMode;
      }

      isDefaultPrevented(): boolean {
            return this.defaultPrevented;
      }

      preventDefault(): void {
            this.defaultPrevented = true;
      }
}