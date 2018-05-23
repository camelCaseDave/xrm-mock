export class ProcessMock implements Xrm.ProcessFlow.Process {
  public id: string;
  public name: string;
  public stages: Xrm.Collection.ItemCollection<Xrm.Page.Stage>;
  public rendered: boolean;

  constructor(components: IProcessComponents) {
      this.id = components.id;
      this.name = components.name;
      this.stages = components.stages;
      this.rendered = components.rendered;
  }

  public getId(): string {
      return this.id;
  }

  public getName(): string {
      return this.name;
  }

  public getStages(): Xrm.Collection.ItemCollection<Xrm.Page.Stage> {
      return this.stages;
  }

  public isRendered(): boolean {
      return this.rendered;
  }
}

export interface IProcessComponents {
  id: string;
  name: string;
  stages: Xrm.Collection.ItemCollection<Xrm.Page.Stage>;
  rendered: boolean;
}
