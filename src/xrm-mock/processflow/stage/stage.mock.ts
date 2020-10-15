export class StageMock implements Xrm.ProcessFlow.Stage {
  public id: string;
  public name: string;
  public status: Xrm.ProcessFlow.StageStatus;
  public category: XrmEnum.StageCategory;
  public steps: Xrm.ProcessFlow.Step[];

  constructor(id: string, name: string, status: Xrm.ProcessFlow.StageStatus, category?: XrmEnum.StageCategory,
              steps?: Xrm.ProcessFlow.Step[]) {
      this.id = id;
      this.name = name;
      this.status = status;
      this.category = category;
      this.steps = steps;
  }

  public getCategory(): { getValue(): XrmEnum.StageCategory } {
      const stageCategory = this.category;
      return {
          getValue(): XrmEnum.StageCategory {
              return stageCategory;
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

  public getStatus(): Xrm.ProcessFlow.StageStatus {
      return this.status;
  }

  public getSteps(): Xrm.ProcessFlow.Step[] {
      return this.steps;
  }

  public _setStatus(status: Xrm.ProcessFlow.StageStatus) {
      this.status = status;
  }

  public getNavigationBehavior(): any {
    throw new Error("getNavigationBehavior not implemented");
  }
}
