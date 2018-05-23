export class StageMock implements Xrm.ProcessFlow.Stage {
  public id: string;
  public name: string;
  public status: Xrm.Page.StageStatus;
  public category: XrmEnum.StageCategory;
  public steps: Xrm.Page.Step[];

  constructor(id: string, name: string, status: Xrm.Page.StageStatus, category?: XrmEnum.StageCategory,
              steps?: Xrm.Page.Step[]) {
      this.id = id;
      this.name = name;
      this.status = status;
      this.category = category;
      this.steps = steps;
  }

  public getCategory(): { getValue(): XrmEnum.StageCategory } {
      return {
          getValue(): XrmEnum.StageCategory {
              throw new Error("get category value not implemented");
          },
      };
  }

  public getEntityName(): string {
      throw new Error("get entity name not implemented");
  }

  public getId(): string {
      return this.id;
  }

  public getName(): string {
      return this.name;
  }

  public getStatus(): Xrm.Page.StageStatus {
      return this.status;
  }

  public getSteps(): Xrm.Page.Step[] {
      return this.steps;
  }

  public _setStatus(status: Xrm.Page.StageStatus) {
      this.status = status;
  }
}
