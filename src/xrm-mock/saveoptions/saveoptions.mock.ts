export class SaveOptionsMock implements Xrm.SaveOptions {
  public UseSchedulingEngine?: boolean;
  public saveMode: XrmEnum.SaveMode;

  constructor(components: ISaveOptionsComponents) {
    this.UseSchedulingEngine = components.UseSchedulingEngine;
    this.saveMode = components.saveMode;
  }
}

export interface ISaveOptionsComponents {
  UseSchedulingEngine?: boolean;
  saveMode: XrmEnum.SaveMode;
}
