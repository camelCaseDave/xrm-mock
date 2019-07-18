/// <reference types="xrm" />
export declare class ExecuteResponseMock implements Xrm.ExecuteResponse {
    body: string;
    headers: any;
    ok: boolean;
    status: number;
    statusText: string;
    type: string;
    url: string;
    constructor(components: IExecuteResponseComponents);
}
export interface IExecuteResponseComponents {
    body?: string;
    headers?: any;
    ok?: boolean;
    status?: number;
    statusText?: string;
    type?: string;
    url?: string;
}
