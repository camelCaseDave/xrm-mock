/// <reference types="xrm" />
export declare class ClientContextMock implements Xrm.ClientContext {
    client: Xrm.Client;
    clientState: Xrm.ClientState;
    constructor(client: Xrm.Client, clientState: Xrm.ClientState);
    getClient(): Xrm.Client;
    getClientState(): Xrm.ClientState;
    getFormFactor(): XrmEnum.ClientFormFactor;
    isOffline(): boolean;
}
