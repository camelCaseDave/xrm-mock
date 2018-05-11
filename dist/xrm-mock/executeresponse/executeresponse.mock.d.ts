export declare class ExecuteResponseMock implements Xrm.ExecuteResponse {
    body: string;
    headers: any;
    ok: boolean;
    status: number;
    statusText: string;
    type: string;
    url: string;
    ExecuteResponseMock(components: IExecuteResponseComponents): void;
}
export interface IExecuteResponseComponents {
    body: string;
    headers: any;
    ok: boolean;
    status: number;
    statusText: string;
    type: string;
    url: string;
}
