export class SaveOptionsMock implements Xrm.SaveOptions {
  public UseSchedulingEngine?: boolean;
  public saveMode: XrmEnum.SaveMode;

  constructor(UseSchedulingEngine?: boolean) {
    this.UseSchedulingEngine = UseSchedulingEngine;
  }
}
