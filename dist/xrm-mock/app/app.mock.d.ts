/// <reference types="xrm" />
export declare class AppMock implements Xrm.App {
    globalNotifications: {
        [index: string]: Xrm.App.Notification;
    };
    private static count;
    constructor();
    addGlobalNotification(notification: Xrm.App.Notification): Xrm.Async.PromiseLike<string>;
    clearGlobalNotification(uniqueId: string): Xrm.Async.PromiseLike<string>;
    sidePanes: {
        state: number;
        createPane(paneOptions?: Xrm.App.PaneOptions): Xrm.Async.PromiseLike<Xrm.App.PaneObject>;
        getAllPanes(): Xrm.App.PaneObject[];
        getPane(panelId: string): Xrm.App.PaneObject | undefined;
        getSelectedPane(): Xrm.App.PaneObject;
    };
}
