export class StepMock implements Xrm.ProcessFlow.Step {
  public required: boolean;
  public name: string;
  public attribute: string;

  constructor(name: string, attribute: string, required: boolean) {
      this.name = name;
      this.attribute = attribute;
      this.required = required;
  }

  public getAttribute(): string {
      return this.attribute;
  }

  public getName(): string {
      return this.name;
  }

  public isRequired(): boolean {
      return this.required;
  }
}
