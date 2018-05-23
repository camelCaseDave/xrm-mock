export class AddControlNotificationOptionsMock implements Xrm.Controls.AddControlNotificationOptions {
  public actions?: Xrm.Controls.ControlNotificationAction[];
  public messages: string[];
  public notificationLevel?: Xrm.Controls.NotificationLevel;
  public uniqueId: string;

  constructor(components: IAddControlNotificationOptionsComponents) {
    this.actions = components.actions;
    this.messages = components.messages;
    this.notificationLevel = components.notificationLevel;
    this.uniqueId = components.uniqueId;
  }
}

export interface IAddControlNotificationOptionsComponents {
  actions?: Xrm.Controls.ControlNotificationAction[];
  messages: string[];
  notificationLevel?: Xrm.Controls.NotificationLevel;
  uniqueId: string;
}
