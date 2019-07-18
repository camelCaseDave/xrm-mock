/// <reference types="xrm" />
export declare class ErrorResponseMock implements Xrm.ErrorResponse {
    errorCode: number;
    message: string;
    constructor(errorCode: number, message: string);
}
