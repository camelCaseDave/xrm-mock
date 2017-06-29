export class ClientContextMock implements Xrm.ClientContext {
    client: Xrm.Client;
    clientState: Xrm.ClientState;

    constructor(client: Xrm.Client, clientState: Xrm.ClientState) {
        this.client = client;
        this.clientState = clientState;
    }

    getClient(): Xrm.Client {
        return this.client;
    }

    getClientState(): Xrm.ClientState {
        return this.clientState;
    }
}