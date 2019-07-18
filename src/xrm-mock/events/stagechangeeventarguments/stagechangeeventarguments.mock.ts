export class StageChangeEventArgumentsMock implements Xrm.Events.StageChangeEventArguments {
  public getDirection(): Xrm.ProcessFlow.StageChangeDirection {
    throw new Error("Not implemented.");
  }

  public getStage(): Xrm.ProcessFlow.Stage {
    throw new Error("Not implemented.");
  }
}
