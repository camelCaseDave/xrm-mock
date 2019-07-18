export class ControlNotificationActionMock implements Xrm.Controls.ControlNotificationAction {
  public message?: string;
  public actions: Array<() => void>;

  constructor(actions: Array<() => void>, message?: string) {
    this.message = message;
    this.actions = actions;
  }
}
