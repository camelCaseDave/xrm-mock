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

      public getEventArgs(): Xrm.Events.SaveEventArguments {
            throw new Error("Method not implemented.");
      }

      public getContext(): Xrm.GlobalContext {
            throw new Error("Method not implemented.");
      }

      public getDepth(): number {
            throw new Error("Method not implemented.");
      }

      public getEventSource(): Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity {
            throw new Error("Method not implemented.");
      }

      public getFormContext(): Xrm.FormContext {
            throw new Error("Method not implemented.");
      }

      public getSharedVariable<T>(key: string): T {
            throw new Error("Method not implemented.");
      }

      public setSharedVariable<T>(key: string, value: T): void {
            throw new Error("Method not implemented.");
      }
}
