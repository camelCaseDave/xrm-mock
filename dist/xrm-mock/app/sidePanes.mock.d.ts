/// <reference types="xrm" />
export declare class SidePanesMock {
    state: number;
    createPane(paneOptions?: Xrm.App.PaneOptions): Xrm.Async.PromiseLike<Xrm.App.PaneObject>;
    getAllPanes(): Xrm.App.PaneObject[];
    getPane(panelId: string): Xrm.App.PaneObject;
    getSelectedPane(): Xrm.App.PaneObject;
}
