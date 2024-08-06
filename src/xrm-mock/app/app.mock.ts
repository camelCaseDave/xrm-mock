import { XrmPromiseMock } from "../async/xrmpromise/xrmpromise.mock";
import { SidePanesMock } from "./sidePanes.mock";


export class AppMock implements Xrm.App  {
    public globalNotifications: {[index: string]: Xrm.App.Notification} = {};
    private static count = 0;

    constructor() {
        this.sidePanes = new SidePanesMock();
    }

    addGlobalNotification(notification: Xrm.App.Notification): Xrm.Async.PromiseLike<string> {
        AppMock.count += 1;
        const id = "00000000-0000-0000-0000-" + AppMock.count.toString().padStart(12, "0");
        this.globalNotifications[id] = notification;
        return new XrmPromiseMock(Promise.resolve(id));
    }

    clearGlobalNotification(uniqueId: string): Xrm.Async.PromiseLike<string> {
        delete this.globalNotifications[uniqueId];
        return new XrmPromiseMock(Promise.resolve(uniqueId));
    }

    public sidePanes: {
        state: number;
        createPane(paneOptions?: Xrm.App.PaneOptions): Xrm.Async.PromiseLike<Xrm.App.PaneObject>;
        getAllPanes(): Xrm.App.PaneObject[];
        getPane(panelId: string): Xrm.App.PaneObject | undefined;
        getSelectedPane(): Xrm.App.PaneObject;
    };
}
