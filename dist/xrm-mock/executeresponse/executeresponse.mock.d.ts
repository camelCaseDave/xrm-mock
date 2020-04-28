/// <reference types="xrm" />
export declare class ExecuteResponseMock implements Xrm.ExecuteResponse {
    body: ReadableStream<Uint8Array>;
    headers: Headers;
    ok: boolean;
    redirected: boolean;
    status: number;
    statusText: string;
    type: ResponseType;
    url: string;
    trailer: Promise<Headers>;
    bodyUsed: boolean;
    private notImplementedError;
    constructor(components: IExecuteResponseComponents);
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
    clone(): Response;
}
export interface IExecuteResponseComponents {
    body?: ReadableStream<Uint8Array>;
    headers?: Headers;
    ok?: boolean;
    redirected?: boolean;
    status?: number;
    statusText?: string;
    type?: ResponseType;
    url?: string;
    trailer?: Promise<Headers>;
    bodyUsed?: boolean;
}
