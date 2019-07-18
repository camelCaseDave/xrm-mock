/// <reference types="xrm" />
export declare class PrivilegeMock implements Xrm.Privilege {
    canRead: boolean;
    canUpdate: boolean;
    canCreate: boolean;
    constructor(canRead: boolean, canUpdate: boolean, canCreate: boolean);
}
