/// <reference types="xrm" />
export declare class ControlNotificationActionMock implements Xrm.Controls.ControlNotificationAction {
    message?: string;
    actions: Array<() => void>;
    constructor(actions: Array<() => void>, message?: string);
}
