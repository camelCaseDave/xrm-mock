import { ControlMock } from "../control/control.mock";

export class TimelineWallMock extends ControlMock implements Xrm.Controls.TimelineWall {
  public refresh(): void {
    throw new Error("Not implemented.");
  }
}
