/// <reference types="xrm" />
export declare class AddControlNotificationOptionsMock implements Xrm.Controls.AddControlNotificationOptions {
    actions?: Xrm.Controls.ControlNotificationAction[];
    messages: string[];
    notificationLevel?: Xrm.Controls.NotificationLevel;
    uniqueId: string;
    constructor(components: IAddControlNotificationOptionsComponents);
}
export interface IAddControlNotificationOptionsComponents {
    actions?: Xrm.Controls.ControlNotificationAction[];
    messages: string[];
    notificationLevel?: Xrm.Controls.NotificationLevel;
    uniqueId: string;
}
