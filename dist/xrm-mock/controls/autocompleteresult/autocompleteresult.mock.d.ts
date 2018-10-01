/// <reference types="xrm" />
export declare class AutoCompleteResultMock implements Xrm.Controls.AutoCompleteResult {
    id: string | number;
    icon?: string;
    fields: string[];
    constructor(id: string | number, fields: string[], icon?: string);
}
