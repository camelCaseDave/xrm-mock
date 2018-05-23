export class SaveOptionsMock implements Xrm.SaveOptions {
  public UseSchedulingEngine?: boolean;

  constructor(UseSchedulingEngine?: boolean) {
    this.UseSchedulingEngine = UseSchedulingEngine;
  }
}
