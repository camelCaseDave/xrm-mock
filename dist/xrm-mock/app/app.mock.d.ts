/// <reference types="xrm" />
export declare class AppMock {
    addGlobalNotification(notification: any): Xrm.Async.PromiseLike<any>;
    clearGlobalNotification(uniqueId: string): Xrm.Async.PromiseLike<any>;
}
