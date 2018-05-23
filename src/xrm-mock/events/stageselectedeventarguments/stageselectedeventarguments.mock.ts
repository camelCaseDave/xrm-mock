export class StageSelectedEventArgumentsMock implements Xrm.Events.StageSelectedEventArguments {
  public getStage(): Xrm.ProcessFlow.Stage {
    throw new Error("Not implemented.");
  }
}
